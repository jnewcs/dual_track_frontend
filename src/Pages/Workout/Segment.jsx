import React, { useEffect, useState } from 'react';
import Show from '../../Components/Show';
import { useAuthState } from '../../Context';
import SegmentActions from './SegmentActions';
import SegmentDataTable from './SegmentDataTable';
import SegmentRest from './SegmentRest';

const Segment = ({ segment, segmentsLength, showStopwatch, toggleStopwatch, segmentData, index, workoutStarted, segmentIdentifier, allResultsIn }) => {
  const [showRestTimer, toggleRestTimer] = useState(false);
  const [restFinished, toggleRestFinished] = useState(false);
  const { email } = useAuthState();

  useEffect(() => {
    // When the identifier changes, don't show the rest timer
    toggleRestTimer(false);
    toggleRestFinished(false);
  }, [segmentIdentifier]);

  if (!segment) return null;

  const startClick = () => {
    toggleStopwatch(!showStopwatch);
  };
  const onFinishCallback = (time) => {
    toggleStopwatch(false, time);
    toggleRestTimer(true);
  };

  const onRestFinish = () => {
    toggleRestTimer(false);
    toggleRestFinished(true);
  };

  const myResultsIn = !!segmentData[email];

  return (
    <div className='mt-2'>
      <div className='card'>
        <div className='segment-position'>
          {index + 1 } / {segmentsLength}
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
                <SegmentRest rest={segment.rest} showRestTimer={showRestTimer} onRestFinish={onRestFinish} restFinished={restFinished} />
              </div>
            </div>

            <Show condition={!myResultsIn}>
              <SegmentActions
                showStopwatch={showStopwatch}
                startClick={startClick}
                onFinishCallback={onFinishCallback}
                workoutStarted={workoutStarted}
              />
            </Show>

            <SegmentDataTable segmentData={segmentData} timeGoal={segment.time_goal} />

            <Show condition={!allResultsIn}>
              <hr />
              <p>
                {segment.description}
              </p>
            </Show>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Segment;
