import styles from "./styles/Card.module.css";

function Card({ card, i }) {
  return (
    <img
      className={`${styles.card}`}
      src={card.images.png}
      alt={card.code}
      style={{ marginLeft: i > 0 ? "-10%" : "0px" }}
    />
  );
}

export default Card;
