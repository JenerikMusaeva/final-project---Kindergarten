import {
  SET_CHILDREN,
  FETCH_CHILDREN_FAILURE,
  FETCH_CHILDREN_SUCCESS,
  ADD_CHILD,
  DELETE_CHILD,
  UPDATE_CHILD,
} from "../actions/types";

let initialState = {
  children: {
    error: null,
    value: [],
  },
};

export default function childrenReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CHILDREN:
      return {
        ...state,
        children: { ...state.children, error: null },
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

    case DELETE_CHILD:
      return {
        ...state,
        children: { ...state.children, value: action.payload },
      };

    case UPDATE_CHILD:
      return {
        ...state,
        children: { ...state.children, value: action.payload },
      };

    default:
      return state;
  }
}
