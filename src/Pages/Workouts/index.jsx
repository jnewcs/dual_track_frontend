import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Loader from '../../Components/Loader';
import Show from '../../Components/Show';
import { useAuthDispatch, useAuthState } from '../../Context';
import { getWorkouts } from '../../Context/actions';
import { getFromLocalStorage } from '../Workout/SegmentUtils';

const Workouts = () => {
  const { workouts, loading } = useAuthState();
  const dispatch = useAuthDispatch();
  useEffect(() => {
    getWorkouts(dispatch);
  }, [dispatch]);

  const showWorkouts = !loading && workouts && !!workouts.length;
  const identifierFromLS = getFromLocalStorage('liveWorkoutIdentifier', 'string');

  return (
    <div className='ml-5 mr-5'>
      <h1 className='is-size-2 mb-5'>
        My Workouts
      </h1>

      {loading && <Loader />}

      {showWorkouts && (
        <div className='columns'>
          {workouts.map((workout) => (
            <div className='column is-one-third' key={workout.identifier}>
              <div className='card'>
                <div className={`card-image ${workout.gradientClass} p-2 is-flex is-flex-direction-column is-align-items-center is-justify-content-center`}>
                  <div className='tag'>
                    <NavLink to={`/workouts/${workout.identifier}`}>
                      {workout.name}
                    </NavLink>
                  </div>

                  <Show condition={identifierFromLS === workout.identifier}>
                    <div className='tag is-primary mt-2'>
                      Active Workout
                    </div>
                  </Show>
                </div>

                <div className='card-content'>
                  <div className='content'>
                    <p>
                      {workout.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Workouts;
