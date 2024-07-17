import styles from "./styles/Player.module.css";

function Player({ point, color, player }) {
  return (
    <div className={styles.player} style={{ background: color }}>
      <p className={styles.name}>{player}</p>
      <div className={styles.point}>
        <p>Total</p>
        <h1 style={{ color: color }}>{point}</h1>
      </div>
    </div>
  );
}

export default Player;
