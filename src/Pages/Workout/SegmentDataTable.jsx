import React from 'react';
import { timeToString } from '../../Config/utils';
import { grabSegmentNotificationClass } from './SegmentUtils';

const SegmentDataTable = ({ segmentData, timeGoal }) => {
  if (!Object.keys(segmentData).length) return null;

  return (
    <>
      <table className='table is-bordered'>
        <thead>
          <tr>
            <th>User</th>
            <th>Finish Time</th>
          </tr>
        </thead>

        <tbody>
          {Object.keys(segmentData).map(email => {
            const results = segmentData[email];

            return (
              <tr key={email}>
                <td>{email}</td>
                <td className={`pb-1 pb-1 ${grabSegmentNotificationClass(results.finishTime, results.timeGoal)}`}>
                  {timeToString(results.finishTime)}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default SegmentDataTable;
