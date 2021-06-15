import { SET_GARTENS, SET_GARTEN } from "./types";
import { BASE_URL } from '../constants/url'

import { startFetch, endFetch } from './appstate'

export function setGartens(data) {
  return {
    type: SET_GARTENS,
    payload: data
  };
}

export function setGarten(data) {
  return {
    type: SET_GARTEN,
    payload: data
  };
}

export const fetchGartens = () => (dispatch) => {
  dispatch(startFetch());
  dispatch(setGartens([]));

  fetch(`${BASE_URL}/gartens`)
    .then((r) => r.json())
    .then((gartens) => {
        dispatch(setGartens(gartens));
        dispatch(endFetch());
    });
};

export const fetchGarten = (id) => (dispatch) => {
  dispatch(startFetch());
  dispatch(setGarten([]));

  fetch(`${BASE_URL}/garten/${id}` )
    .then((r) => r.json())
    .then((garten) => {
        dispatch(setGarten(garten));
        dispatch(endFetch());
    });
};

