import BeforeSignUp from "./screens/BeforeSignUp";
import SignUpIndividual from "./screens/SignUpIndividual";
import SignUpOrganisation from "./screens/SignUpOrganisation";
import SignIn from "./screens/SignIn";
import ForgotPwd from "./screens/ForgotPwd";
import UploadFiles from "./screens/UploadFiles";
import ShareFiles from "./screens/ShareFiles";
import UserSettings from "./screens/UserSettings";
import NewJoinee from "./screens/NewJoinee";
import ManageUsersScreen from "./screens/ManageUsersScreen";
import GroupFilesScreen from "./screens/GroupFilesScreen";
import RejectedFilesScreen from "./screens/RejectedFilesScreen";
import DashboardScreen from "./screens/DashboardScreen";
import HomePage from "./screens/HomePage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="h-full">
      <Router>
        <Switch>
          <Route path="/" component={HomePage} exact={true}></Route>
          <Route path="/signin" component={SignIn} exact={true}></Route>
          <Route path="/signup" component={BeforeSignUp} exact={true}></Route>
        </Switch>
      </Router>
      {/* <BeforeSignUp></BeforeSignUp> */}
      {/* <SignUpIndividual></SignUpIndividual> */}
      {/* <SignUpOrganisation></SignUpOrganisation> */}
      {/* <SignIn></SignIn> */}
      {/* <ForgotPwd></ForgotPwd> */}
      {/* <UploadFiles></UploadFiles> */}
      {/* <ShareFiles></ShareFiles> */}
      {/* <UserSettings></UserSettings> */}
      {/* <NewJoinee></NewJoinee> */}
      {/* <ManageUsersScreen></ManageUsersScreen> */}
      {/* <GroupFilesScreen></GroupFilesScreen> */}
      {/* <RejectedFilesScreen></RejectedFilesScreen> */}
      {/* <DashboardScreen></DashboardScreen> */}
      {/* <HomePage></HomePage> */}
    </div>
  );
}

export default App;
