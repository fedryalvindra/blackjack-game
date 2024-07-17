import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { popUpAppear } from "./redux/gameSlice";

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

export const calculatePoint = (player) =>
  player?.cards.reduce((acc, value) => {
    const convertedCard = convertCard.find(
      (card) => card.value === value.value
    );
    if (convertedCard) return convertedCard.convertedValue + acc;
    return Number(value.value) + acc;
  }, 0);

function Game() {
  const { player1, player2, isLoading, isPopup, error } = useSelector(
    (store) => store.game
  );
  const dispatch = useDispatch();

  useEffect(
    function () {
      if (calculatePoint(player1) === 21) dispatch(popUpAppear());
      if (calculatePoint(player1) > 21) dispatch(popUpAppear());
    },
    [player1, dispatch]
  );

  return (
    <main className={styles.content}>
      <GameNav />
      <GameLayout>
        <PlayerLayout isLoading={isLoading}>
          {player2 && !isLoading && <PlayerCards cards={player2.cards} />}
          {player1 && !isLoading && <PlayerCards cards={player1.cards} />}
          {isLoading && <Spinner />}
        </PlayerLayout>
        <GameButtons />
      </GameLayout>
      {player1 && player2 && <Players />}
      {isPopup && <Popup />}
      {error && <ErrorMessage error={error} />}
    </main>
  );
}

export default Game;
