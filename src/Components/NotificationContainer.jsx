import React from 'react';
import { useAuthDispatch, useAuthState } from '../Context';

const NotificationContainer = () => {
  const dispatch = useAuthDispatch();
  const { notification } = useAuthState();
  if (notification === null) return null;

  const handleClick = () => {
    dispatch({ type: 'TOGGLE_NOTIFICATION', notification: null });
  };

  return (
    <div className={`notification is-${notification.type} is-light is-flex is-align-items-center`}>
      <div
        tabIndex={0}
        className='delete is-clickable is-size-3'
        onClick={handleClick}
        onKeyUp={(e) => e.key === 'Enter' && handleClick()}
        dangerouslySetInnerHTML={{ __html: '&#215;' }}
      />
      {notification.text}
    </div>
  );
}

export default NotificationContainer;
