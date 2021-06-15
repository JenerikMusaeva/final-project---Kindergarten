import { SET_GROUPS } from "../actions/types";
// import { MOCK_GROUPS } from '../mockdata'

let initialState = {
  groups: [],
}

export default function groupsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_GROUPS:
      return {
        ...state,
        groups: action.payload,
      };
      break;

    default:
      return state;
  }
}
