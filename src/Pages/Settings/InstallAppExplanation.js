import React from 'react';
import 'pwa-helper-components/pwa-install-button.js';

const InstallAppExplanation = () => {
  return (
    <>
      <hr />

      <pwa-install-button>
        <div className='box mt-5 content unclickable'>
          <p>
            This app is a PWA (progressive web app) that can be installed directly to your homescreen or desktop. It updates like other apps and provides a native like experience.
          </p>
          <ul>
            <li>Fast</li>
            <li>Reliable</li>
            <li>Offline First</li>
          </ul>
        </div>

        <button className='button is-primary'>
          Install!
        </button>
      </pwa-install-button>
    </>
  )
}

export default InstallAppExplanation;
