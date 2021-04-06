import React, { useEffect, useState } from 'react';
import { pauseButtonSrc, playButtonSrc, resetButtonSrc, timeToString } from '../Config/utils';

const StopWatch = ({ showReset = true, onPlayCallback = () => {}, onStopCallback = () => {} }) => {
  const [playing, setPlaying ] = useState(false);
  const [startTime, setTime ] = useState(null);
  const [elapsedTime, setElapsedTime ] = useState(0);
  const [timerInterval, setTimerInterval ] = useState(null);

  const handleMainAction = () => {
    if (!playing) {
      setTime(Date.now() - elapsedTime);
      onPlayCallback();
    } else {
      clearInterval(timerInterval);
      onStopCallback();
    }

    setPlaying(!playing);
  };

  useEffect(() => {
    // With react hooks, we can't set a callback after
    // calling setState on a state variable. To get around this,
    // we setup an effect that triggers when startTime is changed
    if (startTime === null) {
      clearInterval(timerInterval);
      setTimerInterval(null);
      setElapsedTime(0);
    } else {
      const interval = setInterval(function(){
        if (startTime === null) {
          setElapsedTime(0);
        } else {
          setElapsedTime(Date.now() - startTime);
        }
      }, 10);
      setTimerInterval(interval);
    }
  }, [startTime]); // eslint-disable-line

  const handleReset = () => {
    setTime(null);
    setPlaying(false);
  };

  return (
    <div className='box has-text-centered is-flex is-flex-direction-column is-align-items-center'>
      <h2 className='is-size-2 mb-3'>Stopwatch</h2>
      <div className='stopwatch-circle circle is-flex is-justify-content-center is-align-items-center'>
        <span className='time is-size-2' id='display'>
          {elapsedTime ? timeToString(elapsedTime) : '00:00:00'}
        </span>
      </div>

      <div className='mt-3 is-flex is-justify-content-space-between'>
        <img
          className='is-clickable mr-5'
          tabIndex={0}
          id='main-action-button'
          alt={playing ? 'pause stopwatch' : 'start stopwatch'}
          src={playing ? pauseButtonSrc : playButtonSrc}
          onClick={handleMainAction}
          onKeyUp={(e) => e.key === 'Enter' && handleMainAction()}
        />

        {showReset && (
          <img
            className='is-clickable'
            tabIndex={0}
            id='reset-button'
            alt='reset stopwatch'
            src={resetButtonSrc}
            onClick={handleReset}
            onKeyUp={(e) => e.key === 'Enter' && handleReset()}
          />
        )}
      </div>
    </div>
  );
}

export default StopWatch;
