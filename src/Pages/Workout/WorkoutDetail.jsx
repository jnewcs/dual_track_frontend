import React, { Component } from 'react';
import Pusher from 'pusher-js';
import LockScreen from './LockScreen';
import FullScreen from './FullScreen';
import ChatBubble from './ChatBubble';
import Segments from './Segments';
import ChatMembers from './ChatMembers';
import Show from '../../Components/Show';

class WorkoutDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chatHistory: [],
      unreadMessage: false,
      members: [],
      showChat: false
    };

    // Enable pusher logging - not enabled in any environment except local
    Pusher.logToConsole = process.env.NODE_ENV === 'development';

    this.pusher = new Pusher(process.env.REACT_APP_PUSHER_KEY, {
      cluster: process.env.REACT_APP_PUSHER_CLUSTER,
      authEndpoint: `${process.env.REACT_APP_ROOT_URL}/pusher/auth`,
      auth: {
        headers: { 'Authorization': localStorage.getItem('currentUserToken') || '' }
      }
    });

    this.channel = this.pusher.subscribe(`presence-workoutChannel-${this.identifier}`);
  }

  get identifier() {
    const { identifier } = this.props.selectedWorkout;
    return identifier;
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

    this.channel.bind('client-workout-started', (data) => {
      this.props.mirrorWorkout(data);
    }, this);
  }

  componentWillUnmount() {
    this.pusher.unsubscribe(`presence-workoutChannel-${this.identifier}`);

    if (this.channel) {
      this.channel.unbind();
    }

    this.pusher.disconnect();

    document.body.classList.remove('not-vertically-scrollable');
  }

  setChatHistory = (history) => {
    this.setState({ chatHistory: history });
  }

  setUnreadStatus = (status) => {
    this.setState({ unreadMessage: status });
  }

  get showStartWorkoutButton() {
    if (this.props.workoutStarted) return false;

    return !!this.props.selectedWorkout.segments.length;
  }

  startWorkoutWrapper = () => {
    this.props.startWorkout(this.channel);
  }

  render() {
    return (
      <>
        <div className='buttons'>
          <Show condition={this.showStartWorkoutButton}>
            <div tabIndex={0} className='button is-primary' onClick={this.startWorkoutWrapper}>
              Start Workout
            </div>
          </Show>

          <LockScreen />
          <FullScreen />
          <ChatBubble
            channel={this.channel}
            setChatHistory={this.setChatHistory}
            setUnreadStatus={this.setUnreadStatus}
            {...this.state}
          />
        </div>

        <ChatMembers members={this.state.members} />

        <Segments selectedWorkout={this.props.selectedWorkout} workoutStarted={this.props.workoutStarted} />
      </>
    );
  }
}

export default WorkoutDetail;
