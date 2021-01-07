import React, { Component } from 'react';
import style from '../../public/styles.css';
import Logos from '../components/Logos';
import eventLogo from '../../public/36logo_408x165.png';

class HeaderContainer extends Component {
  render() {
    return (
      <div className='headerContainer'>
        <Logos />
        <img src={eventLogo} />
        <h1>Latest Results</h1>
      </div>
    );
  }
}

export default HeaderContainer;