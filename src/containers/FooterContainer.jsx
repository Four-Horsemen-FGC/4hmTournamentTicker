import React, { Component } from 'react';
import Clock from '../components/Clock';

class FooterContainer extends Component {
  render() {
    return (
      <div className='footerContainer'>
        <Clock />
      </div>
    );
  }
}

export default FooterContainer;