import React from 'react';

function Score(props) {
  return (
    <div className={'scoreWin ' + props.outcome} >
      <h2>{props.score}</h2>
    </div>
  );
}

export default Score;