let email = localStorage.getItem('currentUserEmail') || '';
let token = localStorage.getItem('currentUserToken') || '';

export const initialState = {
  email: '' || email,
  token: '' || token,
  loading: false,
  errorMessage: null
};

export const AuthReducer = (initialState, action) => {
  switch (action.type) {
    case 'REQUEST_LOGIN':
    case 'REQUEST_AUTH':
      return {
        ...initialState,
        loading: true
      };
    case 'LOGIN_SUCCESS':
      return {
        ...initialState,
        email: action.payload.email,
        token: action.payload.token,
        loading: false,
        errorMessage: null
      };
    case 'LOGOUT':
      return {
        ...initialState,
        email: '',
        token: '',
        errorMessage: null
      };

    case 'LOGIN_ERROR':
      return {
        ...initialState,
        loading: false,
        errorMessage: action.error
      };

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};
