import React, { useState, useEffect } from 'react';
import { satisfies } from 'es-semver';
import { addPwaUpdateListener } from 'pwa-helper-components';

const Settings = () => {
  const [ changelog, setChangelog] = useState(null);
  const [ updateAvailable, setAvailable] = useState(false);

  addPwaUpdateListener((updateAvailable) => {
    setAvailable(updateAvailable);
  });

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

  const refreshApp = function() {
    navigator.serviceWorker.getRegistration()
      .then(reg => {
        if (reg.waiting) {
          reg.waiting.postMessage({ type: 'SKIP_WAITING' });
        }

        // We assume it just works :)
        setAvailable(false);
      });
  }

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

      <hr />

      {updateAvailable && (
        <>
          <div id='new-version-refresh-notification' className='mb-5'>
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
      )}
    </>
  );
}

export default Settings;
