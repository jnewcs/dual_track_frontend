import React from 'react';
import Countdown from '../../Components/Countdown';
import Show from '../../Components/Show';

const SegmentRest = ({ restFinished, rest, showRestTimer, onRestFinish }) => {
  return (
    <>
      <b className='is-size-5'>Rest</b>

      <br/>

      <Show condition={!restFinished}>
        {showRestTimer ? (
          <Countdown amount={rest} onFinish={onRestFinish} />
        ) : (
          <span>{rest} seconds</span>
        )}
      </Show>

      <Show condition={restFinished}>
        <div className='has-text-success'>
          Get ready for the next segment!
        </div>
       </Show>
    </>
  );
};

export default SegmentRest;
