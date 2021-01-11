import React, { useEffect, useState } from 'react';

function Clock() {
  const [clockState, setClockState] = useState();

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setClockState(date.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' }));
    }, 1000);
  }, []);

  return (
    <div className='clockContainer'>
      <p className='clock'>{clockState}</p>
      <h2>Nashville, TN</h2>
    </div>
  );
}

export default Clock;