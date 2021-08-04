import React from 'react';
import { timeToString } from '../../Config/utils';
import { useAuthState } from '../../Context';
import { getPreviousWorkoutData, grabSegmentNotificationClass, removeWorkoutHistory } from './SegmentUtils';

const PreviousSessions = ({ selectedWorkout, setActiveTab }) => {
  const { identifier } = selectedWorkout;
  const { email } = useAuthState();
  const previousSessions = getPreviousWorkoutData(identifier);

  if (!previousSessions || !Object.keys(previousSessions).length) {
    return (
      <div className='is-size-3 has-text-centered'>
        You have not run this workout before
      </div>
    );
  }

  const clearHistory = () => {
    removeWorkoutHistory(identifier);
    setActiveTab('current');
  };

  return (
    <>
      <div className='button' tabIndex={0} onClick={clearHistory}>
        Clear History
      </div>

      <div className='columns'>
        {Object.keys(previousSessions).map((sessionIdentifier, index) => {
          const segmentData = previousSessions[sessionIdentifier];

          return (
            <div className='column' key={sessionIdentifier}>
              <div className='card mt-2'>
                <div className='is-size-5 has-text-centered pt-2'>
                  Session #{index + 1}
                </div>

                <hr className='mt-2 mb-2'/>

                <div className='card-content pt-1'>
                  <div className='content'>
                    <table className='table is-bordered'>
                      <thead>
                        <tr>
                          <th>Segment</th>
                          <th>Goal</th>
                          <th>Finish Time</th>
                        </tr>
                      </thead>

                      <tbody>
                        {Object.keys(segmentData).map(segmentIdentifier => {
                          const results = segmentData[segmentIdentifier][email];

                          return (
                            <tr key={segmentIdentifier}>
                              <td>{results.displayLength}</td>
                              <td>{timeToString(results.timeGoal)}</td>
                              <td className={`pb-1 pb-1 ${grabSegmentNotificationClass(results.finishTime, results.timeGoal)}`}>
                                {timeToString(results.finishTime)}
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default PreviousSessions;
