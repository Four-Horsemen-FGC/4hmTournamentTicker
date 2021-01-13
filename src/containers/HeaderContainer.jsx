import React, { Component } from 'react';
import Logos from '../components/Logos';
import eventLogo from '../assets/images/36logo_408x165.png';

class HeaderContainer extends Component {
  render() {
    return (
      <div className='headerContainer'>
        <Logos />
        <img src={eventLogo} />
        <h1>Latest results</h1>
      </div>
    );
  }
}

export default HeaderContainer;