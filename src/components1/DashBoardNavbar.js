import React from "react";
import { Link } from "react-router-dom";
import CustName from "../Icons/CustName.svg";
import "../style.css";

function DashBoardNavbar() {
  return (
    <nav className="flex justify-between DashBoardNavbar-main">
      <div className="text-2xl text-blue-900 font-semibold p-2 ml-4 ">
        DocTrin
      </div>
      <div className="flex justify-between items-center font-sans  ">
        <Link className="no-underline px-4 text-gray-500 text-lg  hover:bg-blue-800 hover:text-white">
          Dashboard
        </Link>
        <Link className="no-underline px-4 text-gray-500 text-lg  hover:bg-blue-800 hover:text-white">
          Documents
        </Link>
        <Link className="no-underline px-4 text-gray-500 text-lg  hover:bg-blue-800 hover:text-white">
          Upload
        </Link>
        <Link className="no-underline px-4 text-gray-500 text-lg  hover:bg-blue-800 hover:text-white">
          Users
        </Link>
        <Link className="no-underline px-4 text-gray-500 text-lg  hover:bg-blue-800 hover:text-white">
          New Joins
        </Link>
      </div>
      <div className="flex items-center">
        <div className="text-lg text-blue-600">User</div>
        <div className=" h-full mx-3">
          <img src={CustName} className=" h-full" />
        </div>
      </div>
    </nav>
  );
}

export default DashBoardNavbar;
