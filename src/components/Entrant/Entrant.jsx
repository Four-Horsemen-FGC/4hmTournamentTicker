import React from 'react';
import Score from '../Score/Score.jsx';
import styles from './Entrant.module.css'

function Entrant(props) {

  const entrant = (props) => {
    if (props.prefix) {
      return (
        <div className={styles.playerWithOrg}>
          <h2 className={styles.playerPrefix}>{props.prefix}</h2>
          <h2>{props.name}</h2>
        </div>
      );
    }
    return <h2>{props.name}</h2>;
  };

  return (
    <div className={styles.entrant}>
      {entrant(props)}
      <Score outcome={props.outcome} score={props.score} />
    </div>
  );
}

export default Entrant;