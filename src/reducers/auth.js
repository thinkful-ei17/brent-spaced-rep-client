import {
  SET_AUTH_TOKEN,
  CLEAR_AUTH,
  AUTH_REQUEST,
  AUTH_SUCCESS,
  AUTH_ERROR,
} from '../actions/auth';

const initialState = {
  authToken: null, // AuthToken !== null does not mean it has been validated
  currentUser: null,
  loading: false,
  error: null,
};
// Convert to switch statement for readability.
// Convert to spead operator instead of Object.assign.
export default function reducer(state = initialState, action) {
  switch (action.type) {
  case SET_AUTH_TOKEN:
    return Object.assign({}, state, { authToken: action.authToken, });
  case CLEAR_AUTH:
    return Object.assign({}, state, {
      authToken: null,
      currentUser: null,
    });
  case AUTH_REQUEST:
    return Object.assign({}, state, {
      loading: true,
      error: null,
    });
  case AUTH_SUCCESS:
    return Object.assign({}, state, {
      loading: false,
      currentUser: action.currentUser,
    });
  case AUTH_ERROR:
    return Object.assign({}, state, {
      loading: false,
      error: action.error,
    });
  default:
    return state;
  }
}
