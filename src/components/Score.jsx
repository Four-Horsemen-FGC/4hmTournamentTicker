import React from 'react';

function Score(props) {
  return (
    <div className={props.outcome}>
      <h2>{props.score}</h2>
    </div>
  );
}

export default Score;