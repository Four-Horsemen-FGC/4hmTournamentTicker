import React from "react";
import styles from "./Score.module.css";
import { parseScore } from "../../domains/Top8/Top8Body/utils";

function Score({ outcome, score }) {
  return (
    <div className={styles[outcome]}>
      <h2 className={styles.score}>{parseScore(score)}</h2>
    </div>
  );
}

export default Score;
