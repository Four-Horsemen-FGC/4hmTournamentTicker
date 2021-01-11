import React, { useEffect, useState } from 'react';

function Messages() {
  const [messageState, setMessageState] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setMessageState((previousMessageState) => previousMessageState + 1);
    }, 8000);
    return () => clearInterval(interval);
  });

  const messages = [
    'Buy a shirt, will ya? FGCFour.myteespring.com/',
    'suh dud',
    'hori mori dayo',
    'KURIMIBURIJUHH'
  ];



  return (
    <div>
      <h2 className='messages'>{messages[(messageState % messages.length)]}</h2>
    </div>
  );
}

export default Messages;