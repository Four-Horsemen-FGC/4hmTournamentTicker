import React, { Component } from 'react';
import HeaderContainer from './HeaderContainer';
import MatchesContainer from './MatchesContainer';
import FooterContainer from './FooterContainer';

class MainContainer extends Component {
  render() {
    return (
      <div className='mainContainer'>
        <HeaderContainer />
        <MatchesContainer />
        <FooterContainer />
      </div>
    );
  }
};

export default MainContainer;