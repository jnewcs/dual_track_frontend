import React from 'react'
import { logout, checkAuth, useAuthDispatch, useAuthState } from '../Context';

const Dashboard = ({ history }) => {
  const dispatch = useAuthDispatch();
  const userDetails = useAuthState();

  const handleLogout = () => {
    logout(dispatch) //call the logout action
    history.push('/login') //navigate to logout page on logout
  };

  return (
    <div>
      <div className='' >
        <h1 className='is-size-1 mb-5'>
          Dashboard
        </h1>

        <button className='' onClick={handleLogout}>
          Logout
        </button>

        <button className='' onClick={() => checkAuth(dispatch)}>
          Check Auth
        </button>
      </div>

      <p>
        {`Welcome to the dashboard ${userDetails.email}!`}
      </p>
    </div>
  );
}

export default Dashboard;
