import React from 'react';
import Segment from './Segment';

const Segments = ({ selectedWorkout, workoutStarted }) => {
  if (!selectedWorkout.segments.length) {
    return (
      <p className='mb-3'>
        Workout cannot start. No segments added yet :(
      </p>
    );
  }

  const segments = selectedWorkout.segments;
  const segmentLength = segments.length;

  return (
    <>
      <div className='is-size-3 mb-5'>
        {segmentLength} Total {segmentLength === 1 ? 'Segment' : 'Segments'}
      </div>

      <div className='segments columns'>
        {segments.map((segment, index) => (
          <Segment
            key={segment.identifier}
            segment={segment}
            segmentLength={segmentLength}
            index={index}
            workoutStarted={workoutStarted}
          />
        ))}
      </div>
    </>
  );
}

export default Segments;
