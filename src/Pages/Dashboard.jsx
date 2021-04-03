import React, { useEffect } from 'react'
import { logout, checkAuth, useAuthDispatch, useAuthState } from '../Context';
import Pusher from 'pusher-js/with-encryption';

const Dashboard = ({ history }) => {
  const dispatch = useAuthDispatch();
  const userDetails = useAuthState();

  const handleLogout = () => {
    logout(dispatch); // call the logout action
    history.push('/entrance'); // navigate to logout page on logout
  };

  useEffect(() => {
    // Enable pusher logging - don't include this in production
    Pusher.logToConsole = process.env.NODE_ENV === 'development';

    var pusher = new Pusher('5803771fe6b95d4fe483', {
      cluster: 'us3'
    });

    var channel = pusher.subscribe('my-channel');
    channel.bind('my-event', function(data) {
      alert(JSON.stringify(data));
    });
  }, []);

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
            Check Auth :)
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
