import React, { useEffect, useState } from 'react';
import styles from './Messages.module.css';
import { SwitchTransition, CSSTransition } from 'react-transition-group';

function Messages() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((previousMessageState) => previousMessageState + 1);
    }, 8000);
    return () => clearInterval(interval);
  });

  const messages = [
    'Check out our store! FGCFour.myteespring.com/',
    'Follow all our hawt asses on twitter @FgcFour',
    'Beyblades are wack as FUCK homie',
    "They don't think it be like it is... but it do"
  ];



  return (
    <div className={styles.flex}>
      <SwitchTransition>
        <CSSTransition
          key={messages[(index % messages.length)]}
          timeout={300}
          classNames="fade"
        >
          <h2 className={styles.messages}>
            {messages[(index % messages.length)]}
          </h2>
        </CSSTransition>
      </SwitchTransition>
    </div>
  );
}

export default Messages;