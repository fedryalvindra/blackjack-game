import { Link } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";

import moneyImg from "./asset/Money.png";

import styles from "./styles/GameNav.module.css";

const backColor = {
  color: "#42b626",
  hoverColor: "#317d1e",
};

function GameNav() {
  const [isBackHover, setIsBackHover] = useState(false);
  const money = useSelector((store) => store.game.money);

  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link
            to={-1}
            style={{
              background: isBackHover ? backColor.hoverColor : backColor.color,
            }}
            onMouseEnter={() => setIsBackHover(true)}
            onMouseLeave={() => setIsBackHover(false)}
          >
            Back
          </Link>
        </li>
        <li className={styles.coin}>
          <p className={styles.title}>Your Money</p>
          <div>
            <img src={moneyImg} alt="Money" />
            <p>{money}</p>
          </div>
        </li>
      </ul>
      <div className={styles.line}></div>
    </nav>
  );
}

export default GameNav;
