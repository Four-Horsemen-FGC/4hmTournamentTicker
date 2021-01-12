import React from 'react';

function Chevron(props) {
  return (
    <div className='chevron'>
      <h3 className='centerChevron'>{props.identifier}</h3>
    </div>
  );
}

export default Chevron;