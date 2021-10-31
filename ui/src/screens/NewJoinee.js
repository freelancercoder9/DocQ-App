import React from "react";
import DashBoardNavbar from "../components/DashBoardNavbar";
import NewJoineeHeading from "../components/NewJoineeHeading";
import NewJoineeList from "../components/NewJoineeList";

import { useSelector } from "react-redux";

function NewJoinee() {
  const userListObj = useSelector((state) => state.userListReducer);

  return (
    <div>
      <DashBoardNavbar></DashBoardNavbar>
      <NewJoineeHeading></NewJoineeHeading>
      {userListObj.newJoinUsers.map((item, index) => {
        return <NewJoineeList userData={item} key={index}></NewJoineeList>;
      })}
    </div>
  );
}

export default NewJoinee;
