import {
  ADD_GROUP,
  DELETE_GROUP,
  SET_GROUPS,
  FETCH_GROUPS_FAILURE,
  FETCH_GROUPS_SUCCESS,
  UPDATE_GROUP,
  SELECT_GROUP,
} from "../actions/types";

let initialState = {
  groups: [],
  error: null,
  selectedGroup: null,
};

export default function groupsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_GROUPS:
      return {
        ...state,
        groups: action.payload,
      };

    case FETCH_GROUPS_SUCCESS:
      return {
        ...state,
        error: action.payload,
      };

    case FETCH_GROUPS_FAILURE:
      return {
        ...state,
        error: action.payload,
      };

    case SELECT_GROUP:
      return {
        ...state,
        selectedGroup: action.payload,
      };

    case ADD_GROUP:
      return {
        ...state,
        groups: action.payload,
      };

    case DELETE_GROUP:
      return {
        ...state,
        groups: action.payload,
      };

    case UPDATE_GROUP:
      return {
        ...state,
        groups: action.payload,
      };

    default:
      return state;
  }
}
