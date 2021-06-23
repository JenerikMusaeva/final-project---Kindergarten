import { FETCH_START, FETCH_END } from "../actions/types";

let initialState = {
  loading: false,
}
export default function appstateReducer(state=initialState, action) {

  switch (action.type) {

    case FETCH_START:
      return {
        ...state,
        loading: true,
      };

      case FETCH_END:
      return {
        ...state,
        loading: false,
      };

      default:
      return state;
    }
}