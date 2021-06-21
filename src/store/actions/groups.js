import {
  ADD_GROUP,
  DELETE_GROUP,
  FETCH_GROUPS_SUCCESS,
  FETCH_GROUPS_FAILURE,
  FETCH_GROUPS_START,
  FETCH_GROUP_START,
  FETCH_GROUP_FAILURE,
  FETCH_GROUP_SUCCESS,
} from "./types";
import { BASE_URL } from "../constants/url";

export function fetchGroupsStart() {
  return {
    type: FETCH_GROUPS_START,
  };
}

export function fetchGroupsFailure(payload) {
  return {
    type: FETCH_GROUPS_FAILURE,
    payload,
  };
}

export function fetchGroupsSuccess(payload) {
  return {
    type: FETCH_GROUPS_SUCCESS,
    payload,
  };
}

export const fetchGroups = () => (dispatch) => {
  dispatch(fetchGroupsStart());

  fetch(`${BASE_URL}/group/`)
    .then((r) => r.json())
    .then((groups) => {
      dispatch(fetchGroupsSuccess(groups));
    })
    .catch((error) => {
      dispatch(fetchGroupsFailure(error.message));
    });
};

export const addGroupAction = (data) => {
  return {
    type: ADD_GROUP,
    payload: data,
  };
};

// group ///////////////////

export function fetchGroupStart() {
  return {
    type: FETCH_GROUP_START,
  };
}

export function fetchGroupFailure(payload) {
  return {
    type: FETCH_GROUP_FAILURE,
    payload,
  };
}

export function fetchGroupSuccess(payload) {
  return {
    type: FETCH_GROUP_SUCCESS,
    payload,
  };
}

export const fetchGroup = (id) => (dispatch) => {
  dispatch(fetchGroupStart());

  fetch(`${BASE_URL}/garden/${id}`)
    .then((r) => r.json())
    .then((garten) => {
      dispatch(fetchGroupSuccess(garten));
    })
    .catch((error) => {
      dispatch(fetchGroupFailure(error.message));
    });
};
