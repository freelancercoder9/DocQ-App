import DocListReducer from "./DocListReducer";
import { combineReducers } from "redux";

const rootReducers = combineReducers({
  DocList: DocListReducer,
  account_type: SignUpReducer,
});

export default rootReducers;
