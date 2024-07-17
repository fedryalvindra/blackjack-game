import Button from "./Button";

import styles from "./styles/GameButtons.module.css";

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

function GameButtons({
  bet,
  setBet,
  money,
  isDeal,
  is2x,
  isLoading,
  handleDeal,
  handleHit,
  handleStand,
  handle2x,
}) {
  return (
    <div className={styles.content}>
      <Button
        background={button2x.background}
        hover={button2x.hover}
        isDeal={!isDeal}
        is2x={is2x}
        onClick={handle2x}
        isLoading={isLoading}
      >
        2X
      </Button>
      <Button
        background={buttonDeal.background}
        hover={buttonDeal.hover}
        isDeal={isDeal}
        onClick={handleDeal}
        isLoading={isLoading}
      >
        Deal
      </Button>
      <div className={styles.bet}>
        <h1>Bet</h1>
        <input
          type="number"
          value={bet}
          onChange={(e) =>
            setBet(
              e.target.value >= 0 && e.target.value <= money
                ? Number(e.target.value)
                : bet
            )
          }
          disabled={isDeal}
        />
      </div>
      <Button
        background={buttonStand.background}
        hover={buttonStand.hover}
        isDeal={!isDeal}
        onClick={handleStand}
        isLoading={isLoading}
      >
        Stand
      </Button>
      <Button
        background={buttonHit.background}
        hover={buttonHit.hover}
        isDeal={!isDeal}
        onClick={handleHit}
        isLoading={isLoading}
      >
        Hit
      </Button>
    </div>
  );
}

export default GameButtons;
