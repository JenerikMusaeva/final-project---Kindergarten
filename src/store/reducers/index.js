import { combineReducers } from "redux";
import groupsReducer from "./groupsReducer";
import gartensReducer from "./gartensReducer";
import childrenReducer from "./childrenReducer";



export default combineReducers({
  groups: groupsReducer,
  gartens: gartensReducer,
  children: childrenReducer,
});
