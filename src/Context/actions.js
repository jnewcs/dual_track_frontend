import { useHistory } from 'react-router-dom';
const superagent = require('superagent');

const ROOT_PROD_URL = 'https://glacial-plateau-65219.herokuapp.com';
const sucessObject = { success: true };
const failureObject = { success: false };
const unhandledErrorMsg = 'Unhandled error while logging in :(';

export function loginUser(dispatch, loginPayload) {
  dispatch({ type: 'REQUEST_LOGIN' });

  return superagent
    .post(`${ROOT_PROD_URL}/login`)
    .send(loginPayload) // sends a JSON post body
    .set('Content-Type', 'application/json')
    .set('Accept', 'application/json')
    .end((err, res) => {
      console.log('Login Request: ', err, res);

      const email = res.body.email;
      if (!err && email) {
        // Using `Access-Control-Expose-Headers: 'Authorization'` response header,
        // we are able to grab the Authorization token and save it in memory
        var token = res.headers['Authorization'];
        dispatch({ type: 'LOGIN_SUCCESS', payload: { email: email, token: token } });
        localStorage.setItem('currentUserEmail', email);
        localStorage.setItem('currentUserToken', token);
        let history = useHistory();
        history.push('/dashboard');

        return sucessObject;
      }

      dispatch({ type: 'LOGIN_ERROR', error: res.body.message || unhandledErrorMsg });
      return failureObject;
    });
}

export async function checkAuth(dispatch) {
  const token = localStorage.getItem('currentUserToken') || '';
  const requestOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': token  // Stored in the format: `Bearer ${token}`
    }
  };

  try {
    dispatch({ type: 'REQUEST_AUTH' });
    let response = await fetch(`${ROOT_PROD_URL}/users/check`, requestOptions);
    await response.json();
  } catch (error) {
    debugger
  }
}

export async function logout(dispatch) {
  dispatch({ type: 'LOGOUT' });
  localStorage.removeItem('currentUserEmail');
  localStorage.removeItem('currentUserToken');
}
