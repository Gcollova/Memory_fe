import React, { useState } from "react";

import styles from "./app.module.scss";
import Game from "./components/gameWrapper";
import Scoreboard from "./components/scoreboard";
import { MainContext } from "./context/main";
import { FinalResult } from "./models/final_result";
import { PageInfo } from "./models/page_info";
import { PlayerResult } from "./models/player_result";
function App() {
  const gameVersion = "monster memory  V 1.0.0";
  const [currentPage, setCurrentPage] = useState<string>(gameVersion);
  const [results, setResults] = useState<PlayerResult[]>([]);
  const [pageInfo, setPageInfo] = useState<PageInfo>();
  const [player,setPlayer] = useState<PlayerResult>();
  const [alreadySelected,setAlreadySelected] = useState<string[]>([]);
  const [finalResult,setFinalResult] = useState<FinalResult>();
  const [modal,setModal] = useState<any>();

  return (
    <MainContext.Provider
      value={{ results, setResults, pageInfo, setPageInfo,player,setPlayer,alreadySelected,setAlreadySelected, finalResult, setFinalResult,modal,setModal }}
    >
      <div className={styles.main}>
        {
          modal ? modal : null
        }
        <h1>Memory Card Game!</h1>

        <div className={styles._body}>
          <div className={styles.__header}>
            <h3>{currentPage}</h3>
          </div>
          <div className={styles.__wrapper}>
            {currentPage === gameVersion ? <Game /> : <Scoreboard />}
          </div>
        </div>

        <div className={styles._footer}>
          {!player?.nickName && <h2
            onClick={() => {
              setCurrentPage(
                currentPage === "Scoreboard!" ? gameVersion : "Scoreboard!"
              );
            }}
          >
            {currentPage === "Scoreboard!" ? "Back to game!" : "Scoreboard!"}
          </h2>}
          {finalResult && <h2
            onClick={() => {
              setFinalResult(undefined);
              setPlayer(undefined);
              setCurrentPage(
                gameVersion
              );
            }}
          >
            Play again!
          </h2>}
        </div>
      </div>
    </MainContext.Provider>
  );
}

export default App;
