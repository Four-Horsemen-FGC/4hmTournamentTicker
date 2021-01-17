import React from 'react';
import styles from './QueueSet.module.css';

const QueueSet = (props) => {

  console.log(props.node.slots)
  const playerOne = props.node.slots[0].entrant.participants[0]
  const playerTwo = props.node.slots[1].entrant.participants[0]

  return (
    <div className={styles.flex}>
      <div className={styles.playerOne}>
        <h2 className={styles.orgName}>{playerOne.prefix}</h2>
        <h2 className={styles.gamerTag}>{playerOne.gamerTag}</h2>
      </div>

      <div className={styles.vs}>
        <p>vs</p>
      </div>

      <div className={styles.playerTwo}>
        <h2 className={styles.orgName}>{playerTwo.prefix}</h2>
        <h2 className={styles.gamerTag}>{playerTwo.gamerTag}</h2>
      </div>

    </div>
  )
}

export default QueueSet;