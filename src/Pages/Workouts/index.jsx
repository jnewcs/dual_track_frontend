import React, { Component } from 'react';
import Pusher from 'pusher-js';
import LockScreen from './LockScreen';
import FullScreen from './FullScreen';
import StopWatch from '../../Components/Stopwatch';
import ChatBubble from './ChatBubble';

class Workouts extends Component {
  constructor() {
    super();
    this.state = {
      chatHistory: [],
      unreadMessage: false,
      members: [],
      showChat: false
    };

    // Enable pusher logging - not enabled in any environment except local
    const isLocal = process.env.NODE_ENV === 'development';
    Pusher.logToConsole = isLocal;

    this.pusher = new Pusher(process.env.REACT_APP_PUSHER_KEY, {
      cluster: process.env.REACT_APP_PUSHER_CLUSTER,
      authEndpoint: `${process.env.REACT_APP_ROOT_URL}/pusher/auth`,
      auth: {
        headers: { 'Authorization': localStorage.getItem('currentUserToken') || '' }
      }
    });

    // TODO: Need to replace environment variable with value from the actual DB
    this.channel = this.pusher.subscribe(`presence-workoutChannel-${process.env.REACT_APP_WORKOUT_UID}`);
  }

  componentDidMount() {
    this.channel.bind('pusher:subscription_succeeded', function(info) {
      this.setState({ members: info.members, showChat: true });
    }, this);

    this.channel.bind('pusher:member_added', function(member) {
      const newMembers = {
        ...this.state.members,
        [member.id]: member.info
      }
      this.setState({ members: newMembers });
    }, this);

    this.channel.bind('pusher:member_removed', function(member) {
      console.log('member removed!');
      const newMembers = Object.keys(this.state.members)
        .filter(key => `${key}` !== `${member.id}`)
        .reduce((obj, key) => {
          obj[key] = this.state.members[key];
          return obj;
        }, {});

      this.setState({ members: newMembers });
    }, this);

    this.channel.bind('client-chat-message', (data) => {
      this.setState({
        chatHistory: [
          ...this.state.chatHistory,
          {
            ...data
          }
        ],
        unreadMessage: true
      });
    }, this);
  }

  componentWillUnmount() {
    this.pusher.unsubscribe(`presence-workoutChannel-${process.env.REACT_APP_WORKOUT_UID}`);

    if (this.channel) {
      this.channel.unbind();
    }

    document.body.classList.remove('not-vertically-scrollable');
  }

  setChatHistory = (history) => {
    this.setState({ chatHistory: history });
  }

  setUnreadStatus = (status) => {
    this.setState({ unreadMessage: status });
  }

  render() {
    return (
      <div>
        <div className='' >
          <h1 className='is-size-2 mb-5'>
            My Workouts
          </h1>

          <div className='buttons'>
            <LockScreen />
            <FullScreen />
          </div>

          <StopWatch />

          <ChatBubble
            channel={this.channel}
            setChatHistory={this.setChatHistory}
            setUnreadStatus={this.setUnreadStatus}
            {...this.state}
          />
        </div>
      </div>
    );
  }
}

export default Workouts;
