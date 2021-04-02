import React, { useEffect, useState } from 'react';
import 'pwa-helper-components/pwa-install-button.js';

const InstallAppExplanation = () => {
  const [ hideExplanation, hide ] = useState(true); 
  useEffect(() => {
    const pwaInstallButton = document.querySelector('pwa-install-button');
    console.log('pwaInstallButton: ', pwaInstallButton);

    // The app is installable
    if (pwaInstallButton) {
      pwaInstallButton.addEventListener('pwa-installable', (event) => {
        hide(false);
      });
  
      pwaInstallButton.addEventListener('pwa-installed', (event) => {
        // event.detail = true when user accepted the prompt
        // event.detail = true when user denied the prompt
        hide(event.detail);
      });
    }
  }, []);

  if (hideExplanation) return null;

  return (
    <div className='box mt-5 content'>
      <p>
        This app is a PWA (progressive web app) that can be installed directly to your homescreen or desktop. It updates like other apps and provides a native like experience.
      </p>
      <ul>
        <li>Fast</li>
        <li>Reliable</li>
        <li>Offline First</li>
      </ul>
    </div>
  )
}

export default InstallAppExplanation;
