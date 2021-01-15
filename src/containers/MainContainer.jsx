import React from 'react';
import HeaderContainer from './HeaderContainer';
import MatchesContainer from './MatchesContainer';
import FooterContainer from './FooterContainer';


const MainContainer = () => {
    return (
      <div className='mainContainer'>
        <HeaderContainer heading='Latest Results'/>
        <MatchesContainer />
        <FooterContainer />
      </div>
    );

};

export default MainContainer;