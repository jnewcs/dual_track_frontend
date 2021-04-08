import React, { useState, useEffect } from 'react';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import { logout, useAuthDispatch, useAuthState } from '../Context';

const Nav = () => {
  const { email, updateAvailable } = useAuthState();
  const [showMenu, toggleMenu] = useState(false);
  const dispatch = useAuthDispatch();
  const history = useHistory();
  let location = useLocation();

  useEffect(() => {
    toggleMenu(false);
  }, [location]);

  const handleLogout = () => {
    logout(dispatch);
    history.push('/entrance');
    dispatch({ type: 'TOGGLE_NOTIFICATION', notification: {
      text: 'Logged out successfully. Come back soon!',
      type: 'info'
    }});
  };

  return (
    <nav className='navbar is-light' role='navigation' aria-label='main navigation'>
      <div className='navbar-brand'>
        <div className='has-text-primary is-size-3 p-2'>
          DualTrack
        </div>

        <div
          role='button'
          className='navbar-burger'
          aria-label='menu'
          aria-expanded='false'
          data-target='navbar-menu'
          id='navbar-burger'
          onClick={() => toggleMenu(!showMenu)}
        >
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
        </div>
      </div>

      <div id='navbar-menu' className={showMenu ? 'navbar-menu is-active' : 'navbar-menu'}>
        <div className='navbar-start'>
          {Boolean(email) && (
            <>
              <NavLink to='/dashboard' className='navbar-item' activeClassName='is-active'>Dashboard</NavLink>
              <NavLink to='/workouts' className='navbar-item' activeClassName='is-active'>Workouts</NavLink>
              <NavLink to='/settings' className='navbar-item' activeClassName='is-active'>
                Settings
                {updateAvailable && <div className='dot ml-1 has-background-primary'></div>}
              </NavLink>
              <div
                className='navbar-item is-clickable'
                tabIndex={0}
                onClick={handleLogout}
                onKeyUp={(e) => e.key === 'Enter' && handleLogout()}
              >
                Logout
              </div>
            </>
          )}
        </div>

        <div className='navbar-end'>
          <div className='navbar-item'>
            <div className='buttons'>
              {!Boolean(email) && (
                <NavLink to='/entrance' className='button is-light' activeClassName='is-active'>Login</NavLink>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
