import DocListReducer from "./DocListReducer";
import SignUpReducer from "./SignUpReducer";
import SignUpIndReducer from "./SignUpIndReducer";
import SignUpOrgReducer from "./SignUpOrgReducer";
import { combineReducers } from "redux";

const rootReducers = combineReducers({
  DocList: DocListReducer,
  account_type: SignUpReducer,
  signUpInd: SignUpIndReducer,
  signUpOrg: SignUpOrgReducer,
});

export default rootReducers;
