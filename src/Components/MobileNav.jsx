import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Settings, Watch } from 'react-feather';

const MobileNav = () => {
  return (
    <>
      <div className='pt-5 pb-5'></div>
      <br/>

      <div className='is-hidden-desktop p-2 has-background-light' id='mobile-footer'>
        <div className='is-flex is-align-items-center is-justify-content-space-between pl-2 pr-3'>
          <NavLink to='/dashboard' className='icon p-2 has-text-black' activeClassName='has-text-primary'>
            <Home />
          </NavLink>

          <NavLink to='/workouts' className='icon p-2 has-text-black' activeClassName='has-text-primary'>
            <Watch />
          </NavLink>

          <NavLink to='/settings' className='icon p-2 has-text-black' activeClassName='has-text-primary'>
            <Settings />
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default MobileNav;
