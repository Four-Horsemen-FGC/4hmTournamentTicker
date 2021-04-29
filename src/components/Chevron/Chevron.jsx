import React from "react";
import styles from "./Chevron.module.css";

function Chevron(props) {
  return (
    <div className={styles.chevronWrap}>
      <div className={styles.chevron}>
        <p className={styles.identifier}>{props.identifier}</p>
      </div>
    </div>
  );
}

export default Chevron;
