import { useDispatch, useSelector } from "react-redux";
import styles from "./styles/Popup.module.css";
import { result } from "./redux/gameSlice";
import { calculatePoint } from "./Game";

const win = "YOU WIN!";
const lose = "YOU LOSE!";

const pointValidate = (player, host) => {
  if (player > 21) return lose;
  if (player === 21) return win;
  if (player === host) return win;
  if (host > 21 || player > host) return win;
  return lose;
};

function Popup() {
  const { player1, player2, bet } = useSelector((store) => store.game);
  const dispatch = useDispatch();

  const player1Point = Number(calculatePoint(player1));
  const player2Point = Number(calculatePoint(player2));
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
              dispatch(result(player1Point, player2Point));
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
