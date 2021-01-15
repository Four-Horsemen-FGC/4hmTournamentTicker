import React from 'react';
import Clock from '../components/Clock';
import Messages from '../components/Messages';

const FooterContainer = () => {
    return (
      <div className='footerContainer'>
        <Clock />
        <Messages />
      </div>
    );
}

export default FooterContainer;