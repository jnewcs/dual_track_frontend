import React from 'react';
import Show from '../../Components/Show';
import { useAuthState } from '../../Context';
import LiveSegmentView from './LiveSegmentView';
import StaticSegment from './StaticSegment';

const Segments = ({ selectedWorkout, segmentIdentifier, segmentData, showStopwatch, toggleStopwatch, ...props }) => {
  const { email } = useAuthState();
  if (!selectedWorkout.segments.length) {
    return (
      <p className='mb-3'>
        Workout cannot start. No segments added yet :(
      </p>
    );
  }

  const segments = selectedWorkout.segments;
  const segmentsLength = segments.length;
  const myResultsIn = !!segmentData[email];
  const allResultsIn = Object.keys(segmentData).length === Object.keys(props.members).length;

  if (segmentIdentifier) {
    return (
      <>
        <Show condition={myResultsIn && allResultsIn}>
          <div className='button is-primary mt-2 mb-1' tabIndex={0} onClick={props.onNextClick}>
            Next Segment
          </div>
        </Show>

        <LiveSegmentView
          segments={segments}
          segmentsLength={segmentsLength}
          segmentIdentifier={segmentIdentifier}
          segmentData={segmentData}
          showStopwatch={showStopwatch}
          toggleStopwatch={toggleStopwatch}
        />
      </>
    );
  }

  return (
    <>
      <div className='is-size-3 mb-5'>
        {segmentsLength} Total {segmentsLength === 1 ? 'Segment' : 'Segments'}
      </div>

      <div className='segments columns'>
        {segments.map((segment) => (
          <StaticSegment
            key={segment.identifier}
            segment={segment}
          />
        ))}
      </div>
    </>
  );
}

export default Segments;
