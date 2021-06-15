import { SET_GROUPS, ADD_GROUP } from "./types";
import { BASE_URL } from '../constants/url'

import { startFetch, endFetch } from './appstate'

export function setGroups(data) {
  return {
    type: SET_GROUPS,
    payload: data
  };
}

export const fetchGroups = () => (dispatch) => {
  dispatch(startFetch());
  dispatch(setGroups([]));

  fetch(BASE_URL)
    .then((r) => r.json())
    .then((groups) => {
        dispatch(setGroups(groups));
        dispatch(endFetch());
    });
};

export const addNewGroupAction = (data) => {
  return{
    type: ADD_GROUP,
    payload: data,
  }
}