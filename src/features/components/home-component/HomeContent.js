import Cards from "./Cards";
import HomeContentDetail from "./HomeContentDetail";

import styles from "./styles/HomeContent.module.css";

function HomeContent() {
  return (
    <section className={styles.content}>
      <Cards>
        <img
          src="assets/Queen-Hati.png"
          alt="QUEEN"
        />
        <img src="assets/8-Clover.png" alt="CLOVER" />
      </Cards>
      <HomeContentDetail />
      <Cards>
        <img src="assets/King-Sekop.png" alt="KING" />
        <img src="assets/AS-Sekop.png" alt="AS" />
      </Cards>
    </section>
  );
}

export default HomeContent;
