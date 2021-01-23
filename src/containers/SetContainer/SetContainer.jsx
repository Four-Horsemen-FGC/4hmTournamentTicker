import React from "react";
import Chevron from "../../components/Chevron/Chevron";
import Set from "../../components/Set/Set";
import styles from "./SetContainer.module.css";

function SetContainer({ id, p1Name, p2Name, p1Org, p2Org, p1Score, p2Score }) {
  return (
    <div className={styles.setContainer}>
      <Chevron key={id} identifier={id} />
      <Set
        key={id}
        p1Name={p1Name}
        p2Name={p2Name}
        p1Org={p1Org}
        p2Org={p2Org}
        p1Score={p1Score}
        p2Score={p2Score}
      />
    </div>
  );
}

export default SetContainer;
