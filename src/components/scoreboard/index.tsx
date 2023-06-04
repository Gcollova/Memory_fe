import React, { useContext, useEffect, useState } from "react";
import { MainContext } from "../../context/main";
import LoaderGraphics from "../../graphics/Loader";
import PaginationGraphics from "../../graphics/Pagination";
import { resultsGET } from "../../services/results_get";
import styles from "./styles.module.scss";

const Scoreboard = () => {
  const { results, setResults, setPageInfo, pageInfo } =
    useContext(MainContext);
  const [loading, setLoading] = useState(false);

  async function handleGetResults(page?: number) {
    setLoading(true);
    try {
      const response = await resultsGET(page);
      setResults(response.data.users);
      setPageInfo({
        maxPage: response.data.totalPages,
        currentPage: response.data.currentPage,
      });
    setLoading(false);

    } catch (error) {
      console.error(
        "ERRORE FETCH SCOREBOARD COMPONENT handleGetResults function",
        error
      );
      setLoading(false);
    }
  }

  useEffect(() => {
    
      handleGetResults();

      
    
  }, []);

  if (loading) {
    return <LoaderGraphics />;
  }
  return (
    <div className={styles.main}>
      <div className={styles._body}>
        {pageInfo &&
          results.map((el, index) => {
            return (
              <div key={el._id} className={styles.__resultsWrapper}>
                <p>Rank: {index + 1 + (pageInfo.currentPage - 1) * 10}</p>
                <p>{el.nickName}</p>
                <p>Score: {el.score}</p>
              </div>
            );
          })}
      </div>
      <div className={styles._pagination}>
        {pageInfo && (
          <PaginationGraphics
            currentPage={pageInfo.currentPage}
            maxPage={pageInfo.maxPage}
            action={(page) => {
              handleGetResults(page);
            }}
          />
        )}
      </div>
    </div>
  );
};

export default Scoreboard;
