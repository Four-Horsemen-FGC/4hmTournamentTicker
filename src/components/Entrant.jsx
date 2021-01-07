import React from 'react';
import styles from '../../public/styles.css';
import Score from './Score';

function Entrant(props) {
  return (
    <div className='entrant'>
      <h2>{props.name}</h2>
      <Score outcome={props.outcome} score={props.score} />
    </div>
  );
}

export default Entrant;