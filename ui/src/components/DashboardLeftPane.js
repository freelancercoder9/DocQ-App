import React from "react";
import "../style.css";
import DashboardLeft from "../Icons/DashboardLeft.svg";
import { NavLink } from "react-router-dom";

function DashboardLeftPane() {
  return (
    <div>
      <div className="text-center my-2">
        <label className="text-2xl font-semibold font-mono">Hello User</label>
      </div>
      <div className="flex flex-col items-center bg-white">
        <div className="my-3 mx-3">
          <img src={DashboardLeft} alt={DashboardLeft} />
        </div>
        <div className="text-3xl font-sans my-4">Organisation</div>

        <NavLink
          className=" DashboardLeftPane-btn text-base font-semibold  rounded-xl w-44 p-2 mt-4 text-center no-underline text-black"
          to="/newJoinee"
        >
          New Join Request
        </NavLink>

        <NavLink
          className=" DashboardLeftPane-btn text-base font-semibold  rounded-xl w-44 p-2 mt-3 text-center no-underline text-black"
          to="/users"
        >
          Manage Users
        </NavLink>
        <div className="w-96 my-4 text-center rounded-xl text-white text-lg font-semibold p-2 bg-purple-600">
          Upgrade Plan
        </div>
      </div>
    </div>
  );
}

export default DashboardLeftPane;
