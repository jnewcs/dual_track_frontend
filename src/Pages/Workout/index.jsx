import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Loader from '../../Components/Loader';
import Show from '../../Components/Show';
import { generateUUID } from '../../Config/utils';
import { useAuthDispatch, useAuthState } from '../../Context';
import { getWorkout } from '../../Context/actions';
import PreviousSessions from './PreviousSessions';
import { getRelevantSegmentData, saveRelevantSegmentData } from './SegmentUtils';
import WorkoutDetail from './WorkoutDetail';

const Workout = ({ match }) => {
  const { params: { identifier } } = match;
  const { selectedWorkout, error, loading, email } = useAuthState();
  const dispatch = useAuthDispatch();
  const [activeTab, setActiveTab] = useState('current');

  const sessionFromLS = localStorage.getItem('liveSessionIdentifier') || null;
  const identifierFromLS = localStorage.getItem('liveWorkoutIdentifier') || null;
  const workoutStartedInitial = !!sessionFromLS && identifier === identifierFromLS;

  const [workoutStarted, setWorkoutStatus] = useState(workoutStartedInitial);
  const sessionIdenitiferInitial = workoutStartedInitial ? sessionFromLS : null;
  const [liveSessionIdentifier, setSessionIdentifier] = useState(sessionIdenitiferInitial);

  const segmentIdentifierFromLS = localStorage.getItem('liveSegmentIdentifier') || null;
  const [segmentIdentifier, setSegmentIdentifier] = useState(segmentIdentifierFromLS);

  const defaultSegmentData = getRelevantSegmentData(identifier, liveSessionIdentifier, segmentIdentifier);
  const [segmentData, setSegmentData] = useState(defaultSegmentData);

  const setWorkoutData = (uuid, newIdentifier, newSegmentIdentifier, workoutStatus = true) => {
    localStorage.setItem('liveSessionIdentifier', uuid);
    localStorage.setItem('liveWorkoutIdentifier', newIdentifier);
    localStorage.setItem('liveSegmentIdentifier', newSegmentIdentifier);

    setWorkoutStatus(workoutStatus);
    setSessionIdentifier(uuid);
    setSegmentIdentifier(newSegmentIdentifier);
    setSegmentData({});
  };

  const startWorkout = (channel = null) => {
    const uuid = generateUUID();
    const currentSegmentIdentifier = selectedWorkout.segments[0].identifier;
    setWorkoutData(uuid, identifier, currentSegmentIdentifier);

    if (channel) {
      channel.trigger('client-workout-started', { uuid, identifier, currentSegmentIdentifier });
    }
  };

  const mirrorNextSegment = () => {
    const currentIndex = selectedWorkout.segments.findIndex(s => s.identifier === segmentIdentifier);
    let newSegmentIdentifier;
    if ((currentIndex + 1) >= selectedWorkout.segments.length) {
      newSegmentIdentifier = null;
    } else {
      newSegmentIdentifier = selectedWorkout.segments[currentIndex + 1].identifier;
    }

    localStorage.setItem('liveSegmentIdentifier', newSegmentIdentifier);
    saveRelevantSegmentData(identifier, liveSessionIdentifier, segmentIdentifier, segmentData);
    setSegmentIdentifier(newSegmentIdentifier);
    setSegmentData({});
    if (newSegmentIdentifier === null) {
      setWorkoutData(null, null, null, false);
      setActiveTab('previous');
    }
  }

  const mirrorSegmentData = (data) => {
    setSegmentData({
      ...segmentData,
      [data.email]: data.results
    });
  }

  const mirrorWorkout = (data) => {
    setWorkoutData(data.uuid, data.identifier, data.currentSegmentIdentifier);
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
          segmentIdentifier={segmentIdentifier}
          segmentData={segmentData}
          mirrorSegmentData={mirrorSegmentData}
          mirrorNextSegment={mirrorNextSegment}
          email={email}
        />
      )}

      {activeTab === 'previous' && <PreviousSessions selectedWorkout={selectedWorkout} />}
    </>
  );
}

export default Workout;
