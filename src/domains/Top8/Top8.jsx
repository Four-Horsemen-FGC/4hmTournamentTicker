import React from 'react';
import HeaderContainer from '../../containers/Header/HeaderContainer';
import Top8Body from './Top8Body/Top8Body';
import styles from './Top8.module.css';

const Top8 = () => {
  return(
    <div className={styles.flex}>
      <HeaderContainer heading='Top 8' />
      <Top8Body />
    </div>
  )
}

export default Top8;