import React from 'react';
import styles from './Score.module.css';

function Score(props) {
  return (
    <div className={styles[props.outcome]} >
      <h2>{props.score}</h2>
    </div>
  );
}

export default Score;