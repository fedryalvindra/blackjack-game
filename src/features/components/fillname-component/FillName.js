import { useState } from "react";
import { useNavigate } from "react-router-dom";

import StartBtn from "../StartBtn";
import styles from "./FillName.module.css";
import { useDispatch } from "react-redux";
import { authentication } from "../../game/redux/gameSlice";

function FillName() {
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const navigate = useNavigate("");

  function handleSubmit(e) {
    e.preventDefault();
    if (name.length < 3) return;
    dispatch(authentication());
    navigate(name);
  }

  return (
    <main className={styles.content}>
      <div className={`${styles.fillName} animate__animated animate__fadeInUp`}>
        <h1>Blackjack Game</h1>
        <form onSubmit={handleSubmit}>
          <div className={styles.texts}>
            <div>
              <p>
                Fill name to start the game{" "}
                <span className={styles.disclaimer}>
                  (name must be 3 - 18 character)
                </span>
              </p>
              <input
                value={name}
                onChange={(e) =>
                  setName((name) =>
                    e.target.value.length <= 18 ? e.target.value : name
                  )
                }
                placeholder="Name"
              />
            </div>
            <div>
              <p>By the started of the game you will have $1000 dollar</p>
              <p className={styles.disclaimer}>
                *This game is not using real money and free to play
              </p>
            </div>
          </div>
          <StartBtn />
        </form>
      </div>
    </main>
  );
}

export default FillName;
