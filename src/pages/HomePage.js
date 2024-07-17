import styles from "./HomePage.module.css";

import NavBar from "../features/components/home-component/Navbar";
import HomeContent from "../features/components/home-component/HomeContent";

import "animate.css";

function HomePage() {
  return (
    <div className={styles.page}>
      <NavBar />
      <HomeContent />
    </div>
  );
}

export default HomePage;
