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
        <div className='button' onClick={leaveFullScreen}>
          Leave Full Screen
        </div>
      ) : (
        <div className='button' onClick={enterFullScreen}>
          Enter Full Screen
        </div>
      )}
    </>
  );
};

export default FullScreen;
