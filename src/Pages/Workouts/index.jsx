import React, { Component } from 'react';
import Pusher from 'pusher-js';
import { ROOT_PROD_URL } from '../../Context/actions';
import LockScreen from './LockScreen';
import FullScreen from './FullScreen';
import StopWatch from '../../Components/Stopwatch';
import ChatBubble from './ChatBubble';

class Workouts extends Component {
  constructor() {
    super();
    this.state = {
      chatHistory: []
    };

    // Enable pusher logging - not enabled in any environment except local
    const isLocal = process.env.NODE_ENV === 'development';
    Pusher.logToConsole = isLocal;

    this.pusher = new Pusher(process.env.REACT_APP_PUSHER_KEY, {
      cluster: process.env.REACT_APP_PUSHER_CLUSTER,
      authEndpoint: isLocal ? `http://localhost:4000/pusher/auth` :`${ROOT_PROD_URL}/pusher/auth`,
      auth: {
        headers: { 'Authorization': localStorage.getItem('currentUserToken') || '' }
      }
    });

    // TODO: Need to replace environment variable with value from the actual DB
    this.channel = this.pusher.subscribe(`private-workoutChannel-${process.env.REACT_APP_WORKOUT_UID}`);
  }

  componentDidMount() {
    this.channel.bind('client-chat-message', (data) => {
      this.setState({
        chatHistory: [
          ...this.state.chatHistory,
          {
            ...data,
            sender: 'other'
          }
        ]
      });
    }, this);
  }

  componentWillUnmount() {
    if (this.channel) {
      this.channel.unbind('client-chat-message');
    }

    this.pusher.unsubscribe(`private-workoutChannel-${process.env.REACT_APP_WORKOUT_UID}`);
  }

  setChatHistory = (history) => {
    this.setState({ chatHistory: history });
  }

  render() {
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

          <ChatBubble
            channel={this.channel}
            chatHistory={this.state.chatHistory}
            setChatHistory={this.setChatHistory}
          />
        </div>
      </div>
    );
  }
}

export default Workouts;
