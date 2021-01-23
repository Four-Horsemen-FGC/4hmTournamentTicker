import React from "react";
import styles from "./QueueSet.module.css";

const QueueSet = ({ p1Name, p1Org, p2Name, p2Org, ...props }) => {
  return (
    <div className={styles.flex}>
      <div className={styles.playerOne}>
        <h2 className={styles.orgName}>{p1Org}</h2>
        <h2 className={styles.gamerTag}>{p1Name}</h2>
      </div>

      <div className={styles.vs}>
        <p>vs</p>
      </div>

      <div className={styles.playerTwo}>
        <h2 className={styles.orgName}>{p2Org}</h2>
        <h2 className={styles.gamerTag}>{p2Name}</h2>
      </div>
    </div>
  );
};

export default QueueSet;
