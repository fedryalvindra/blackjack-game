import { useState } from "react";
import styles from "./styles/Button.module.css";

function Button({
  children,
  background,
  hover,
  isDeal,
  isLoading,
  is2x = false,
  onClick,
}) {
  const [isBtnHover, setIsBtnHover] = useState(false);

  return (
    <button
      className={styles.btn}
      style={{
        background:
          isDeal || is2x || isLoading
            ? "linear-gradient(0deg, rgba(79,79,79,1) 0%, rgba(111,111,111,1) 47%, rgba(145,145,145,1) 100%)"
            : isBtnHover
            ? hover
            : background,
      }}
      onMouseEnter={() => setIsBtnHover(true)}
      onMouseLeave={() => setIsBtnHover(false)}
      disabled={isDeal || is2x || isLoading}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
