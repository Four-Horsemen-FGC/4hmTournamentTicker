import React from "react";
import Entrant from "../Entrant/Entrant.jsx";
import styles from "./Set.module.css";

function Set({ p1Name, p2Name, p1Org, p2Org, p1Score, p2Score }) {
  const winOrLose = (arg1, arg2) => {
    return arg1 > arg2 ? "scoreWin" : "scoreLose";
  };

  return (
    <div className={styles.set}>
      <Entrant
        prefix={p1Org}
        name={p1Name}
        score={p1Score}
        outcome={winOrLose(p1Score, p2Score)}
      />
      <Entrant
        prefix={p2Org}
        name={p2Name}
        score={p2Score}
        outcome={winOrLose(p2Score, p1Score)}
      />
    </div>
  );
}

export default Set;
