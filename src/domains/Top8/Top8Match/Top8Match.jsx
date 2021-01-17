import React from "react";
import styles from './Top8Match.module.css';

function top8Match(props) {

  if (props.tag) {
    return (
      
      <div className={styles.top8GameContainer}>
        <div className={styles.tag}>
          <h3 className={styles.h3Margin}>{props.tag}</h3>
        </div>
        <div className={styles.upperTop8}>
          <div className={styles.top8Entrant}>
            <h2 className={styles.top8Org}>ITS</h2>
            <h2 className={styles.top8}>{props.name}</h2>
          </div>
          <div className={styles.upperScoreHolder}>
            <h2 className={styles.top8Score}>3</h2>
          </div>
        </div>

        <div className={styles.lowerTop8}>
          <div className={styles.top8Entrant}>
            <h2 className={styles.top8Org}>Echo Fox</h2>
            <h2 className={styles.top8}>{props.name}</h2>
          </div>
          <div className={styles.lowerScoreHolder}>
            <h2 className={styles.top8Score}>2</h2>
          </div>
        </div>
        
      </div>

    )
  }

  return (
    <div className={styles.top8GameContainer}>
      <div className={styles.upperTop8}>
        <div className={styles.top8Entrant}>
          <h2 className={styles.top8Org}>ITS</h2>
          <h2 className={styles.top8}>{props.name}</h2>
        </div>
        <div className={styles.upperScoreHolder}>
          <h2 className={styles.top8Score}>3</h2>
        </div>
      </div>

      <div className={styles.lowerTop8}>
        <div className={styles.top8Entrant}>
          <h2 className={styles.top8Org}>Echo Fox</h2>
          <h2 className={styles.top8}>{props.name}</h2>
        </div>
        <div className={styles.lowerScoreHolder}>
          <h2 className={styles.top8Score}>2</h2>
        </div>
      </div>
    </div>

  );
}

export default top8Match;