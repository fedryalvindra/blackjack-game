import { useParams } from "react-router-dom";

import Player from "./Player";

import styles from "./styles/Players.module.css";

const templateStyle = [
  {
    color: "#e00",
  },
  {
    color: "#1DC9FF",
  },
];

const [hostStyle, playerStyle] = templateStyle;

function Players({ player1Point, player2Point }) {
  const { name } = useParams();
  return (
    <div className={styles.players}>
      <Player point={player2Point} color={hostStyle.color} player={"Host"} />
      <Player point={player1Point} color={playerStyle.color} player={name} />
    </div>
  );
}

export default Players;
