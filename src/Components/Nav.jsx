import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className='navbar is-light' role='navigation' aria-label='main navigation'>
      <div className='navbar-brand'>
        <div className='has-text-primary is-size-3 p-2'>
          DualTrack
        </div>

        <a role='button' className='navbar-burger' aria-label='menu' aria-expanded='false' data-target='navbar-menu'>
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
        </a>
      </div>

      <div id='navbar-menu' className='navbar-menu'>
        <div className='navbar-start'>
          <NavLink to='/dashboard' className='navbar-item' activeClassName='is-active'>Dashboard</NavLink>
        </div>

        <div className='navbar-end'>
          <div className='navbar-item'>
            <div className='buttons'>
              <a className='button is-primary'>
                <strong>Sign up</strong>
              </a>
              <a className='button is-light'>
                Log in
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
