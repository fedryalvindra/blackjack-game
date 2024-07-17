import Card from "./Card";

import styles from "./styles/PlayerCards.module.css";

function PlayerCards({ cards }) {
  return (
    <div className={styles.cards}>
      {cards.map((card, i) => (
        <Card card={card} key={card.code} i={i} />
      ))}
    </div>
  );
}

export default PlayerCards;
