import React from 'react';
import StopWatch from '../../Components/Stopwatch';
import { timeToString } from '../../Config/utils';
import { grabSegmentNotificationClass } from './SegmentUtils';

const SegmentActions = ({ workoutStarted, finishTime, timeGoal, startClick, onFinishCallback, showStopwatch }) => {
  if (!workoutStarted) return null;

  if (finishTime) {
    return (
      <div className={grabSegmentNotificationClass(finishTime, timeGoal)}>
        <b className='is-size-5'>Actual Time</b>
        <br/>
        {timeToString(finishTime)}
      </div>
    )
  }

  return (
    <>
      {!showStopwatch && (
        <div tabIndex={0} className='button is-primary is-medium' onClick={startClick}>
          Start
        </div>
      )}

      {showStopwatch && <StopWatch onFinishCallback={onFinishCallback} />}
    </>
  );
}

export default SegmentActions;
