import React, { useState, useEffect } from 'react';
import 'pwa-helper-components/pwa-install-button.js';

const InstallApp = () => {
  const pwaInstallButton = document.querySelector('pwa-install-button');

  // The app is installable
  pwaInstallButton.addEventListener('pwa-installable', (event) => {
    console.log(event.detail); // true
  });

  // User accepted the prompt
  pwaInstallButton.addEventListener('pwa-installed', (event) => {
    console.log(event.detail); // true
    // You may want to use this event to send some data to your analytics
  });

  // If the user dismisses the prompt
  pwaInstallButton.addEventListener('pwa-installed', (event) => {
    console.log(event.detail); // false
  });

  return (
    <div className='box'>
      <p>
        This app is a PWA (progressive web app) that can be installed directly to your homescreen or desktop. It updates like other apps and provides a native like experience.
      </p>
      <ul>
        <li>Fast</li>
        <li>Reliable</li>
        <li>Offline First</li>
      </ul>

      <pwa-install-button>
        <button className='button is-primary'>
          Install!
        </button>
      </pwa-install-button>
    </div>
  )
}

export default InstallApp;
