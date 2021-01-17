import React from 'react';
import styles from './StreamQueue.module.css';
import HeaderContainer from '../../containers/Header/HeaderContainer';
import QueueBody from './QueueBody/QueueBody';

const StreamQueue = () => {
  return (
    <div className={styles.flex}>
      <HeaderContainer heading='Stream Queue'/>
      <QueueBody />
    </div>
  )
}





export default StreamQueue;