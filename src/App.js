import React from 'react';
import './App.scss';
import './Styles/General.css';
import { Switch } from 'react-router-dom';
import { addPwaUpdateListener } from 'pwa-helper-components';

import routes from './Config/routes.js';
import { useAuthDispatch } from './Context';
import AppRoute from './Components/AppRoute';
import Nav from './Components/Nav';
import NotificationContainer from './Components/NotificationContainer';

function App() {
  const dispatch = useAuthDispatch();
  addPwaUpdateListener((isUpdateAvailable) => {
    dispatch({ type: 'TOGGLE_UPDATE_AVAILABLE', updateAvailable: isUpdateAvailable });
  });

  return (
    <>
      <div id='app-container'>
        <Nav />
        <NotificationContainer />

        <div className='container is-widescreen p-5'>
          <Switch>
            {routes.map((route, index) => (
              <AppRoute
                exact
                key={index}
                {...route}
              />
            ))}
          </Switch>
        </div>
      </div>

      <footer className='has-background-white-ter'>
        <div className='content has-text-centered pt-3 pb-3'>
          <div>
            Icons made by <a href='https://www.flaticon.com/authors/srip' title='srip'>srip</a> from <a href='https://www.flaticon.com/' title='Flaticon'>www.flaticon.com</a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
