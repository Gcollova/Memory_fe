import React, { useContext} from "react";
import { MainContext } from "../../context/main";
import styles from "./styles.module.scss";

const FinalBoard = () => {
  const { finalResult } = useContext(MainContext);
  
  const {user,prevUsers,nextUsers,position} = finalResult!
  const results = [...nextUsers,{...user,isMine:true},...prevUsers]

  
  return (
    <div className={styles.main}>
      <div className={styles._body}>
        {
          results.sort((a,b) => a.position! - b.position!).map((el, index) => {
            return (
              <div key={el._id} className={`${styles.__resultsWrapper} ${el.isMine && styles.__isMine}`}>
                <p>Rank: {el.position}</p>
                <p>{el.nickName}</p>
                <p>Score: {el.score}</p>
              </div>
            );
          })}
      </div>
      
    </div>
  );
};

export default FinalBoard;
