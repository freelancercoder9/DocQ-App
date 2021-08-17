import React from "react";
import NewJoineeHeading from "../components1/NewJoineeHeading";
import NewJoineeList from "../components1/NewJoineeList";
import NewJoineeSearch from "../components1/NewJoineeSearch";

function NewJoinee() {
  return (
    <div>
      <NewJoineeSearch></NewJoineeSearch>
      <NewJoineeHeading></NewJoineeHeading>
      <NewJoineeList></NewJoineeList>
    </div>
  );
}

export default NewJoinee;
