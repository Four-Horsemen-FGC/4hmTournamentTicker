import React from "react";
import Clock from "../../components/Clock/Clock.jsx";
import Messages from "../../components/Messages/Messages.jsx";
import { useActiveEventOnce } from "../../hooks/index";
import styles from "./FooterContainer.module.css";

const FooterContainer = () => {
  const { messages, location } = useActiveEventOnce() || {};
  return (
    <div className={styles.footerContainer}>
      <Clock location={location} />
      <Messages messages={messages} />
    </div>
  );
};

export default FooterContainer;
