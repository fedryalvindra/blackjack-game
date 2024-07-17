import styles from "./styles/Cards.module.css";

function Cards({ children }) {
  return (
    <div
      className={`${styles.cards} animate__animated animate__fadeInUp animate__delay-1s`}
    >
      {children}
    </div>
  );
}

export default Cards;
