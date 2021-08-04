import React from 'react';
import Segment from './Segment';

const LiveSegmentView = ({ segments, segmentsLength, segmentIdentifier, ...props }) => {
  if (!segmentsLength) return null;

  const activeSegment = segments.find(s => s.identifier === segmentIdentifier);
  const index = segments.findIndex(s => s.identifier === segmentIdentifier);

  return (
    <Segment
      index={index}
      segment={activeSegment}
      segmentsLength={segmentsLength}
      segmentIdentifier={segmentIdentifier}
      workoutStarted={true}
      {...props}
    />
  );
}

export default LiveSegmentView;
