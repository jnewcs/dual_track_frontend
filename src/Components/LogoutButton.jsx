import React from 'react';
import { useHistory } from 'react-router-dom';
import { logout, useAuthDispatch, useAuthState } from '../Context';

const LogoutButton = ({ buttonClass }) => {
  const { email } = useAuthState();
  const dispatch = useAuthDispatch();
  const history = useHistory();

  const handleLogout = () => {
    logout(dispatch);
    history.push('/entrance');
    dispatch({ type: 'TOGGLE_NOTIFICATION', notification: {
      text: 'Logged out successfully. Come back soon!',
      type: 'info'
    }});
  };

  if (!Boolean(email)) return null;

  return (
    <div
      className={buttonClass}
      tabIndex={0}
      onClick={handleLogout}
      onKeyUp={(e) => e.key === 'Enter' && handleLogout()}
    >
      Logout
    </div>
  );
}

export default LogoutButton;
