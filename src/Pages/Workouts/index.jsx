import React, { useEffect, useState } from 'react';
import Pusher from 'pusher-js/with-encryption';
import LockScreen from './LockScreen';
import FullScreen from './FullScreen';
import StopWatch from '../../Components/Stopwatch';
import ChatBubble from './ChatBubble';

const Workouts = ({ _history }) => {
  const [chatHistory, setChatHistory] = useState([]);
  const [chatChannel, setChatChannel] = useState(null);

  useEffect(() => {
    // Enable pusher logging - not enabled in any environment except local
    Pusher.logToConsole = process.env.NODE_ENV === 'development';

    var pusher = new Pusher(process.env.REACT_APP_PUSHER_KEY, {
      cluster: process.env.REACT_APP_PUSHER_CLUSTER
    });

    // TODO: Need to replace environment variable with value from the actual DB
    var channel = pusher.subscribe(`workoutChannel-${process.env.REACT_APP_WORKOUT_UID}`);
    channel.bind('new-message', function(data) {
      alert(JSON.stringify(data));
    });
    setChatChannel(channel);

    return () => {
      pusher.unsubscribe(`workoutChannel-${process.env.REACT_APP_WORKOUT_UID}`);
      channel.unbind('new-message');
      setChatChannel(null);
    };
  }, []);

  return (
    <div>
      <div className='' >
        <h1 className='is-size-1 mb-5'>
          My Workouts
        </h1>

        <div className='buttons'>
          <LockScreen />
          <FullScreen />
        </div>

        <StopWatch />
        <ChatBubble channel={chatChannel} chatHistory={chatHistory} setChatHistory={setChatHistory} />
      </div>
    </div>
  );
}

export default Workouts;
