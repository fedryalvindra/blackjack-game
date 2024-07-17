import StartBtn from "../StartBtn";

import styles from "./styles/HomeContentDetail.module.css";

function HomeContentDetail() {
  return (
    <div className={`${styles.content} animate__animated animate__fadeInUp`}>
      <div className={styles.texts}>
        <h1>
          Blackjack <span>Game</span>
        </h1>
        <p>Press start to play</p>
      </div>
      <StartBtn nav={"/app"} />
    </div>
  );
}

export default HomeContentDetail;
