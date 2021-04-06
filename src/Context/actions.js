const superagent = require('superagent');

export const ROOT_PROD_URL = 'https://glacial-plateau-65219.herokuapp.com';
const sucessObject = { success: true };
const failureObject = { success: false };
const unhandledErrorMsg = 'Unhandled error while logging in :(';

export function loginUser(dispatch, history, payload) {
  dispatch({ type: 'REQUEST_LOGIN' });

  return superagent
    .post(`${ROOT_PROD_URL}/login`)
    .send(payload) // sends a JSON post body
    .set('Content-Type', 'application/json')
    .set('Accept', 'application/json')
    .end((err, res) => {
      const email = res?.body?.email;
      if (!err && email) {
        // Using `Access-Control-Expose-Headers: 'Authorization'` response header,
        // we are able to grab the Authorization token and save it in memory
        var token = res.headers['Authorization'] || res.headers['authorization'];
        dispatch({ type: 'LOGIN_SUCCESS', payload: { email: email, token: token } });
        localStorage.setItem('currentUserEmail', email);
        localStorage.setItem('currentUserToken', token);

        dispatch({ type: 'TOGGLE_NOTIFICATION', notification: {
          text: 'Logged in successfully!',
          type: 'info'
        }});
        history.push('/dashboard');

        return sucessObject;
      }

      dispatch({ type: 'LOGIN_ERROR', error: res?.body?.message || unhandledErrorMsg });
      return failureObject;
    });
}

export async function checkAuth(dispatch) {
  const token = localStorage.getItem('currentUserToken') || '';
  return superagent
    .get(`${ROOT_PROD_URL}/users/check`)
    .set('Content-Type', 'application/json')
    .set('Accept', 'application/json')
    .set('Authorization', token)
    .end((_err, res) => {
      if (needsLoginToProceed(res, dispatch)) return;
    });
}

function needsLoginToProceed(res, dispatch) {
  if (res.statusCode !== 401) return false;

  logout(dispatch);
  dispatch({ type: 'TOGGLE_NOTIFICATION', notification: {
    text: 'No longer signed in :( Please login to continue',
    type: 'warning'
  }});
  return true;
}

export async function logout(dispatch) {
  dispatch({ type: 'LOGOUT' });
  localStorage.removeItem('currentUserEmail');
  localStorage.removeItem('currentUserToken');
}
