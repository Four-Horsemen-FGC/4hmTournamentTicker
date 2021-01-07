import React from 'react';
import Entrant from './Entrant';

function Set(props) {
  return (
    <div className='set'>
      <Entrant name='Gin' score='2' outcome='scoreLose' />
      <Entrant name='PoopSteel' score='3' outcome='scoreWin' />
    </div>
  );
}

export default Set;