import React, { ReactNode, useState, useEffect, useContext } from "react";
import { MainContext } from "../../context/main";
import LoaderGraphics from "../../graphics/Loader";
import { PlayerResult } from "../../models/player_result";
import { resultsPOST } from "../../services/final_results_post";
import FinalBoard from "../finalBoard";
import styles from "./styles.module.scss";

interface GameLayoutI {
  children: ReactNode;
}
const GameLayout = (props: GameLayoutI) => {
  const {
    player,
    alreadySelected,
    setFinalResult,
    finalResult,
    setAlreadySelected,
  } = useContext(MainContext);
  const { children } = props;
  const [started, setStarted] = useState(false);
  const [countDown, setCountDown] = useState(3);
  const [timer, setTimer] = useState(90);
  const [loading, setLoading] = useState(false);

  const handlePostResult = async (player: PlayerResult) => {
    try {
      setLoading(true);
      const response = await resultsPOST(player);
      setFinalResult(response.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error(
        "ERRORE IN GAME LAYOUT COMPONENT handlePostResult function",
        error
      );
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown((state) => state - 1);
    }, 1000);
    const intervalTwo = setInterval(() => {
      if (started) setTimer((state) => state - 1);
    }, 1000);
    if (countDown === 0 && !started) {
      clearInterval(interval);
      setStarted(true);
    }
    if (started && timer === 0) {
      clearInterval(intervalTwo);
    }
    if (alreadySelected.length === 16) {
      clearInterval(intervalTwo);
    }
    if ((alreadySelected.length === 16 || timer === 0) && !finalResult) {
      setCountDown(3);
      setTimer(90);
      setStarted(false);
      clearInterval(intervalTwo);
      clearInterval(interval);
      setAlreadySelected([]);
      handlePostResult({ ...player!, time: 90 - timer });
    }

    return () => {
      clearInterval(intervalTwo);
      clearInterval(interval);
    };
  }, [countDown, timer, started, alreadySelected, finalResult]);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  if (!started && !finalResult && !loading) {
    return (
      <div className={styles.mainInit}>
        <h1 className={styles.countDown}>{countDown}</h1>
        <h1>{player?.nickName}, Get Ready !!!</h1>
      </div>
    );
  } else if (finalResult && !loading) {
    return (
      <div className={styles.main}>
        <FinalBoard />
      </div>
    );
  } else if (loading) {
    return (
      <div className={styles.main}>
        <LoaderGraphics />;
      </div>
    );
  } else {
    return (
      <div className={styles.main}>
        <div className={styles.header}>
          <h3>Time left: {formatTime(timer)}</h3>
        </div>
        {children}
      </div>
    );
  }
};

export default GameLayout;
