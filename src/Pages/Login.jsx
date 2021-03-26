import React, { useState } from 'react';
import { loginUser, useAuthDispatch, useAuthState } from '../Context';

const Login = ({ history }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useAuthDispatch();
  const handleLogin = async (e) => {
    e.preventDefault()
    let payload = {
      user: {
        password,
        email
      }
    };

    try {
      let response = await loginUser(dispatch, payload);
      if (!response.success) return;

      history.push('/dashboard');
    } catch (error) {
      console.log(error)
    }
  }

  const { loading, errorMessage } = useAuthState();

  return (
    <div className=''>
      <div className=''>
        <h1>Login Page</h1>

        {errorMessage && <p className=''>{errorMessage}</p>}

        <form>
          <div className=''>
            <div className=''>
              <label htmlFor='email'>Username</label>
              <input
                type='text'
                id='email'
                disabled={loading}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className=''>
              <label htmlFor='password'>Password</label>
              <input
                type='password'
                id='password'
                disabled={loading}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <button onClick={handleLogin} disabled={loading}>Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;