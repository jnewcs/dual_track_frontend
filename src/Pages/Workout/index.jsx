import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Loader from '../../Components/Loader';
import Show from '../../Components/Show';
import { generateUUID } from '../../Config/utils';
import { useAuthDispatch, useAuthState } from '../../Context';
import { getWorkout } from '../../Context/actions';
import PreviousSessions from './PreviousSessions';
import WorkoutDetail from './WorkoutDetail';

const Workout = ({ match }) => {
  const { params: { identifier } } = match;
  const { selectedWorkout, error, loading } = useAuthState();
  const dispatch = useAuthDispatch();
  const [activeTab, setActiveTab] = useState('current');

  const sessionFromLS = localStorage.getItem('liveSessionIdentifier') || null;
  const identifierFromLS = localStorage.getItem('liveWorkoutIdentifier') || null;
  const workoutStartedInitial = !!sessionFromLS && identifier === identifierFromLS;

  const [workoutStarted, setWorkoutStatus] = useState(workoutStartedInitial);
  const sessionIdenitiferInitial = workoutStartedInitial ? sessionFromLS : null;
  const [liveSessionIdentifier, setSessionIdentifier] = useState(sessionIdenitiferInitial);

  const setWorkoutData = (uuid, newIdentifier) => {
    localStorage.setItem('liveSessionIdentifier', uuid);
    localStorage.setItem('liveWorkoutIdentifier', newIdentifier);
    setWorkoutStatus(true);
    setSessionIdentifier(uuid);
  };

  const startWorkout = (channel = null) => {
    const uuid = generateUUID();
    setWorkoutData(uuid, identifier);

    if (channel) {
      channel.trigger('client-workout-started', { uuid, identifier });
    }
  };

  const mirrorWorkout = (data) => {
    setWorkoutData(data.uuid, data.identifier);
  };

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
      <nav className='breadcrumb mb-1' aria-label='breadcrumbs'>
        <ul>
          <li>
            <NavLink to='/workouts' className=''>Workouts</NavLink>
          </li>
          <li className='is-active'>
            <div className='ml-3'>{selectedWorkout.name}</div>
          </li>
        </ul>
      </nav>

      <Show condition={!workoutStarted}>
        <div className='tabs is-medium'>
          <ul>
            <li className={activeTab === 'current' ? 'is-active' : undefined}>
              {/* eslint-disable-next-line */}
              <a className='tab' onClick={() => setActiveTab('current')}>
                Current
              </a>
            </li>

            <li className={activeTab === 'previous' ? 'is-active' : undefined}>
              {/* eslint-disable-next-line */}
              <a className='tab' onClick={() => setActiveTab('previous')}>
                Previous Sessions
              </a>
            </li>
          </ul>
        </div>
      </Show>
      <Show condition={workoutStarted}>
        <div className='is-size-4 mb-2' key={liveSessionIdentifier}>
          Workout is Live!
        </div>
      </Show>

      {activeTab === 'current' && (
        <WorkoutDetail
          selectedWorkout={selectedWorkout}
          workoutStarted={workoutStarted}
          startWorkout={startWorkout}
          mirrorWorkout={mirrorWorkout}
        />
      )}
      {activeTab === 'previous' && <PreviousSessions />}
    </>
  );
}

export default Workout;
