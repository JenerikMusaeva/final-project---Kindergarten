import {
  FETCH_CHILDREN_FAILURE,
  FETCH_CHILDREN_START,
  FETCH_CHILDREN_SUCCESS,
  ADD_CHILD
} from "../actions/types";

let initialState = {
  children: {
    loading: false,
    error: null,
    value: [],
  },
};

export default function childrenReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_CHILDREN_START:
      return {
        ...state,
        children: { ...state.children, loading: true, error: null },
      };

    case FETCH_CHILDREN_FAILURE:
      return {
        ...state,
        children: { ...state.children, error: action.paylaod, loading: false },
      };

    case FETCH_CHILDREN_SUCCESS:
      return {
        ...state,
        children: { ...state.children, value: action.payload, loading: false },
      };

    case ADD_CHILD:
      return {
        ...state,
        children: { ...state.children, value: action.payload },
      };

    default:
      return state;
  }
}
