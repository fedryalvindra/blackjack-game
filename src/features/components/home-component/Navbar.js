import { Link } from "react-router-dom";
import { useState } from "react";

import styles from "./styles/NavBar.module.css";

const btnStyle = {
  color: "#137411",
  borderColor: "#137411",
};

function Navbar() {
  const [isGetStartedHover, setGetStartedIsHover] = useState(false);

  return (
    <ul className={styles.nav}>
      <li className={styles.logo}>
        <Link to="/">
          Blackjack <span>Game</span>
        </Link>
      </li>
      <li className={styles.btn}>
        <Link
          to="/app"
          style={
            isGetStartedHover
              ? btnStyle
              : { ...btnStyle, color: "#3bbb39", borderColor: "#3bbb39" }
          }
          onMouseEnter={() => setGetStartedIsHover(true)}
          onMouseLeave={() => setGetStartedIsHover(false)}
        >
          Get Started
        </Link>
      </li>
    </ul>
  );
}

export default Navbar;
