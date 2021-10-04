import React from "react";
import DashboardLeftPane from "../components/DashboardLeftPane";
import DashBoardNavbar from "../components/DashBoardNavbar";
import DashboardRight from "../components/DashboardRight";

function DashboardScreen() {
  return (
    <div>
      <div>
        <DashBoardNavbar></DashBoardNavbar>
      </div>
      <div className="flex justify-center">
        <div className="bg-gradient-to-r from-gray-100 to-blue-200 mt-4 py-4 w-4/5">
          <div className="flex justify-center items-center">
            <div className="mr-52">
              <DashboardLeftPane></DashboardLeftPane>
            </div>
            <div>
              <div className="mb-5">
                <DashboardRight></DashboardRight>
              </div>
              <div>
                <DashboardRight></DashboardRight>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardScreen;
