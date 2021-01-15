import React from 'react';

import fortressLogo from '../assets/images/4HM_fortress_logo_171x144.png';
import typoGraphicLogo from '../assets/images/4HM_typographic_logo_283x128.png';

const Logos = () => {
    return (
      <div className='logosContainer'>
        <img className='orgLogo' src={typoGraphicLogo} alt='typgraphicLogo'></img>
        <pre className='spacer' />
        <img className='orgLogo' src={fortressLogo} alt='fortressLogo'></img>
      </div >
    );
}

export default Logos;