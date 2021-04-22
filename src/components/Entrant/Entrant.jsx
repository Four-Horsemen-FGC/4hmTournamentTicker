import React from "react";
import Score from "../Score/Score.jsx";
import styles from "./Entrant.module.css";

function Entrant({ prefix, name, score, outcome }) {
  const entrantWithOrg = (
    <div className={styles.playerWithOrg}>
      <p className={styles.playerPrefix}>{prefix}</p>
      <p className={styles.player}>{name}</p>
    </div>
  );

  const entrantWithoutOrg = <p className={styles.player}>{name}</p>;

  return (
    <div className={styles.entrant}>
      {prefix ? entrantWithOrg : entrantWithoutOrg}
      <Score outcome={outcome} score={score} />
    </div>
  );
}

export default Entrant;
