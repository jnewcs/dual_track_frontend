import React from 'react';
import InstallAppExplanation from './InstallAppExplanation';
import UpdateApp from '../../Components/UpdateApp';

const Settings = () => {
  return (
    <>
      <h1 className='is-size-1 mb-5'>My Settings</h1>

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
    </>
  );
}

export default Settings;
