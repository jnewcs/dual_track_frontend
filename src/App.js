import React from 'react';
import './App.sass';
import './Styles/General.css';
import { Switch } from 'react-router-dom';
import Nav from './Components/Nav';
import routes from './Config/routes.js';
import AppRoute from './Components/AppRoute';

function App() {
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

      <div className='is-hidden' id='new-version-refresh-notification'>
        <div className='notification is-info is-light is-flex is-align-items-center'>
          A new version of DualTrack is available!

          <div className='button is-light ml-2' id='new-version-refresh-button'>
            REFRESH
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
