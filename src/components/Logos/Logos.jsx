import React from 'react';

import fortressLogo from '../../assets/images/Logo_fortress.svg';
import typoGraphicLogo from '../../assets/images/Logo_4HM_typo.svg';
import styles from './Logos.module.css';

const Logos = () => {
    return (
      <div className={styles.logosContainer}>
        <img className={styles.headerLogo1} src={typoGraphicLogo} alt='typgraphicLogo'></img>
        <img className={styles.headerLogo2} src={fortressLogo} alt='fortressLogo'></img>
      </div >
    );
}

export default Logos;