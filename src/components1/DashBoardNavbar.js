import React from "react";
import { Link } from "react-router-dom";
import CustName from "../Icons/CustName.svg";
import "../style.css";
import { NavLink } from "react-router-dom";

function DashBoardNavbar() {
  return (
    <nav className="flex justify-between DashBoardNavbar-main">
      <div className="text-3xl text-blue-900 font-semibold p-2 ml-4 ">
        DocTrin
      </div>
      <div className="flex justify-between items-center font-sans  ">
        <NavLink
          className="no-underline px-4 text-gray-500 text-lg  hover:bg-blue-800 hover:text-white "
          to="/dashboardScreen"
        >
          Dashboard
        </NavLink>

        <NavLink
          className="no-underline px-4 text-gray-500 text-lg  hover:bg-blue-800 hover:text-white "
          to="/documents"
        >
          Documents
        </NavLink>

        <NavLink
          className="no-underline px-4 text-gray-500 text-lg  hover:bg-blue-800 hover:text-white "
          to="/upload"
        >
          Upload
        </NavLink>

        <NavLink
          className="no-underline px-4 text-gray-500 text-lg  hover:bg-blue-800 hover:text-white "
          to="/users"
        >
          Users
        </NavLink>

        <NavLink
          className="no-underline px-4 text-gray-500 text-lg  hover:bg-blue-800 hover:text-white "
          to="/newJoinee"
        >
          New Joinees
        </NavLink>
      </div>
      <div className="flex items-center">
        <div className="text-lg text-blue-600">User</div>
        <div className=" h-full mx-3">
          <img src={CustName} className=" h-full p-1" />
        </div>
      </div>
    </nav>
  );
}

export default DashBoardNavbar;
