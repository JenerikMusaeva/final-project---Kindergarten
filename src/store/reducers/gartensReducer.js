import { SET_GARTENS, SET_GARTEN } from "../actions/types";

let initialState = {
  gartens: [],
  activeGarten: null,
}

export default function gartensReducer(state = initialState, action) {
  switch (action.type) {
    case SET_GARTENS:
      return {
        ...state,
        gartens: action.payload,
      };

      case SET_GARTEN:
      return {
        ...state,
        ctiveGarten: action.payload,
      };

    default:
      return state;
  }
}
