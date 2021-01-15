import React from 'react';
import Chevron from '../../components/Chevron/Chevron';
import Set from '../../components/Set/Set';
import styles from './SetContainer.module.css';


function SetContainer(props) {
  return (
    <div className={styles.setContainer}>
      <Chevron key={props.node.identifier} identifier={props.node.identifier} />
      <Set key={props.node.identifier} set={props.node.slots} />
    </div>
  );
}

export default SetContainer;