import { BASE_URL } from "../constants/url";
import {
  SET_GARTENS,
  FETCH_GARTENS_FAILURE,
  FETCH_GARTENS_SUCCESS,
  SELECT_GARTEN,
} from "./types";
import { fetchEnd, fetchStart } from "./appstate";

export function setGartens(data) {
  return {
    type: SET_GARTENS,
    payload: data,
  };
}

export function fetchGartensSuccess(payload) {
  return {
    type: FETCH_GARTENS_SUCCESS,
    payload,
  };
}

export function fetchGartensFailure(payload) {
  return {
    type: FETCH_GARTENS_FAILURE,
    payload,
  };
}

export const fetchGartens = () => (dispatch) => {
  dispatch(fetchStart());
  dispatch(setGartens([]));
  fetch(`${BASE_URL}/garden/`)
    .then((r) => r.json())
    .then((gartens) => {
      dispatch(setGartens(gartens));
      dispatch(fetchEnd());
    })
    .catch((error) => {
      dispatch(fetchGartensFailure(error.message));
      dispatch(fetchEnd());
    });
};

// export function selectGartenAction (data) {
//   return {
//     type: SELECT_GARTEN,
//     payload: data,
//   }
// }

// export const selectGarten = (data) => (dispatch) => {
//   dispatch(fetchStart());
//   dispatch(selectGartenAction(data))
//   dispatch(fetchEnd());

// }
