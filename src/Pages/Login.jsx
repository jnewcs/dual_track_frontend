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
    <div className='columns is-centered'>
      <div className='column is-half'>
        {errorMessage && <p className='notification is-danger'>{errorMessage}</p>}

        <form>
          <div className=''>
            <div className='field'>
              <label className='label' htmlFor='email'>Email</label>
              <div className='control'>
                <input
                  className='input'
                  type='text'
                  id='email'
                  disabled={loading}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div className='field'>
              <label className='label' htmlFor='password'>Password</label>
              <div className='control'>
                <input
                  className='input'
                  type='password'
                  id='password'
                  disabled={loading}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
          </div>

          <button className='button is-primary mt-5' onClick={handleLogin} disabled={loading}>Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;