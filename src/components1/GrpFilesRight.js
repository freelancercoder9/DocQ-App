import React from "react";

function GrpFilesRight() {
  return (
    <div className="  bg-gray-300">
      <div className="h-full">
        <div className=" h-12  border-2 border-gray-500 rounded-sm  flex justify-center items-center mb-3 ">
          <div className="border-r-2 border-gray-500 pr-5">
            <label className="text-lg ">File Name</label>
          </div>
          <div className="pl-5">
            <label className="text-lg">From user</label>
          </div>
        </div>
        <div className=" border-2 border-gray-500"></div>

        <div
          className=" flex justify-between items-center my-4"
          style={{ position: "relative", bottom: 0, clear: "both" }}
        >
          <button className="text-white text-xl bg-blue-600  py-1 px-5 rounded-sm">
            Approve
          </button>
          <button className="text-white text-xl bg-red-600 py-1 px-5 rounded-sm">
            Reject
          </button>
          <button className="text-blue-900 text-xl bg-pink-300 py-1 px-4 rounded-sm">
            Exit Preview
          </button>
        </div>
      </div>
    </div>
  );
}

export default GrpFilesRight;
