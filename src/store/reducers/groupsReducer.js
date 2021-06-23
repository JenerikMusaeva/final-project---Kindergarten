import {
  ADD_GROUP,
  DELETE_GROUP,
  SET_GROUPS,
  FETCH_GROUPS_FAILURE,
  FETCH_GROUPS_SUCCESS,
  UPDATE_GROUP,
} from "../actions/types";

let initialState = {
  groups: {
    error: null,
    value: [],
  },

  selectedGroup: null,
};

export default function groupsReducer(state = initialState, action) {
  switch (action.type) {
    
    case SET_GROUPS:
      return {
        ...state,
        groups: { ...state.groups, error: null },
      };

    case FETCH_GROUPS_SUCCESS:
      return {
        ...state,
        groups: { ...state.groups, value: action.payload },
      };

    case FETCH_GROUPS_FAILURE:
      return {
        ...state,
        groups: { ...state.groups, error: action.payload },
      };

    case ADD_GROUP:
      return {
        ...state,
        groups: { ...state.groups, value: action.payload },
      };

    case DELETE_GROUP:
      return {
        ...state,
        groups: { ...state.groups, value: action.payload },
      };

    case UPDATE_GROUP:
      return {
        ...state,
        groups: { ...state.groups, value: action.payload },
      };

    default:
      return state;
  }
}
