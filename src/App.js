import React from 'react';
import './App.scss';
import './Styles/General.css';
import { Switch } from 'react-router-dom';
import Nav from './Components/Nav';
import routes from './Config/routes.js';
import AppRoute from './Components/AppRoute';
import { addPwaUpdateListener } from 'pwa-helper-components';
import { useAuthDispatch } from './Context';

function App() {
  const dispatch = useAuthDispatch();
  addPwaUpdateListener((isUpdateAvailable) => {
    dispatch({ type: 'TOGGLE_UPDATE_AVAILABLE', updateAvailable: isUpdateAvailable });
  });

  return (
    <div className='app-container'>
      <Nav />

      <div className='container is-widescreen pt-5'>
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
  );
}

export default App;
