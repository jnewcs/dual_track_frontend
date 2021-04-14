import React from 'react';
import { Route } from 'react-router-dom';
import { useAuthState } from '../Context';
import RedirectWrapper from './RedirectWrapper';

const AppRoute = ({ component: Component, path, isPrivate, ...rest }) => {
  const { email } = useAuthState();
  return (
    <Route
      path={path}
      render={props =>
        isPrivate && !Boolean(email) ? (
          <RedirectWrapper pathname='/entrance' />
        ) : (
          <Component {...props} />
        )
      }
      {...rest}
    />
  )
}

export default AppRoute;
