import React, { useState } from 'react';

const FullScreen = () => {
  const [inFullScreen, setScreenStatus] = useState(!!document.fullscreenElement);

  const enterFullScreen = () => {
    document.documentElement.requestFullscreen();
    setScreenStatus(true);
  };
  const leaveFullScreen = () => {
    document.exitFullscreen();
    setScreenStatus(false);
  };

  return (
    <>
      {inFullScreen ? (
        <div className='button' tabIndex='0' onClick={leaveFullScreen} onKeyUp={(e) => e.key === 'Enter' && leaveFullScreen()}>
          Leave Full Screen
        </div>
      ) : (
        <div className='button' tabIndex='0' onClick={enterFullScreen} onKeyUp={(e) => e.key === 'Enter' && enterFullScreen()}>
          Enter Full Screen
        </div>
      )}
    </>
  );
};

export default FullScreen;
