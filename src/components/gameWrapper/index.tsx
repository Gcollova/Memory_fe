import React, { useState, useRef, useContext } from "react";
import { MainContext } from "../../context/main";
import GameLayout from "../gameLayout";
import GameOutlet from "../gameOutlet";
import Modal from "../Modal";
import styles from "./styles.module.scss";

const Game = () => {
  const { player, setPlayer,setModal } = useContext(MainContext);
  const playerNameRef = useRef<string>("");

  function handleSetPlayer(nickName: string) {
    if (nickName.length >= 2 && nickName.length <= 12) {
      setPlayer({ nickName });
    } else {
        playerNameRef.current = ''
        setModal(<Modal text="The nickname should be between 2 and 12 characters." action={() => setModal(undefined)}/>)
    }
  }
  return (
    <div className={styles.main}>
      {!player ? (
        <div className={styles._preStart}>
            <div className={styles.__header}>
                <h1>Find all card pairs within the time limit, the faster you finish, the more points you earn!</h1>

            </div>
          <div>
            <input
              type="text"
              onChange={(e) => (playerNameRef.current = e.target.value)}
              placeholder='Insert Nickname (2-12 char.)'
            />
          </div>
          <div>
            <h2
              onClick={() => handleSetPlayer(playerNameRef.current)}
              className={styles.__start}
            >
              Start Game
            </h2>
          </div>
        </div>
      ) : (
        <GameLayout>
          <GameOutlet />
        </GameLayout>
      )}
    </div>
  );
};

export default Game;
