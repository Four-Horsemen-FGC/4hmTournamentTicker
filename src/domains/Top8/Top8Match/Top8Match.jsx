import React from "react";
import styles from "./Top8Match.module.css";

function top8Match({
  matchName,
  p1Org,
  p2Org,
  p1Score,
  p2Score,
  p1Name,
  p2Name,
}) {
  const concatName = (element, size = 5) => {
    return element && element.length > size
      ? element.slice(0, size) + "..."
      : element;
  };

  const containerTag = (
    <div className={styles.tag}>
      <h3 className={styles.h3Margin}>{matchName}</h3>
    </div>
  );

  return (
    <div className={styles.top8GameContainer}>
      {matchName ? containerTag : null}
      <div className={styles.upperTop8}>
        <div className={styles.top8Entrant}>
          <h2 className={styles.top8Org}>{concatName(p1Org)}</h2>
          <h2 className={styles.top8}>{concatName(p1Name, 15)}</h2>
        </div>
        <div className={styles.upperScoreHolder}>
          <h2 className={styles.top8Score}>{p1Score}</h2>
        </div>
      </div>

      <div className={styles.lowerTop8}>
        <div className={styles.top8Entrant}>
          <h2 className={styles.top8Org}>{concatName(p2Org)}</h2>
          <h2 className={styles.top8}>{concatName(p2Name, 15)}</h2>
        </div>
        <div className={styles.lowerScoreHolder}>
          <h2 className={styles.top8Score}>{p2Score}</h2>
        </div>
      </div>
    </div>
  );
}

export default top8Match;
