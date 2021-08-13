import React from "react";
import ApprovedUserfiles from "../Icons/ApprovedUserfiles.svg";
import PendingUser from "../Icons/PendingUser.svg";
import DeniedUser from "../Icons/DeniedUser.svg";

function DashboardRight() {
  return (
    <div>
      <div className="w-1/5 border border-black">
        <div className="flex justify-center items-center">
          <label className="mt-2 text-lg">Files Status</label>
        </div>
        <hr />
        <div className="flex justify-between px-4 my-3">
          <div className="h-full flex ">
            <img src={ApprovedUserfiles} className="h-full mr-2" />
            <div className="text-lg font-sans">Approved</div>
          </div>
          <div className="h-6 w-14 bg-green-500 text-center text-white">
            258
          </div>
        </div>
        <div className="flex justify-between px-4 my-3">
          <div className="h-full flex ">
            <img src={PendingUser} className="h-full mr-2" />
            <div className="text-lg font-sans">Pending</div>
          </div>
          <div className="h-6 w-14 bg-purple-500 text-center text-white">
            258
          </div>
        </div>
        <div className="flex justify-between px-4 my-3">
          <div className="h-full flex ">
            <img src={DeniedUser} className="h-full mr-2" />
            <div className="text-lg font-sans">Denied</div>
          </div>
          <div className="h-6 w-14 bg-red-500 text-center text-white">258</div>
        </div>
      </div>
    </div>
  );
}

export default DashboardRight;
