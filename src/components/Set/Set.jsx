import React from 'react';
import Entrant from '../Entrant/Entrant.jsx';
import styles from './Set.module.css';


function Set(props) {

  const entrantOne = props.set[0].entrant.participants[0];
  const entrantTwo = props.set[1].entrant.participants[0];
  const scoreOne = props.set[0].standing.stats.score.value;
  const scoreTwo = props.set[1].standing.stats.score.value;
  const winOrLose = (arg1, arg2) => {
    return arg1 > arg2 ? 'scoreWin' : 'scoreLose';
  };

  return (
    <div className={styles.set}>
      <Entrant prefix={entrantOne.prefix} name={entrantOne.gamerTag} score={scoreOne} outcome={winOrLose(scoreOne, scoreTwo)} />
      <Entrant prefix={entrantTwo.prefix} name={entrantTwo.gamerTag} score={scoreTwo} outcome={winOrLose(scoreTwo, scoreOne)} />
    </div>
  );
};


export default Set;