import React from "react";
import Score from "../Score/Score.jsx";
import styles from "./Entrant.module.css";

function Entrant({ prefix, name, score, outcome }) {
  const entrantWithOrg = (
    <div className={styles.playerWithOrg}>
      <h2 className={styles.playerPrefix}>{prefix}</h2>
      <h2>{name}</h2>
    </div>
  );

  const entrantWithoutOrg = <h2>{name}</h2>;

  return (
    <div className={styles.entrant}>
      {prefix ? entrantWithOrg : entrantWithoutOrg}
      <Score outcome={outcome} score={score} />
    </div>
  );
}

export default Entrant;
