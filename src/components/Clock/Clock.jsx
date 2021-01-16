import React, { useEffect, useState } from 'react';
import styles from './Clock.module.css';

function Clock() {
  const [clockState, setClockState] = useState();

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setClockState(date.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' }));
    }, 1000);
  }, []);

  return (
    <div className={styles.clockContainer}>
      <p className={styles.clock}>{clockState}</p>
      <h2 className={styles.h2}>Nashville, TN</h2>
    </div>
  );
}

export default Clock;