import {
  SET_GROUPS,
  ADD_GROUP,
  FETCH_GROUPS_SUCCESS,
  FETCH_GROUPS_FAILURE,
  FETCH_GROUPS_START,
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

export const addNewGroupAction = (data) => {
  return {
    type: ADD_GROUP,
    payload: data,
  };
};
