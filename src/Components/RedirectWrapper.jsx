import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { useAuthDispatch } from '../Context';

const RedirectWrapper = ({ pathname }) => {
  const dispatch = useAuthDispatch();
  useEffect(() => {
    dispatch({ type: 'TOGGLE_NOTIFICATION', notification: {
      text: 'Access denied',
      type: 'warning'
    }});
  }, [dispatch]);

  return <Redirect to={{ pathname }} />
}

export default RedirectWrapper;
