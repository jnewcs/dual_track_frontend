import React, { useState } from 'react';
import StopWatch from '../../Components/Stopwatch';
import { timeToString } from '../../Config/utils';

const Segment = ({ segment, segmentLength, index }) => {
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

  const grabNotificationClass = () => {
    const finishTimeInSeconds = finishTime / 1000.0;
    const difference = segment.time_goal - finishTimeInSeconds;
    if (difference < -8.0) return 'notification is-danger';
    if (difference < -4.0) return 'notification is-warning';

    return 'notification is-success';
  };

  return (
    <div className='column is-one-third'>
      <div className='card'>
        <div className='segment-position'>
          <span className='has-text-primary'>{index + 1 }</span> / {segmentLength}
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

            {finishTime ? (
              <div className={grabNotificationClass()}>
                <b className='is-size-5'>Actual Time</b>
                <br/>
                {timeToString(finishTime)}
              </div>
            ) : (
              <>
                {!showStopwatch && (
                  <div tabIndex={0} className='button is-primary is-medium' onClick={startClick}>
                    Start
                  </div>
                )}

                {showStopwatch && <StopWatch onFinishCallback={onFinishCallback} />}
              </>
            )}

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
