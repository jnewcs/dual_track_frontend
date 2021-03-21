import React from 'react';
import './App.sass';
import { Route, Switch } from 'react-router-dom';
import Nav from './Nav';

function App() {
  return (
    <div className='App'>
      <Nav />

      <Switch>
        <Route exact path='/'>
          <div>
            Home!
          </div>
        </Route>

        <Route path='/about'>
          <div>
            About!
          </div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
