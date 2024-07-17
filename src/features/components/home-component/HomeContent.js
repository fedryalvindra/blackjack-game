import Cards from "./Cards";
import HomeContentDetail from "./HomeContentDetail";

import queenHati from "./assets/Queen-Hati.png";
import eightClover from "./assets/8-Clover.png";
import kingSekop from "./assets/King-Sekop.png";
import asSekop from "./assets/AS-Sekop.png";

import styles from "./styles/HomeContent.module.css";

function HomeContent() {
  return (
    <section className={styles.content}>
      <Cards>
        <img src={queenHati} alt="QUEEN" />
        <img src={eightClover} alt="CLOVER" />
      </Cards>
      <HomeContentDetail />
      <Cards>
        <img src={kingSekop} alt="KING" />
        <img src={asSekop} alt="AS" />
      </Cards>
    </section>
  );
}

export default HomeContent;
