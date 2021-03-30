const ROOT_URL = '//127.0.0.1:4000';
const sucessObject = { success: true };
const failureObject = { success: false };

export async function loginUser(dispatch, loginPayload) {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify(loginPayload),
  };

  try {
    dispatch({ type: 'REQUEST_LOGIN' });
    let response = await fetch(`${ROOT_URL}/login`, requestOptions);
    let data = await response.json();

    // If the email attribute is present, the login call was a success
    if (data.email) {
      // Using `Access-Control-Expose-Headers: 'Authorization'` response header,
      // we are able to grab the Authorization token and save it in memory
      var token = response.headers.get('Authorization');
      dispatch({ type: 'LOGIN_SUCCESS', payload: { email: data.email, token: token } });
      localStorage.setItem('currentUserEmail', data.email);
      localStorage.setItem('currentUserToken', token);

      return sucessObject;
    }

    dispatch({ type: 'LOGIN_ERROR', error: data.message });
    return failureObject;
  } catch (error) {
    dispatch({ type: 'LOGIN_ERROR', error: 'Unhandled error while logging in :(' });
    return failureObject;
  }
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
    let response = await fetch(`${ROOT_URL}/users/check`, requestOptions);
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
