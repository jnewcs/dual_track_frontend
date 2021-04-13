import React, { Suspense } from 'react';
import './App.scss';
import './Styles/General.css';
import { Switch } from 'react-router-dom';
import { addPwaUpdateListener } from 'pwa-helper-components';

import routes from './Config/routes.js';
import { useAuthDispatch } from './Context';
import AppRoute from './Components/AppRoute';
import DesktopNav from './Components/DesktopNav';
import NotificationContainer from './Components/NotificationContainer';
import Loader from './Components/Loader';
import MobileNav from './Components/MobileNav';

function App() {
  const dispatch = useAuthDispatch();
  addPwaUpdateListener((isUpdateAvailable) => {
    dispatch({ type: 'TOGGLE_UPDATE_AVAILABLE', updateAvailable: isUpdateAvailable });
  });

  return (
    <>
      <div id='app-container'>
        <DesktopNav />
        <NotificationContainer />

        <div className='container is-widescreen p-5'>
          <Suspense fallback={<Loader />}>
            <Switch>
                {routes.map((route, index) => (
                  <AppRoute
                    exact
                    key={index}
                    {...route}
                  />
                ))}
            </Switch>
          </Suspense>
        </div>

        <MobileNav />
      </div>
    </>
  );
}

export default App;
