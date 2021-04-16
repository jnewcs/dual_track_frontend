import React, { useEffect, useState } from 'react';
import { pauseButtonSrc, playButtonSrc, timeToString } from '../Config/utils';

const StopWatch = ({ showFinish = true, onPlayCallback = () => {}, onStopCallback = () => {}, onFinishCallback = () => {} }) => {
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
    // On mount, we want to start the timer
    handleMainAction();
  }, []); // eslint-disable-line

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

  const handleFinish = () => {
    if (playing) {
      handleMainAction();
      onFinishCallback(elapsedTime);
    }
  };

  return (
    <div className='has-text-centered is-flex is-flex-direction-column is-align-items-center'>
      <div className='stopwatch-circle circle is-flex is-justify-content-center is-align-items-center'>
        <span className='time is-size-4' id='display'>
          {elapsedTime ? timeToString(elapsedTime) : '00:00:00'}
        </span>
      </div>

      <div className='mt-3 is-flex is-justify-content-space-between is-align-items-center'>
        <img
          className='is-clickable'
          tabIndex={0}
          id='main-action-button'
          alt={playing ? 'pause stopwatch' : 'start stopwatch'}
          src={playing ? pauseButtonSrc : playButtonSrc}
          onClick={handleMainAction}
          onKeyUp={(e) => e.key === 'Enter' && handleMainAction()}
        />

        {showFinish && playing && (
          <div
            className='button ml-5 is-medium'
            tabIndex={0}
            id='reset-button'
            onClick={handleFinish}
            onKeyUp={(e) => e.key === 'Enter' && handleFinish()}
          >
            Finish
          </div>
        )}
      </div>
    </div>
  );
}

export default StopWatch;
