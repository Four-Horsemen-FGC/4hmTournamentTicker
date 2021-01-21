import React from "react";
import styles from './Top8Match.module.css';

function top8Match(props) {

  // const org =  props.org && props.org.length > 1 
  //   ? props.org.slice(0, 4) + '...' 
  //   : props.org;

  const concatName = (element, size = 5) => {
    return (element && element.length > size)
      ? element.slice(0, size) + '...'
      : element
  }

  const containerTag = (
    <div className={styles.tag}>
      <h3 className={styles.h3Margin}>{props.tag}</h3>
    </div>
  )

  return (
    <div className={styles.top8GameContainer}>
      {props.tag ? containerTag : null}
      <div className={styles.upperTop8}>
        <div className={styles.top8Entrant}>
          <h2 className={styles.top8Org}>{concatName(props.p1Org)}</h2>
          <h2 className={styles.top8}>{concatName(props.p1Name, 15)}</h2>
        </div>
        <div className={styles.upperScoreHolder}>
          <h2 className={styles.top8Score}>{props.p1Score}</h2>
        </div>
      </div>

      <div className={styles.lowerTop8}>
        <div className={styles.top8Entrant}>
          <h2 className={styles.top8Org}>{concatName(props.p2Org)}</h2>
          <h2 className={styles.top8}>{concatName(props.p2Name, 15)}</h2>
        </div>
        <div className={styles.lowerScoreHolder}>
          <h2 className={styles.top8Score}>{props.p2Score}</h2>
        </div>
      </div>
    </div>

  );
}

export default top8Match;