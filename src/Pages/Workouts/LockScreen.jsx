import React, { useState } from 'react';

const LockScreen = () => {
  const [screenLock, setScreenLock] = useState(null);
  const [locked, setLockedStatus] = useState(false);

  if (!('wakeLock' in navigator)) {
    // Screen Wake Lock API is not supported 🎉
    // - Need to be running the server in HTTPS mode
    return null;
  }

  // Function that attempts to request a screen wake lock.
  const requestWakeLock = async () => {
    try {
      const lock = await navigator.wakeLock.request('screen');
      setScreenLock(lock);
      setLockedStatus(true);
    } catch (err) {
      console.error(`${err.name}, ${err.message}`);
    }
  };
  const releaseWakeLock = () => {
    if (screenLock) screenLock.release();

    setScreenLock(null);
    setLockedStatus(false);
  };

  return (
    <>
      {locked ? (
        <div className='button' tabIndex='0' onClick={releaseWakeLock} onKeyUp={(e) => e.key === 'Enter' && releaseWakeLock()}>
          Unlock Page
        </div>
      ) : (
        <div className='button' tabIndex='0' onClick={requestWakeLock} onKeyUp={(e) => e.key === 'Enter' && requestWakeLock()}>
          Lock Page
        </div>
      )}
    </>
  );
};

export default LockScreen;
