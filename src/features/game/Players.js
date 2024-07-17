import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { calculatePoint } from "./Game";

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

function Players() {
  const { name } = useParams();
  const { player1, player2 } = useSelector((store) => store.game);

  return (
    <div className={styles.players}>
      <Player
        point={Number(calculatePoint(player2))}
        color={hostStyle.color}
        player={"Host"}
      />
      <Player
        point={Number(calculatePoint(player1))}
        color={playerStyle.color}
        player={name}
      />
    </div>
  );
}

export default Players;
