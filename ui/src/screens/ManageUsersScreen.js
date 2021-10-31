import React from "react";
import DashBoardNavbar from "../components/DashBoardNavbar";
import ManageUserList from "../components/ManageUserList";
import ManageUsersHeading from "../components/ManageUsersHeading";
import { useSelector } from "react-redux";

function ManageUsersScreen() {
  const userListObj = useSelector((state) => state.userListReducer);

  return (
    <div>
      <DashBoardNavbar></DashBoardNavbar>
      <ManageUsersHeading></ManageUsersHeading>
      {userListObj.existingUsers.map((item, index) => {
        return <ManageUserList userData={item} key={index}></ManageUserList>;
      })}
    </div>
  );
}

export default ManageUsersScreen;
