import React from 'react';
import { NavLink } from 'react-router-dom';

const Workouts = () => {
  return (
    <div>
      <div className='' >
        <h1 className='is-size-2 mb-5'>
          My Workouts
        </h1>

        <div className='columns'>
          <div className='column is-one-third'>
            <div className='card'>
              <div className='card-content'>
                <div className='content'>
                  <NavLink to={`/workouts/${process.env.REACT_APP_WORKOUT_UID}`}>
                    Track 150m Workout
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Workouts;
