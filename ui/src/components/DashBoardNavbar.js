import React, { useState } from "react";
// import { Link } from "react-router-dom";
import CustName from "../Icons/CustName.svg";
import "../style.css";
import { NavLink } from "react-router-dom";
import PopUpUser from "./PopUpUser";

function DashBoardNavbar() {
  // const history = useHistory();
  const [isOpen, setIsOpen] = useState(false);
  const popUpToggle = () => {
    setIsOpen(!isOpen);
  };
  // const onClickDashboard = () => {
  //   history.push("/dashboardScreen");
  // };
  return (
    <nav className="flex justify-between DashBoardNavbar-main">
      <div className="text-3xl text-blue-900 font-semibold p-2 ml-4 ">EDEMS</div>
      <div className="flex justify-between items-center font-sans  ">
        <NavLink
          className="no-underline px-4 text-gray-500 "
          to="/dashboardScreen"
          // onClick={onClickDashboard}
          activeClassName="bg-blue-800 text-white rounded"
        >
          Dashboard
        </NavLink>

        <NavLink className="no-underline px-4 text-gray-500 text-lg  " to="/documents" activeClassName="bg-blue-800 text-white rounded">
          Documents
        </NavLink>

        <NavLink className="no-underline px-4 text-gray-500 text-lg" to="/upload" activeClassName="bg-blue-800 text-white rounded">
          Upload
        </NavLink>

        <NavLink className="no-underline px-4 text-gray-500 text-lg" to="/users" activeClassName="bg-blue-800 text-white rounded">
          Existing Users
        </NavLink>

        <NavLink className="no-underline px-4 text-gray-500 text-lg" to="/newJoinee" activeClassName="bg-blue-800 text-white rounded">
          New Joinees
        </NavLink>
      </div>
      <div className="">
        <div className="flex items-center h-full">
          <div className="text-lg text-blue-600">User</div>
          <div className=" h-full mx-3">
            <img src={CustName} className=" h-full p-1" alt={CustName} onClick={popUpToggle} />
          </div>
        </div>
        {isOpen && <PopUpUser></PopUpUser>}
      </div>
    </nav>
  );
}

export default DashBoardNavbar;
