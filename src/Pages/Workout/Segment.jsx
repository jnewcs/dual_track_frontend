import React, { useState } from 'react';
import SegmentActions from './SegmentActions';

const Segment = ({ segment, segmentLength, index, workoutStarted }) => {
  const [showStopwatch, toggleStopwatch] = useState(false);
  const [finishTime, setFinishTime] = useState(null);

  const startClick = () => {
    toggleStopwatch(!showStopwatch);
  };
  const onFinishCallback = (time) => {
    toggleStopwatch(false);
    setFinishTime(time);
    // TODO: Kickoff rest period (segment.rest)
    // TODO: show post segment feedback (good, neutral, bad)
    // TODO: consolidate info and show next segment
  };

  return (
    <div className='column is-one-third'>
      <div className='card'>
        <div className='segment-position'>
          {index + 1 } / {segmentLength}
        </div>

        <div className='card-content pt-1'>
          <div className='content'>
            <div className='columns mt-1 is-flex'>
              <div className='column is-half'>
                <b className='is-size-5'>{segment.display_length} Goal</b>
                <br/>
                {segment.time_goal} seconds
              </div>

              <div className='column is-half'>
                <b className='is-size-5'>Rest</b>
                <br/>
                {segment.rest} seconds
              </div>
            </div>

            <SegmentActions
              finishTime={finishTime}
              timeGoal={segment.time_goal}
              showStopwatch={showStopwatch}
              startClick={startClick}
              onFinishCallback={onFinishCallback}
              workoutStarted={workoutStarted}
            />

            <hr />

            <p>
              {segment.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Segment;
