import {
  FETCH_GARTENS_START,
  FETCH_GARTENS_FAILURE,
  FETCH_GARTENS_SUCCESS,
  FETCH_GARTEN_START,
  FETCH_GARTEN_FAILURE,
  FETCH_GARTEN_SUCCESS,
} from "./types";
import { BASE_URL } from "../constants/url";

// GARTENS ////////////////////////////////////
// export function setGartens(data) {
//   return {
//     type: SET_GARTENS,
//     payload: data,
//   };
// }

export function fetchGartensStart() {
  return {
    type: FETCH_GARTENS_START,
  };
}

export function fetchGartensFailure(payload) {
  return {
    type: FETCH_GARTENS_FAILURE,
    payload,
  };
}

export function fetchGartensSuccess(payload) {
  return {
    type: FETCH_GARTENS_SUCCESS,
    payload,
  };
}

export const fetchGartens = () => (dispatch) => {
  dispatch(fetchGartensStart());

  fetch(`${BASE_URL}/garden/`)
    .then((r) => r.json())
    .then((gartens) => {
      dispatch(fetchGartensSuccess(gartens));
    })
    .catch((error) => {
      dispatch(fetchGartensFailure(error.message));
    });
};

// GARTEN ////////////////////////////////////

// export function setGarten(data) {
//   return {
//     type: SET_GARTEN,
//     payload: data,
//   };
// }

export function fetchGartenStart() {
  return {
    type: FETCH_GARTEN_START,
  };
}

export function fetchGartenFailure(payload) {
  return {
    type: FETCH_GARTEN_FAILURE,
    payload,
  };
}

export function fetchGartenSuccess(payload) {
  return {
    type: FETCH_GARTEN_SUCCESS,
    payload,
  };
}

export const fetchGarten = (id) => (dispatch) => {
  dispatch(fetchGartenStart());

  fetch(`${BASE_URL}/garden/${id}`)
    .then((r) => r.json())
    .then((garten) => {
      dispatch(fetchGartenSuccess(garten));
    })
    .catch((error) => {
      dispatch(fetchGartenFailure(error.message));
    });
};
