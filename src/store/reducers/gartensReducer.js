import {
  FETCH_GARTENS_SUCCESS,
  FETCH_GARTENS_FAILURE,
  FETCH_GARTENS_START,
  FETCH_GARTEN_START,
  FETCH_GARTEN_FAILURE,
  FETCH_GARTEN_SUCCESS,
} from "../actions/types";

let initialState = {
  gartens: {
    loading: false,
    error: null,
    value: [],
  },

  activeGarten: {
    loading: false,
    error: null,
    value: [],
  },
};

export default function gartensReducer(state = initialState, action) {
  switch (action.type) {

    case FETCH_GARTENS_START:
      return {
        ...state,
        gartens: { ...state.gartens, loading: true, error: null },
      };

    case FETCH_GARTENS_FAILURE:
      return {
        ...state,
        gartens: { ...state.gartens, error: action.payload, loading: false },
      };

    case FETCH_GARTENS_SUCCESS:
      return {
        ...state,
        gartens: { ...state.gartens, value: action.payload, loading: false },
      };

    // garten ////////////////////////////

    case FETCH_GARTEN_START:
      return {
        ...state,
        activeGarten: { ...state.activeGarten, loading: true, error: null },
      };

    case FETCH_GARTEN_FAILURE:
      return {
        ...state,
        activeGarten: {
          ...state.activeGarten,
          error: action.payload,
          loading: false,
        },
      };

    case FETCH_GARTEN_SUCCESS:
      return {
        ...state,
        activeGarten: {
          ...state.activeGarten,
          value: action.payload,
          loading: false,
        },
      };

    default:
      return state;
  }
}
