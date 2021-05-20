import React from 'react';

const StaticSegment = ({ segment }) => (
  <div className='column is-one-third'>
    <div className='card'>
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

          <hr />

          <p>
            {segment.description}
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default StaticSegment;
