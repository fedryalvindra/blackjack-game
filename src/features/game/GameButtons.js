import { useDispatch, useSelector } from "react-redux";
import {
  add2x,
  addBet,
  betDeal,
  drawPlayerCard,
  stand,
} from "./redux/gameSlice";
import { calculatePoint } from "./Game";

import Button from "./Button";
import styles from "./styles/GameButtons.module.css";
import { useState } from "react";

const buttonStyles = [
  {
    background: "linear-gradient(180deg, #3700D3 0%, #2D1377 100%)",
    hover: "linear-gradient(180deg, #2a00a6 0%, #1f0f5b 100%)",
  },
  {
    background: "linear-gradient(180deg, #D3CB00 0%, #6D6900 100%)",
    hover: "linear-gradient(180deg, #B5AD00 0%, #555400 100%)",
  },
  {
    background: "linear-gradient(180deg, #D30000 0%, #6D0000 100%)",
    hover: "linear-gradient(180deg, #A80000 0%, #500000 100%)",
  },
  {
    background: "linear-gradient(180deg, #006ED3 0%, #00396D 100%)",
    hover: "linear-gradient(180deg, #0056A3 0%, #002D4D 100%)",
  },
];

const [button2x, buttonDeal, buttonStand, buttonHit] = buttonStyles;

function GameButtons() {
  const { player1, player2, bet, isDeal, is2x, isLoading } = useSelector(
    (store) => store.game
  );

  const dispatch = useDispatch();

  const handleBet = (e) => {
    e.preventDefault();
    dispatch(betDeal());
  };

  return (
    <div className={styles.content}>
      <Button
        background={button2x.background}
        hover={button2x.hover}
        isDeal={!isDeal}
        is2x={is2x}
        onClick={() => {
          if (is2x) return;
          return dispatch(add2x());
        }}
        isLoading={isLoading}
      >
        2X
      </Button>
      <Button
        background={buttonDeal.background}
        hover={buttonDeal.hover}
        isDeal={isDeal}
        onClick={() => {
          if (bet <= 0) return;
          return dispatch(betDeal());
        }}
        isLoading={isLoading}
      >
        Deal
      </Button>
      <form className={styles.bet} onSubmit={handleBet}>
        <h1>Bet</h1>
        <input
          type="number"
          value={bet}
          onChange={(e) => dispatch(addBet(Number(e.target.value)))}
          disabled={isLoading || isDeal}
        />
      </form>
      <Button
        background={buttonStand.background}
        hover={buttonStand.hover}
        isDeal={!isDeal}
        onClick={() => dispatch(stand(player2, calculatePoint(player2)))}
        isLoading={isLoading}
      >
        Stand
      </Button>
      <Button
        background={buttonHit.background}
        hover={buttonHit.hover}
        isDeal={!isDeal}
        onClick={() => dispatch(drawPlayerCard(player1))}
        isLoading={isLoading}
      >
        Hit
      </Button>
    </div>
  );
}

export default GameButtons;
