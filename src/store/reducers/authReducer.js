import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
} from "../actions/types";

let initialState = {
  logined: !!localStorage.getItem('x_token'),
  userData: {},
  error: null,
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        logined: true,
        // userData: action.payload,
      };

    case LOGIN_FAILURE:
      return {
        ...state,
        logined: false,
        error: action.payload,
      };

    case LOGOUT_SUCCESS:
      return {
        ...state,
        logined: false,
      };

    case LOGOUT_FAILURE:
      return {
        ...state,
        error: action.payload,
      };

    case REGISTER_SUCCESS:
      return {
        ...state,
        logined: true,
        // userData: action.payload,
      };

    case REGISTER_FAILURE:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
}
