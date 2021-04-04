import React, { useEffect, useState } from 'react';
import Pusher from 'pusher-js/with-encryption';
import { pauseButtonSrc, playButtonSrc, resetButtonSrc, timeToString } from '../../Config/utils';
import LockScreen from './LockScreen';

const Workouts = ({ history }) => {
  // const dispatch = useAuthDispatch();
  // const userDetails = useAuthState();
  const [playing, setPlaying ] = useState(false);
  const [startTime, setTime ] = useState(null);
  const [elapsedTime, setElapsedTime ] = useState(0);
  const [timerInterval, setTimerInterval ] = useState(null);

  useEffect(() => {
    // Enable pusher logging - not enabled in any environment except local
    Pusher.logToConsole = process.env.NODE_ENV === 'development';

    var pusher = new Pusher(process.env.REACT_APP_PUSHER_KEY, {
      cluster: process.env.REACT_APP_PUSHER_CLUSTER
    });

    var channel = pusher.subscribe('my-channel');
    channel.bind('my-event', function(data) {
      alert(JSON.stringify(data));
    });

    return () => {
      pusher.unsubscribe('my-channel');
      channel.unbind('new-comment');
    };
  }, []);

  const handleMainAction = () => {
    if (!playing) {
      setTime(Date.now() - elapsedTime);
    } else {
      clearInterval(timerInterval);
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
    <div>
      <div className='' >
        <h1 className='is-size-1 mb-5'>
          My Workouts
        </h1>

        <LockScreen />

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
              id='main-action-button'
              alt={playing ? 'pause stopwatch' : 'start stopwatch'}
              src={playing ? pauseButtonSrc : playButtonSrc}
              onClick={handleMainAction}
            />

            <img
              className='is-clickable'
              id='reset-button'
              alt='reset stopwatch'
              src={resetButtonSrc}
              onClick={handleReset}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Workouts;
