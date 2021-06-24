import { BASE_URL } from "../constants/url";
import {
  SET_GROUPS,
  FETCH_GROUPS_SUCCESS,
  FETCH_GROUPS_FAILURE,
  ADD_GROUP,
  DELETE_GROUP,
  UPDATE_GROUP,
  SELECT_GROUP,
} from "./types";
import { fetchEnd, fetchStart } from "./appstate";

export function setGroups(payload) {
  return {
    type: SET_GROUPS,
    payload,
  };
}

export function fetchGroupsSuccess(payload) {
  return {
    type: FETCH_GROUPS_SUCCESS,
    payload,
  };
}

export function fetchGroupsFailure(payload) {
  return {
    type: FETCH_GROUPS_FAILURE,
    payload,
  };
}

export const fetchGroups = () => (dispatch) => {
  dispatch(fetchStart());
  fetch(`${BASE_URL}/group/`)
    .then((r) => r.json())
    .then((groups) => {
      dispatch(setGroups(groups));
      dispatch(fetchGroupsSuccess(groups));
      dispatch(fetchEnd());
    })
    .catch((error) => {
      dispatch(fetchGroupsFailure(error.message));
      dispatch(fetchEnd());
    });
};

export const addGroupAction = (data) => {
  return {
    type: ADD_GROUP,
    payload: data,
  };
};

export const deleteGroupAction = (id) => {
  return {
    type: DELETE_GROUP,
    payload: id,
  };
};

export const deleteGroup = (id) => (dispatch) => {
  dispatch(fetchStart());

  const req = {
    // mode: "no-cors",
    method: "DELETE",
  };

  fetch(`${BASE_URL}/group/${id}`, req)
    .then((r) => r.json())
    .then((id) => {
      dispatch(deleteGroupAction(id));
      dispatch(fetchEnd());
    })
    .catch((error) => {
      dispatch(fetchGroupsFailure(error.message));
      dispatch(fetchEnd());
    });
};

export function selectGroupAction(data) {
  return {
    type: SELECT_GROUP,
    payload: data,
  };
}

export const selectGroup = (data) => (dispatch) => {
  dispatch(fetchStart());
  dispatch(selectGroupAction(data));
  dispatch(fetchEnd());
};
