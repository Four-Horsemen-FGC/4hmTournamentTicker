import React, { Component } from 'react';
import style from '../../public/styles.css';
import HeaderContainer from './HeaderContainer';
import MatchesContainer from './MatchesContainer';

class MainContainer extends Component {
  render() {
    return (
      <div className='mainContainer'>
        <HeaderContainer />
        <MatchesContainer />
      </div>
    );
  }
};

export default MainContainer;