import {
  SET_GARTENS,
  FETCH_GARTENS_SUCCESS,
  FETCH_GARTENS_FAILURE,
  SELECT_GARTEN,
} from "../actions/types";

let initialState = {
  gartens: {
    error: null,
    value: [],
  },
  selectedGarten: null,
};

export default function gartensReducer(state = initialState, action) {
  switch (action.type) {
    case SET_GARTENS:
      return {
        ...state,
        gartens: { ...state.gartens, value: action.payload },
      };

    case FETCH_GARTENS_SUCCESS:
      return {
        ...state,
        gartens: { ...state.gartens, error: null },
      };

    case FETCH_GARTENS_FAILURE:
      return {
        ...state,
        gartens: { ...state.gartens, error: action.payload },
      };

      case SELECT_GARTEN:
        return{
          ...state,
          selectedGarten: action.payload, 
        }

    default:
      return state;
  }
}
