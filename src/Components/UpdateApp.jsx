import React, { useState, useEffect } from 'react';
import { satisfies } from 'es-semver';
import { useAuthDispatch, useAuthState } from '../Context';

const UpdateApp = () => {
  const [ changelog, setChangelog] = useState(null);
  const dispatch = useAuthDispatch();
  const { updateAvailable } = useAuthState();

  useEffect(() => {
    const path = document.getElementById('changelog-path').dataset.path;
    fetch(path)
      .then(res => res.json())
      .then(changelog => {
        const relevantVersions = Object.keys(changelog).filter(item => satisfies(item, `>${process.env.REACT_APP_VERSION}`));
        const finalChangelog = relevantVersions.map(version => ({
          version,
          description: changelog[version].description
        }));
        setChangelog(finalChangelog);
      });
  }, []);

  if (!updateAvailable) return null;

  const refreshApp = function() {
    navigator.serviceWorker.getRegistration()
      .then(reg => {
        if (reg.waiting) {
          console.log('[Posting message from Update interface]');
          reg.waiting.postMessage({ type: 'SKIP_WAITING' });
        }

        console.log('[Setting update available to false]');
        // We assume that the SW get's he request and claims
        dispatch({ type: 'TOGGLE_UPDATE_AVAILABLE', updateAvailable: false });
      });
  };

  return (
    <>
      <div id='new-version-refresh-notification' className='mb-5 mt-5'>
        <div className='notification is-info is-light is-flex is-align-items-center'>
          A new version of DualTrack is available

          <div className='button is-light ml-2' id='new-version-refresh-button' onClick={refreshApp}>
            Refresh to Update
          </div>
        </div>
      </div>

      {changelog && changelog.map(changeset => (
        <div key={changeset.version} className='box'>
          <h3 className='is-size-3'>{changeset.version}</h3>
          <p>{changeset.description}</p>
        </div>
      ))}
    </>
  );
}

export default UpdateApp;
