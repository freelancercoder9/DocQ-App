import React from "react";
import DashBoardNavbar from "../components/DashBoardNavbar";
import ManageUserList from "../components/ManageUserList";
import ManageUsers from "../components/ManageUsers";
import ManageUsersHeading from "../components/ManageUsersHeading";

function ManageUsersScreen() {
  return (
    <div>
      <DashBoardNavbar></DashBoardNavbar>
      <ManageUsersHeading></ManageUsersHeading>
      <ManageUserList></ManageUserList>
    </div>
  );
}

export default ManageUsersScreen;
