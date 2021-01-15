import React from 'react';
import Logos from '../components/Logos';
import eventLogo from '../assets/images/36logo_408x165.png';

const HeaderContainer = (props) => {
  return (
    <div className='headerContainer'>
      <Logos />
      <img src={eventLogo} alt='eventLogo'/>
      <h1>{props.heading}</h1>
    </div>
  )
}

export default HeaderContainer;