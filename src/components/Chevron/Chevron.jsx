import React from "react";
import styles from "./Chevron.module.css";

function Chevron(props) {
  return (
    <div className={styles.chevronWrap}>
      <div className={styles.chevron}>
        <h3 className={styles.identifier}>{props.identifier}</h3>
      </div>
    </div>
  );
}

export default Chevron;
