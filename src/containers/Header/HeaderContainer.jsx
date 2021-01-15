import React from 'react';
import Logos from '../../components/Logos/Logos.jsx';
import eventLogo from '../../assets/images/Logo_36.svg';
import styles from './HeaderContainer.module.css';

const HeaderContainer = (props) => {
  return (
    <div className={styles.headerContainer}>
      <Logos className={styles.flex1} />
      <img className={styles.mainLogo} src={eventLogo} alt='eventLogo'/>
      <h1 className={styles.flex1}>{props.heading}</h1>
    </div>
  )
}

export default HeaderContainer;