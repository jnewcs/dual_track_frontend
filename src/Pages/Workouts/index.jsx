import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Loader from '../../Components/Loader';
import { useAuthDispatch, useAuthState } from '../../Context';
import { getWorkouts } from '../../Context/actions';

const Workouts = () => {
  const { workouts, loading } = useAuthState();
  const dispatch = useAuthDispatch();
  useEffect(() => {
    getWorkouts(dispatch);
  }, [dispatch]);

  const showWorkouts = !loading && workouts && !!workouts.length;
  return (
    <div>
      <div className='' >
        <h1 className='is-size-2 mb-5'>
          My Workouts
        </h1>

        {loading && <Loader />}

        {showWorkouts && (
          <div className='columns'>
            {workouts.map((workout) => (
              <div className='column is-one-third' key={workout.identifier}>
                <div className='card'>
                  <div className='card-content'>
                    <div className='content'>
                      <NavLink to={`/workouts/${workout.identifier}`}>
                        {workout.name}
                      </NavLink>
                      <hr />
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
    </div>
  );
}

export default Workouts;
