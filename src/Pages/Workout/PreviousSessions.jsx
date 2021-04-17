import React from 'react';

const PreviousSessions = () => {
  const previousSessions = localStorage.getItem('previousSessions') || [];
  if (!previousSessions || !previousSessions.length) {
    return (
      <div className='is-size-3 has-text-centered'>
        You have not run this workout before
      </div>
    );
  }

  return (
    <div>
      We have previous session data!
    </div>
  );
}

export default PreviousSessions;
