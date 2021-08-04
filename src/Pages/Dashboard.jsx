import React from 'react'
import { checkAuth, useAuthDispatch, useAuthState } from '../Context';

const Dashboard = ({ _history }) => {
  const dispatch = useAuthDispatch();
  const { email } = useAuthState();

  return (
    <div className='ml-5 mr-5'>
      <div>
        <h1 className='is-size-2 mb-5'>
          My Dashboard
        </h1>

        <div className='buttons'>
          <button className='button is-default' onClick={() => checkAuth(dispatch)}>
            Check Auth :)
          </button>
        </div>
      </div>

      <p>
        {`Welcome to the dashboard ${email}!`}
      </p>
    </div>
  );
}

export default Dashboard;
