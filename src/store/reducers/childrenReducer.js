import {
  SET_CHILDREN,
  FETCH_CHILDREN_FAILURE,
  FETCH_CHILDREN_SUCCESS,
  ADD_CHILD,
  DELETE_CHILD,
  UPDATE_CHILD,
  VISIT_CHILDREN,
  REPORT_CHILDREN,
  REPORT_CHILDREN_FAILURE
} from "../actions/types";

let initialState = {
  children: [],
  error: false,
  visitChildren:[],
};

export default function childrenReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CHILDREN:
      return {
        ...state,
        children: action.payload,
      };

    case FETCH_CHILDREN_SUCCESS:
      return {
        ...state,
        error: null,
      };

    case FETCH_CHILDREN_FAILURE:
      return {
        ...state,
        error: action.payload,
      };

    case ADD_CHILD:
      return {
        ...state,
        children: [...state.children, action.payload],
      };

    case VISIT_CHILDREN:
      return {
        ...state,
        visitChildren: [...state.visitChildren, action.payload],
      };

      case REPORT_CHILDREN:
      return {
        ...state,
        visitChildren: [...state.visitChildren, action.payload],
      };

      case REPORT_CHILDREN_FAILURE:
      return {
        ...state,
        error: action.payload,
      };

    case DELETE_CHILD:
      return {
        ...state,
        children: action.payload,
      };

    case UPDATE_CHILD:
      return {
        ...state,
        children: action.payload,
      };

    default:
      return state;
  }
}
