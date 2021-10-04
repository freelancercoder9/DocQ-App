import React from "react";
import searchIcon from "../Icons/searchIcon.svg";

function NewJoineeSearch() {
  return (
    <div>
      <div className="flex justify-end px-5 py-3 items-center">
        <img src={searchIcon} className="w-6 mr-5" alt={searchIcon} />
        <label className="text-xl text-gray-400">Search Users</label>
      </div>
    </div>
  );
}

export default NewJoineeSearch;
