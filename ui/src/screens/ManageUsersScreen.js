import React from "react";
import DashBoardNavbar from "../components/DashBoardNavbar";
import ManageUserList from "../components/ManageUserList";
import ManageUsers from "../components/ManageUsers";
import ManageUsersHeading from "../components/ManageUsersHeading";
import { useSelector } from "react-redux";

function ManageUsersScreen() {
  const userListObj = useSelector((state) => state.userListReducer);

  var dataUsers = [
    {
      _id: "616fc45ff1c715a626db7c27",
      organisation_id: 1234,
      first_name: "test1@12345",
      last_name: "abc1@12345",
      mobile_no: "9237882257",
      email: "test1@gmail.com",
      password: "$2b$10$TM1dVIKPHCbKv862Fx6iYuEbrurWkEWhIwgVHUd2KoS8xOfYQ/Pn.",
      role: "admin",
      status: "pending",
      created_timestamp: "2021-10-20T07:25:19.348Z",
      __v: 0,
    },
  ];
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
