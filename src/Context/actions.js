const superagent = require('superagent');

const sucessObject = { success: true };
const failureObject = { success: false };
const unhandledErrorMsg = 'Unhandled error while logging in :(';

export function loginUser(dispatch, history, payload) {
  dispatch({ type: 'REQUEST_LOGIN' });

  return superagent
    .post(`${process.env.REACT_APP_ROOT_URL}/login`)
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

export async function getWorkouts(dispatch) {
  // TODO: Change this to grab workouts from the backend service
  dispatch({ type: 'REQUEST_WORKOUTS' });
  setTimeout(() => {
    const mockedWorkouts = [
      {
        id: 1,
        identifier: process.env.REACT_APP_WORKOUT_UID,
        name: 'Track 150m Intervals',
        description: '5 sets of 150m with 2 minute breaks'
      },
      {
        id: 3,
        identifier: '8935fr-1m32lk',
        name: '1 mile endurance',
        description: 'Simple 1 mile run to gain endurance'
      },
    ];
    dispatch({ type: 'RECEIVE_WORKOUTS', workouts: mockedWorkouts });
  }, 1500);
};

export async function checkAuth(dispatch) {
  const token = localStorage.getItem('currentUserToken') || '';
  return superagent
    .get(`${process.env.REACT_APP_ROOT_URL}/users/check`)
    .set('Content-Type', 'application/json')
    .set('Accept', 'application/json')
    .set('Authorization', token)
    .end((_err, res) => {
      if (needsLoginToProceed(res, dispatch)) return;

      dispatch({ type: 'TOGGLE_NOTIFICATION', notification: {
        text: 'Auth token is still valid :)',
        type: 'info'
      }});
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
