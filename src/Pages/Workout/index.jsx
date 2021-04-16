import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Loader from '../../Components/Loader';
import { useAuthDispatch, useAuthState } from '../../Context';
import { getWorkout } from '../../Context/actions';
import WorkoutDetail from './WorkoutDetail';

const Workout = ({ match }) => {
  const { params: { identifier } } = match;
  const { selectedWorkout, error, loading } = useAuthState();
  const dispatch = useAuthDispatch();
  useEffect(() => {
    getWorkout(identifier, dispatch);
  }, [identifier, dispatch]);

  if (loading) {
    return <Loader />;
  } else if (!selectedWorkout || !Object.keys(selectedWorkout).length) {
    return (
      <div className='has-text-centered'>
        <h1 className='is-size-3'>{error}</h1>
        <NavLink to='/workouts' className='button mt-3'>Return to My Workouts</NavLink>
      </div>
    );
  }

  return (
    <>
      <nav className='breadcrumb' aria-label='breadcrumbs'>
        <ul>
          <li>
            <NavLink to='/workouts' className=''>Workouts</NavLink>
          </li>
          <li className='is-active'>
            <div className='ml-3'>{selectedWorkout.name}</div>
          </li>
        </ul>
      </nav>

      <WorkoutDetail selectedWorkout={selectedWorkout} />
    </>
  );
}

export default Workout;
