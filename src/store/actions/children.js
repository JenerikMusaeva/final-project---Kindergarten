import { SET_CHILDREN } from "./types";
import { BASE_URL } from '../constants/url'

export function setChildren(data) {
  return {
    type: SET_CHILDREN,
    payload: data,
  };
}

export const fetchChildren = () => (dispatch) => {
  // dispatch(startFetch());
  dispatch(setChildren([]));

  fetch(BASE_URL)
    .then((r) => r.json())
    .then((children) => {
        dispatch(setChildren(children));
        // dispatch(endFetch());
    });
};