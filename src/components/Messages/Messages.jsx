import React, { useEffect, useState } from 'react';
import styles from './Messages.module.css'

function Messages() {
  const [messageState, setMessageState] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setMessageState((previousMessageState) => previousMessageState + 1);
    }, 8000);
    return () => clearInterval(interval);
  });

  const messages = [
    'Buy a shirt, will ya? FGCFour.myteespring.com/',
    'Follow all our hawt asses on twitter @FgcFour',
    'Beyblades are wack as FUCK homie',
    "They don't think it be like it is... but it do"
  ];



  return (
    <div className={styles.flex}>
      <h2 className={styles.messages}>{messages[(messageState % messages.length)]}</h2>
    </div>
  );
}

export default Messages;