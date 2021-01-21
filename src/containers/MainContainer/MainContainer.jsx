import React, { useEffect, useState } from 'react';
import HeaderContainer from '../Header/HeaderContainer.jsx';
import MatchesContainer from '../Matches/MatchesContainer.jsx';
import FooterContainer from '../Footer/FooterContainer.jsx';

import styles from './MainContainer.module.css'
import { Redirect } from 'react-router-dom';


const MainContainer = () => {
  // const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    setTimeout(() => <Redirect to='upcoming-matches'/>, 10000);
    // setTimeout(() => console.log('redirecting'), 10000);
  })

    return (
      <div className={styles.mainContainer}>
        <HeaderContainer heading='Latest Results'/>
        <MatchesContainer />
        <FooterContainer />
      </div>
    );

};

export default MainContainer;