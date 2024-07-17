import { useNavigate } from "react-router-dom";
import styles from "./StartBtn.module.css";
import { useState } from "react";

function StartBtn({ nav }) {
  const [isBtnHover, setIsBtnHover] = useState(false);
  const navigate = useNavigate();
  return (
    <button
      className={styles.btn}
      style={{
        background: isBtnHover
          ? `linear-gradient(180deg, #489c92 0%, #4d9a4b 100%)`
          : "linear-gradient(180deg, #38efd9 0%, #40ff3d 100%)",
      }}
      onMouseEnter={() => setIsBtnHover(true)}
      onMouseLeave={() => setIsBtnHover(false)}
      onClick={() => navigate(nav)}
    >
      Get Started
    </button>
  );
}

export default StartBtn;
