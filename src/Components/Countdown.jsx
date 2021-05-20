import React, { PureComponent } from 'react';

class Countdown extends PureComponent {
  state = {
    minutesRemaining: 0,
    secondsRemaining: 0,
    goalInMS: new Date().getTime() + (this.props.amount * 1000)
  };

  calculateMinutesRemaining = () => {
    // Get todays date and time
    const now = new Date().getTime();
    // Find the distance between now an the count down date
    const distance = this.state.goalInMS - now;
    return Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  }

  calculateSecondsRemaining() {
    // Get todays date and time
    const now = new Date().getTime();
    // Find the distance between now an the count down date
    const distance = this.state.goalInMS - now;
    return Math.floor((distance % (1000 * 60)) / 1000);
  }

  tick = () => {
    this.setState({
      minutesRemaining: this.calculateMinutesRemaining(),
      secondsRemaining: this.calculateSecondsRemaining()
    }, () => {
      if (this.state.secondsRemaining <= 0 && this.state.minutesRemaining <= 0) {
        clearInterval(this.interval);

        if (this.props.onFinish) {
          this.props.onFinish();
        }
      }
    });
  }

  componentDidMount = () => {
    this.tick();
    this.interval = setInterval(this.tick, 1000);
  }

  componentWillUnmount = () => {
    clearInterval(this.interval);
  }

  get textColor() {
    if (this.state.minutesRemaining === 0 && this.state.secondsRemaining < 30) {
      return 'has-text-danger';
    }

    return '';
  }

  render() {
    return (
      <div className={this.textColor}>
        {this.state.minutesRemaining}:{this.state.secondsRemaining} left
      </div>
    );
  }
}

export default Countdown;
