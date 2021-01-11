import React from 'react';
import styles from '../../public/styles.css';
import Score from './Score';

function Entrant(props) {

  const entrant = (props) => {
    if (props.prefix) {
      return (
        <div className='playerWithOrg'>
          <h2 className='playerPrefix'>{props.prefix}</h2>
          <h2>{props.name}</h2>
        </div>
      );
    }
    return <h2>{props.name}</h2>;
  };

  return (
    <div className='entrant'>
      {entrant(props)}
      <Score outcome={props.outcome} score={props.score} />
    </div>
  );
}

export default Entrant;