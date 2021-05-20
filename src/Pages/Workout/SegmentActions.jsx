import React from 'react';
import Show from '../../Components/Show';
import StopWatch from '../../Components/Stopwatch';

const SegmentActions = ({ workoutStarted, startClick, onFinishCallback, showStopwatch }) => {
  if (!workoutStarted) return null;

  return (
    <>
      {!showStopwatch && (
        <div tabIndex={0} className='button is-primary is-medium' onClick={startClick}>
          Start
        </div>
      )}

      <Show condition={showStopwatch}>
        <StopWatch onFinishCallback={onFinishCallback} />
      </Show>
    </>
  );
}

export default SegmentActions;
