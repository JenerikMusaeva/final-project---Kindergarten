import { BASE_URL } from "../constants/url";
import {
  ADD_CHILD,
  FETCH_CHILDREN_FAILURE,
  FETCH_CHILDREN_SUCCESS,
  SET_CHILDREN,
  DELETE_CHILD,
  UPDATE_CHILD,
  VISIT_CHILDREN,
  REPORT_CHILDREN,
} from "./types";
import { fetchEnd, fetchStart } from "./appstate";

export function setChildren(payload) {
  return {
    type: SET_CHILDREN,
    payload,
  };
}

export function fetchChildrenSuccess(payload) {
  return {
    type: FETCH_CHILDREN_SUCCESS,
    payload,
  };
}

export function fetchChildrenFailure(payload) {
  return {
    type: FETCH_CHILDREN_FAILURE,
    payload,
  };
}

export const fetchChildren = () => (dispatch) => {
  dispatch(fetchStart());
  fetch(`${BASE_URL}/child/`)
    .then((r) => r.json())
    .then((children) => {
      dispatch(setChildren(children));
      dispatch(fetchChildrenSuccess(children));
      dispatch(fetchEnd());
    })
    .catch((error) => {
      dispatch(fetchChildrenFailure(error.message));
      dispatch(fetchEnd());
    });
};

export const addChildAction = (payload) => {
  return {
    type: ADD_CHILD,
    payload,
  };
};

export const deleteChildAction = (id) => {
  return {
    type: DELETE_CHILD,
    payload: id,
  };
};

export const deleteChild = (id) => (dispatch) => {
  dispatch(fetchStart());
  const req = {
    method: "DELETE",
  };
  fetch(`${BASE_URL}/child/${id}`, req)
    .then((r) => r.json())
    .then((id) => {
      dispatch(deleteChildAction(id));
      dispatch(fetchEnd());
    })
    .catch((error) => {
      dispatch(fetchChildrenFailure(error.message));
      dispatch(fetchEnd());
    });
};

export const visitChildrenAction = (payload) => {
  return {
    type: VISIT_CHILDREN,
    payload,
  };
}

export const reportChildrenAction = (payload) => {
  return {
    type: REPORT_CHILDREN,
    payload,
  };
}



