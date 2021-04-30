import React from "react";
import styles from "./Top8Match.module.css";
import { concatName, parseScore } from "../Top8Body/utils";

function TransparentTop8Match({
  matchName,
  p1Org,
  p2Org,
  p1Score,
  p2Score,
  p1Name,
  p2Name,
}) {
  // const containerTag = (
  //   <div className={styles.tag}>
  //     <h3 className={styles.h3Margin}>{matchName}</h3>
  //   </div>
  // );

  return (
    <div className={styles.transparent}>
      {/* {matchName ? containerTag : null} */}
      <div className={styles.upperTop8}>
        <div className={styles.top8Entrant}>
          <h2 className={styles.top8Org}>{p1Org ? concatName(p1Org) : null}</h2>
          <h2 className={styles.top8}>
            {p1Name ? concatName(p1Name, 18) : "TBD"}
          </h2>
        </div>
        <div className={styles.upperScoreHolder}>
          <h2 className={styles.top8Score}>
            {p1Score ? parseScore(p1Score) : 0}
          </h2>
        </div>
      </div>

      <div className={styles.lowerTop8}>
        <div className={styles.top8Entrant}>
          <h2 className={styles.top8Org}>{p2Org ? concatName(p2Org) : null}</h2>
          <h2 className={styles.top8}>
            {p2Name ? concatName(p2Name, 18) : "TBD"}
          </h2>
        </div>
        <div className={styles.lowerScoreHolder}>
          <h2 className={styles.top8Score}>
            {p2Score ? parseScore(p2Score) : 0}
          </h2>
        </div>
      </div>
    </div>
  );
}

export default TransparentTop8Match;
