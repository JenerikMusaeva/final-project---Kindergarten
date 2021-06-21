import { ADD_CHILD, FETCH_CHILDREN_FAILURE, FETCH_CHILDREN_START, FETCH_CHILDREN_SUCCESS, SET_CHILDREN } from "./types";
import { BASE_URL } from '../constants/url'

// export function setChildren(data) {
//   return {
//     type: SET_CHILDREN,
//     payload: data,
//   };
// }

export function fetchChildrenStart() {
  return {
    type: FETCH_CHILDREN_START,
  };
}

export function fetchChildrenFailure(payload) {
  return {
    type: FETCH_CHILDREN_FAILURE,
    payload,
  };
}

export function fetchChildrenSuccess(payload) {
  return {
    type: FETCH_CHILDREN_SUCCESS,
    payload,
  };
}

export const fetchChildren = () => (dispatch) => {
  dispatch(fetchChildrenStart());

  fetch(`${BASE_URL}/childs/`)
    .then((r) => r.json())
    .then((children) => {
      dispatch(fetchChildrenSuccess(children));
    })
    .catch((error) => {
      dispatch(fetchChildrenFailure(error.message));
    });
};

export const addChild = (data) => {
  return {
    type: ADD_CHILD,
    payload: data,
  };
};