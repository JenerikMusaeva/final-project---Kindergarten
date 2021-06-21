import {
  ADD_GROUP,
  DELETE_GROUP,
  FETCH_GROUPS_FAILURE,
  FETCH_GROUPS_START,
  FETCH_GROUPS_SUCCESS,
  FETCH_GROUP_FAILURE,
  FETCH_GROUP_START,
  FETCH_GROUP_SUCCESS,
} from "../actions/types";

let initialState = {
  groups: {
    loading: false,
    error: null,
    value: [],
  },

  activeGroup: {
    loading: false,
    error: null,
    value: [],
  },
};

export default function groupsReducer(state = initialState, action) {
  switch (action.type) {
    // groups ////////////////////////////

    case FETCH_GROUPS_START:
      return {
        ...state,
        groups: { ...state.groups, loading: true, error: null },
      };

    case FETCH_GROUPS_FAILURE:
      return {
        ...state,
        groups: { ...state.groups, error: action.payload, loading: false },
      };

    case FETCH_GROUPS_SUCCESS:
      return {
        ...state,
        groups: { ...state.groups, value: action.payload, loading: false },
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

    // group ////////////////////////////

    case FETCH_GROUP_START:
      return {
        ...state,
        activeGroup: { ...state.activeGroup, loading: true, error: null },
      };

    case FETCH_GROUP_FAILURE:
      return {
        ...state,
        activeGroup: {
          ...state.activeGroup,
          error: action.payload,
          loading: false,
        },
      };

    case FETCH_GROUP_SUCCESS:
      return {
        ...state,
        activeGroup: {
          ...state.activeGroup,
          value: action.payload,
          loading: false,
        },
      };

    default:
      return state;
  }
}
