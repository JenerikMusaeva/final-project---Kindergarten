import { SET_CHILDREN } from "../actions/types";

let initialState = {
  children: [],
}

export default function childrenReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CHILDREN:
      return {
        ...state,
        children: action.payload,
      };
      break;

    default:
      return state;
  }
}
