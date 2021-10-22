import DocListReducer from "./DocListReducer";
import SignUpReducer from "./SignUpReducer";
import SignUpIndReducer from "./SignUpIndReducer";
import SignUpOrgReducer from "./SignUpOrgReducer";
import SignUpOrg2Reducer from "./SignUpOrg2Reducer";
import SelectedFilesReducer from "./SelectedFilesReducer";
import UserListReducer from "./UserListReducer";
import { combineReducers } from "redux";

const rootReducers = combineReducers({
  DocList: DocListReducer,
  account_type: SignUpReducer,
  signUpInd: SignUpIndReducer,
  signUpOrg: SignUpOrgReducer,
  signUpOrg2: SignUpOrg2Reducer,
  selectedFile: SelectedFilesReducer,
  userListReducer: UserListReducer,
});

export default rootReducers;
