import { useEffect, useState } from "react";

import GameNav from "./GameNav";
import GameButtons from "./GameButtons";
import PlayerCards from "./PlayerCards";
import PlayerLayout from "./PlayerLayout";
import GameLayout from "./GameLayout";
import Players from "./Players";
import Spinner from "../components/Spinner";
import Popup from "./Popup";
import ErrorMessage from "./ErrorMessage";

import styles from "./styles/Game.module.css";

const convertCard = [
  { value: "KING", convertedValue: 10 },
  { value: "QUEEN", convertedValue: 10 },
  { value: "JACK", convertedValue: 10 },
  { value: "ACE", convertedValue: 1 },
];

const calculatePoint = (player) =>
  player?.cards.reduce((acc, value) => {
    const convertedCard = convertCard.find(
      (card) => card.value === value.value
    );
    if (convertedCard) return convertedCard.convertedValue + acc;
    return Number(value.value) + acc;
  }, 0);

function Game() {
  const [player1, setPlayer1] = useState(null);
  const [player2, setPlayer2] = useState(null);

  const [bet, setBet] = useState(0);
  const [money, setMoney] = useState(1000);
  const [isLoading, setIsLoading] = useState(false);

  const [isDeal, setIsDeal] = useState(false);
  const [is2x, setIs2x] = useState(false);
  const [isPopup, setIsPopup] = useState(false);

  const [error, setError] = useState("");

  useEffect(
    function () {
      if (calculatePoint(player1) === 21) setIsPopup(true);
      if (calculatePoint(player1) > 21) setIsPopup(true);
    },
    [player1]
  );

  async function getCard(setPlayer) {
    try {
      const res = await fetch(
        "https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
      );
      if (!res) throw new Error(`HTTP error! status: ${res.status}`);

      const data = await res.json();
      if (!data.success || !data.shuffled)
        throw new Error("Error when shuffling or Failed when get deck id");

      const cardRes = await fetch(
        `https://www.deckofcardsapi.com/api/deck/${data.deck_id}/draw/?count=2`
      );
      if (!cardRes)
        throw new Error(`HTTP error! getting card, status: ${res.status}`);

      const cardData = await cardRes.json();
      setPlayer(cardData);
    } catch (e) {
      setError(e.message);
    }
  }

  async function drawCard(player, setPlayer, num = 1) {
    try {
      setIsLoading(true);
      const res = await fetch(
        `https://www.deckofcardsapi.com/api/deck/${player.deck_id}/draw/?count=${num}`
      );
      if (!res)
        throw new Error(`HTTP error! draw player card status: ${res.status}`);

      const data = await res.json();
      setPlayer((player) => ({
        ...player,
        cards: [...player.cards, ...data.cards],
      }));
    } catch (e) {
      setError(e.message);
    } finally {
      setIsLoading(false);
    }
  }

  const handleDeal = async () => {
    if (bet <= 0) return;
    if (bet * 2 > money) setIs2x(true);
    setIsDeal(true);
    setIsLoading(true);
    await getCard(setPlayer1);
    await getCard(setPlayer2);
    setIsLoading(false);
  };

  const handleHit = () => {
    drawCard(player1, setPlayer1);
  };

  const handleStand = async () => {
    if (calculatePoint(player2) < 9)
      await drawCard(player2, setPlayer2, Math.floor(Math.random() * 3) + 1);

    if (calculatePoint(player2) < 17)
      await drawCard(player2, setPlayer2, Math.floor(Math.random() * 2) + 1);

    setIsPopup(true);
  };

  const handle2x = () => {
    if (is2x) return;
    setBet((bet) => (bet * 2 < money ? bet * 2 : bet));
    setIs2x(true);
  };

  const handleResult = (calculate, win) => {
    setMoney((money) => (calculate === win ? money + bet : money - bet));
    setIsPopup(false);
    setPlayer1(null);
    setPlayer2(null);
    setIsDeal(false);
    setIs2x(false);
    setBet(0);
  };

  return (
    <main className={styles.content}>
      <GameNav money={money} />
      <GameLayout>
        <PlayerLayout isLoading={isLoading}>
          {player2 && !isLoading && <PlayerCards cards={player2.cards} />}
          {player1 && !isLoading && <PlayerCards cards={player1.cards} />}
          {isLoading && <Spinner />}
        </PlayerLayout>
        <GameButtons
          bet={bet}
          money={money}
          isDeal={isDeal}
          is2x={is2x}
          isLoading={isLoading}
          setBet={setBet}
          handleDeal={handleDeal}
          handleHit={handleHit}
          handleStand={handleStand}
          handle2x={handle2x}
        />
      </GameLayout>
      {player1 && player2 && (
        <Players
          player1Point={calculatePoint(player1)}
          player2Point={calculatePoint(player2)}
        />
      )}
      {isPopup && (
        <Popup
          player1Point={calculatePoint(player1)}
          player2Point={calculatePoint(player2)}
          bet={bet}
          handleResult={handleResult}
        />
      )}
      {error && <ErrorMessage error={error} />}
    </main>
  );
}

export default Game;
