import React from "react";
import "../style.css";
import DashboardLeft from "../Icons/DashboardLeft.svg";

function DashboardLeftPane() {
  return (
    <div className="flex flex-col items-center w-2/5">
      <div className="my-3">
        <img src={DashboardLeft} />
      </div>
      <div className="text-3xl font-sans my-4">Organisation</div>
      <div className=" DashboardLeftPane-btn text-base font-semibold  rounded-xl w-44 p-2 mt-4 text-center">
        New Join Request
      </div>
      <div className=" DashboardLeftPane-btn text-base font-semibold  rounded-xl w-44 p-2 mt-3 text-center">
        Manage Users
      </div>
      <div className="w-96 my-4 text-center rounded-xl text-white text-lg font-semibold p-2 bg-purple-600">
        Upgrade Plan
      </div>
    </div>
  );
}

export default DashboardLeftPane;
