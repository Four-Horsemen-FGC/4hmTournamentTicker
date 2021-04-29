import React, { useEffect, useState } from "react";
import styles from "./Messages.module.css";
import { SwitchTransition, CSSTransition } from "react-transition-group";

function Messages({ messages, ...props }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((previousMessageState) => previousMessageState + 1);
    }, 8000);
    return () => clearInterval(interval);
  });

  const scrollingMessages = messages || ["Heaven or Hell, Let's Rock!"];

  return (
    <div className={styles.flex}>
      <SwitchTransition>
        <CSSTransition
          key={scrollingMessages[index % scrollingMessages.length]}
          timeout={300}
          classNames="fade"
        >
          <h2 className={styles.messages}>
            {scrollingMessages[index % scrollingMessages.length]}
          </h2>
        </CSSTransition>
      </SwitchTransition>
    </div>
  );
}

export default Messages;
