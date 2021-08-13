import React from "react";
import BackArrow from "../Icons/BackArrow.svg";

function ManageUsers() {
  return (
    <div className="">
      <nav className="flex items-center justify-between">
        <div className="flex">
          <img src={BackArrow} className=" mx-3" />
          <label className="text-2xl"> Manage Users</label>
        </div>
        <div className="border border-black w-56 p-1 rounded-md bg-white flex justify-evenly items-center mr-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <label className="text-xl text-gray-400">Search Users</label>
        </div>
      </nav>
    </div>
  );
}

export default ManageUsers;
