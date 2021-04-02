import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuthState } from '../Context';

const Nav = () => {
  const { email, updateAvailable } = useAuthState();

  return (
    <nav className='navbar is-light' role='navigation' aria-label='main navigation'>
      <div className='navbar-brand'>
        <div className='has-text-primary is-size-3 p-2'>
          DualTrack
        </div>

        <div role='button' className='navbar-burger' aria-label='menu' aria-expanded='false' data-target='navbar-menu'>
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
        </div>
      </div>

      <div id='navbar-menu' className='navbar-menu'>
        <div className='navbar-start'>
          {Boolean(email) && (
            <>
              <NavLink to='/dashboard' className='navbar-item' activeClassName='is-active'>Dashboard</NavLink>
              <NavLink to='/settings' className='navbar-item' activeClassName='is-active'>
                Settings
                {updateAvailable && <div className='dot ml-1 has-background-primary'></div>}
              </NavLink>
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
