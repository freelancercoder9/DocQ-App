import React from "react";
import ManageUserList from "../components1/ManageUserList";
import ManageUsers from "../components1/ManageUsers";
import ManageUsersHeading from "../components1/ManageUsersHeading";

function ManageUsersScreen() {
  return (
    <div>
      <ManageUsers></ManageUsers>
      <ManageUsersHeading></ManageUsersHeading>
      <ManageUserList></ManageUserList>
    </div>
  );
}

export default ManageUsersScreen;
