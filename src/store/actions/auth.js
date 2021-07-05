import { BASE_URL } from "../constants/url";
import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
} from "./types";

// export const logIn = (reguest) => (dispatch) => {
//   fetch(`${BASE_URL}/users/sign-in`, reguest)
//     .then((r) => r.json())
//     .then((data) => {
//       if (typeof data === "string") {
//         dispatch({ type: LOGIN_FAILURE });
//       } else {
//         localStorage.setItem("x_token", data.token);
//         dispatch({ type: LOGIN_SUCCESS, payload: data });
//       }
//     });
// };

export const logOut = () => (dispatch) => {
  dispatch({
    type: LOGOUT_SUCCESS,
  });
  localStorage.removeItem("x_token");
};
