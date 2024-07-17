import styles from "./styles/Popup.module.css";

const win = "YOU WIN!";
const lose = "YOU LOSE!";

const pointValidate = (player, host) => {
  if (player > 21) return lose;
  if (player === 21) return win;
  if (player === host) return win;
  if (host > 21 || player > host) return win;
  return lose;
};

function Popup({ player1Point, player2Point, bet, handleResult }) {
  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <h1>{pointValidate(player1Point, player2Point)}</h1>
        <div className={styles.points}>
          <div className={styles.point}>
            <h2>Host point</h2>
            <p>{player2Point}</p>
          </div>
          <div className={styles.point}>
            <h2>Your point</h2>
            <p>{player1Point}</p>
          </div>
        </div>
        <div className={styles.back}>
          <p>
            {pointValidate(player1Point, player2Point) === win
              ? "YOU GAINED +$"
              : "YOU LOSS -$"}
            {bet}
          </p>
          <button
            onClick={() => {
              handleResult(pointValidate(player1Point, player2Point), win);
            }}
          >
            BACK
          </button>
        </div>
      </div>
    </div>
  );
}

export default Popup;
