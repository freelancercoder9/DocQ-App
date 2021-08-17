import React from "react";
import DashboardLeftPane from "../components1/DashboardLeftPane";
import DashBoardNavbar from "../components1/DashBoardNavbar";
import DashboardRight from "../components1/DashboardRight";

function DashboardScreen() {
  return (
    <div>
      <DashBoardNavbar></DashBoardNavbar>
      <div className="flex justify-around">
        <DashboardLeftPane></DashboardLeftPane>
        <DashboardRight></DashboardRight>
      </div>
    </div>
  );
}

export default DashboardScreen;
