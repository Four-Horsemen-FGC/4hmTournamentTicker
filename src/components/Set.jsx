import React from 'react';
import Entrant from './Entrant';


function Set(props) {
  console.log(props[0]);
  const scoreOne = props.set[0].standing.stats.score.value;
  const scoreTwo = props.set[1].standing.stats.score.value;
  const winOrLose = (arg1, arg2) => {
    return arg1 > arg2 ? 'scoreWin' : 'scoreLose';
  };
  return (
    <div className='set'>
      <Entrant name={props.set[0].entrant.name} score={scoreOne} outcome={winOrLose(scoreOne, scoreTwo)} />
      <Entrant name={props.set[1].entrant.name} score={scoreTwo} outcome={winOrLose(scoreTwo, scoreOne)} />
    </div>
  );
};


export default Set;