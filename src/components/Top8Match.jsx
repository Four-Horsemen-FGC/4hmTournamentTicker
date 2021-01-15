import React from "react";

function top8Match(props) {
  return (
    <div className='top8GameContainer'>
      <div className='upperTop8'>
        <div className='top8Entrant'>
          <h2 className='top8 top8Org'>ITS</h2>
          <h2 className='top8'>LilMajin</h2>
        </div>
        <div className='upperScoreHolder'>
          <h2 className='top8Score'>3</h2>
        </div>
      </div>

      <div className='upperTop8 lowerTop8'>
        <div className='top8Entrant'>
          <h2 className='top8 top8Org'>Echo Fox</h2>
          <h2 className='top8'>JDCR</h2>
        </div>
        <div className='upperScoreHolder lowerScoreHolder'>
          <h2 className='top8Score'>2</h2>
        </div>
      </div>
    </div>

  );
}

export default top8Match;