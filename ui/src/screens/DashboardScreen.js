import React from "react";
import DashboardLeftPane from "../components/DashboardLeftPane";
import DashBoardNavbar from "../components/DashBoardNavbar";
import DashboardRight from "../components/DashboardRight";
import { useSelector } from "react-redux";

function DashboardScreen() {
  const approvedUsersCount = useSelector((state) => state.userListReducer.approvedUsersCount);
  const pendingUsersCount = useSelector((state) => state.userListReducer.pendingUsersCount);
  const rejectedUsersCount = useSelector((state) => state.userListReducer.rejectedUsersCount);
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
                <DashboardRight headerName={"Files Status"} approvedCount={10} pendingCount={10} rejectedCount={10}></DashboardRight>
              </div>
              <div>
                <DashboardRight
                  headerName={"Users Status"}
                  approvedCount={approvedUsersCount}
                  pendingCount={pendingUsersCount}
                  rejectedCount={rejectedUsersCount}
                ></DashboardRight>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardScreen;
