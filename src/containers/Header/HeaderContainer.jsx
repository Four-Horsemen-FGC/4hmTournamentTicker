import React from 'react';
// import Logos from '../../components/Logos/Logos.jsx';
// import eventLogo from '../../assets/images/Logo_36.svg';
import eventLogo from '../../assets/images/36logo_408x165.png';

import fortressLogo from '../../assets/images/4HM_fortress_logo_171x144.png';
import typoGraphicLogo from '../../assets/images/4HM_typographic_logo_283x128.png';

import styles from './HeaderContainer.module.css';

const HeaderContainer = (props) => {
  return (
    <div className={styles.headerContainer}>
      {/* <Logos /> */}
      <div className={styles.space}>
        <div className={styles.logoDiv}>
          <img src={typoGraphicLogo} alt='typgraphicLogo'></img>
        </div>
        <div className={styles.logoDiv}>
          <img src={fortressLogo} alt='fortressLogo'></img>
        </div>
      </div >
      <div className={styles.flex}>
        <div className={styles.eventLogo}>
          <img src={eventLogo} alt='eventLogo'/>
        </div>
      </div>
      <div className={styles.flex}>
        <h1>{props.heading}</h1>
      </div>
    </div>
  )
}

export default HeaderContainer;