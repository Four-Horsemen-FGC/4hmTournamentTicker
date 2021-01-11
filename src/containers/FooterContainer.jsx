import React, { Component } from 'react';
import Clock from '../components/Clock';
import Messages from '../components/Messages';

class FooterContainer extends Component {
  render() {
    return (
      <div className='footerContainer'>
        <Clock />
        <Messages />
      </div>
    );
  }
}

export default FooterContainer;