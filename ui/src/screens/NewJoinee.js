import React from "react";
import DashBoardNavbar from "../components/DashBoardNavbar";
import NewJoineeHeading from "../components/NewJoineeHeading";
import NewJoineeList from "../components/NewJoineeList";
import NewJoineeSearch from "../components/NewJoineeSearch";

function NewJoinee() {
  return (
    <div>
      <DashBoardNavbar></DashBoardNavbar>
      <NewJoineeHeading></NewJoineeHeading>
      <NewJoineeList></NewJoineeList>
    </div>
  );
}

export default NewJoinee;
