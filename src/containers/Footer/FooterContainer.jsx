import React from 'react';
import Clock from '../../components/Clock/Clock.jsx';
import Messages from '../../components/Messages/Messages.jsx';

import styles from './FooterContainer.module.css'

const FooterContainer = () => {
    return (
      <div className={styles.footerContainer}>
        <Clock />
        <Messages />
      </div>
    );
}

export default FooterContainer;