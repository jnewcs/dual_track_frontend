import React from 'react'
import { logout, checkAuth, useAuthDispatch, useAuthState } from '../Context';

const Dashboard = ({ history }) => {
  const dispatch = useAuthDispatch();
  const userDetails = useAuthState();

  const handleLogout = () => {
    logout(dispatch); // call the logout action
    history.push('/entrance'); // navigate to logout page on logout
  };

  return (
    <div>
      <div className='' >
        <h1 className='is-size-1 mb-5'>
          Dashboard
        </h1>

        <div className='buttons'>
          <button className='button is-default' onClick={handleLogout}>
            Logout
          </button>

          <button className='button is-default' onClick={() => checkAuth(dispatch)}>
            Check Auth
          </button>
        </div>
      </div>

      <p>
        {`Welcome to the dashboard ${userDetails.email}!`}
      </p>
    </div>
  );
}

export default Dashboard;
