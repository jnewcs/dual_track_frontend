import React from 'react';
import InstallAppExplanation from './InstallAppExplanation';
import UpdateApp from '../../Components/UpdateApp';
import LogoutButton from '../../Components/LogoutButton';

const Settings = () => {
  return (
    <>
      <h1 className='is-size-2 mb-5'>My Settings</h1>

      <LogoutButton buttonClass='button' />

      <hr />

      <div className='level mb-5'>
        <div className='level-item has-text-centered'>
          <div>
            <p className='heading'>Tweets</p>
            <p className='title'>3,456</p>
          </div>
        </div>
        <div className='level-item has-text-centered'>
          <div>
            <p className='heading'>Following</p>
            <p className='title'>123</p>
          </div>
        </div>
        <div className='level-item has-text-centered'>
          <div>
            <p className='heading'>Followers</p>
            <p className='title'>456K</p>
          </div>
        </div>
        <div className='level-item has-text-centered'>
          <div>
            <p className='heading'>Likes</p>
            <p className='title'>789</p>
          </div>
        </div>
      </div>

      <InstallAppExplanation />

      <UpdateApp />

      <footer className='has-background-white-ter mt-5'>
        <div className='content has-text-centered pt-3 pb-3'>
          <div>
            Icons made by <a href='https://www.flaticon.com/authors/srip' title='srip'>srip</a> from <a href='https://www.flaticon.com/' title='Flaticon'>www.flaticon.com</a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Settings;
