import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useAuthState } from '../Context';

const AppRoute = ({ component: Component, path, isPrivate, ...rest }) => {
  const { email } = useAuthState();
  return (
    <Route
      path={path}
      render={props =>
        isPrivate && !Boolean(email) ? (
          <Redirect to={{ pathname: '/entrance' }} />
        ) : (
          <Component {...props} />
        )
      }
      {...rest}
    />
  )
}

export default AppRoute;
