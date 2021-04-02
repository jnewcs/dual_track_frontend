import React, { useState, useEffect } from 'react';
import { loginUser, useAuthDispatch, useAuthState } from '../../Context';
import Form from './Form';

const Entrance = ({ history }) => {
  const { email, loading, errorMessage } = useAuthState();

  useEffect(() => {
    if (email) {
      history.push('/dashboard');
    }
  }, [email, history]);

  const [localEmail, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [activeTab, setActiveTab] = useState('login');

  const dispatch = useAuthDispatch();
  const handleLogin = async (e) => {
    e.preventDefault()
    let payload = {
      user: {
        password,
        email: localEmail
      }
    };

    loginUser(dispatch, payload);
  }
  const sharedProps = {
    localEmail,
    password,
    setEmail,
    setPassword,
    loading
  };
  const switchTab = (tab) => {
    if (loading) return;

    dispatch({ type: 'RESET_ERROR' });
    setActiveTab(tab);
  };

  return (
    <div className='columns is-centered'>
      <div className='column is-half'>
        {errorMessage && <p className='notification is-danger'>{errorMessage}</p>}

        <div className='tabs is-medium'>
          <ul>
            <li className={activeTab === 'login' && 'is-active'}>
              {/* eslint-disable-next-line */}
              <a role='menuitem' disabled={loading} onClick={() => switchTab('login')}>Login</a>
            </li>
            <li role='menuitem' className={activeTab === 'register' && 'is-active'}>
              {/* eslint-disable-next-line */}
              <a disabled={loading} onClick={() => switchTab('register')}>Register</a>
            </li>
          </ul>
        </div>

        {activeTab === 'login' && (
          <Form
            {...sharedProps}
            onClick={handleLogin}
            primaryText='Login'
          />
        )}

        {activeTab === 'register' && (
          <Form
            {...sharedProps}
            onClick={handleLogin}
            primaryText='Register'
          />
        )}
      </div>
    </div>
  );
}

export default Entrance;