import DocListReducer from "./DocListReducer";
import { combineReducers } from "redux";

const rootReducers = combineReducers({
  DocList: DocListReducer,
});

export default rootReducers;
