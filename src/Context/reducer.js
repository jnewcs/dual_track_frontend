let email = localStorage.getItem('currentUserEmail') || '';
let token = localStorage.getItem('currentUserToken') || '';

export const initialState = {
  email: '' || email,
  token: '' || token,
  loading: false,
  notification: null,
  errorMessage: null,
  updateAvailable: false,
  workouts: [],
  selectedWorkout: {}
};

export const AuthReducer = (initialState, action) => {
  switch (action.type) {
    case 'REQUEST_WORKOUT':
    case 'REQUEST_LOGIN':
    case 'REQUEST_AUTH':
      return {
        ...initialState,
        loading: true,
        errorMessage: null
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
    case 'RESET_ERROR':
      return {
        ...initialState,
        loading: false,
        errorMessage: null
      };
    case 'TOGGLE_UPDATE_AVAILABLE':
      return {
        ...initialState,
        updateAvailable: action.updateAvailable
      };
    case 'TOGGLE_NOTIFICATION':
      return {
        ...initialState,
        notification: action.notification
      };
    case 'REQUEST_WORKOUTS':
      return {
        ...initialState,
        loading: true,
        errorMessage: null,
        selectedWorkout: {}
      };
    case 'RECEIVE_WORKOUTS':
      return {
        ...initialState,
        loading: false,
        error: null,
        workouts: action.workouts
      };
    case 'RECEIVE_WORKOUT':
      return {
        ...initialState,
        loading: false,
        error: null,
        selectedWorkout: action.workout
      };
    case 'RECEIVE_WORKOUT_ERROR':
      return {
        ...initialState,
        loading: false,
        error: action.error,
        selectedWorkout: {}
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};
