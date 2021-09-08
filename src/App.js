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
import RightSignUp from "./components1/RightSignUp";
import SignUpOrg2 from "./screens/SignUpOrg2";

function App() {
  return (
    <div className="h-full">
      <Router>
        <Switch>
          <Route path="/" component={HomePage} exact={true}></Route>
          <Route path="/signin" component={SignIn} exact={true}></Route>
          <Route path="/signup" component={BeforeSignUp} exact={true}></Route>
          <Route path="/dashboardScreen" component={DashboardScreen} exact={true}></Route>
          <Route path="/signUpIndividual" component={SignUpIndividual} exact={true}></Route>
          <Route path="/signUpOrganisation" component={SignUpOrganisation} exact={true}></Route>
          <Route path="/signUpOrg2" component={SignUpOrg2} exact={true}></Route>
          <Route path="/forgotPwd" component={ForgotPwd} exact={true}></Route>
          <Route path="/homePage" component={HomePage} exact={true}></Route>
          <Route path="/documents" component={GroupFilesScreen} exact={true}></Route>
          <Route path="/upload" component={UploadFiles} exact={true}></Route>
          <Route path="/users" component={ManageUsersScreen} exact={true}></Route>
          <Route path="/newJoinee" component={NewJoinee} exact={true}></Route>
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
      {/* <SignUpOrg2></SignUpOrg2> */}
    </div>
  );
}

export default App;
