import React from "react";
import DashBoardNavbar from "../components1/DashBoardNavbar";
import ManageUserList from "../components1/ManageUserList";
import ManageUsers from "../components1/ManageUsers";
import ManageUsersHeading from "../components1/ManageUsersHeading";

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
