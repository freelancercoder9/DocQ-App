import React from "react";

function GrpFilesRight() {
  return (
    <div className="h-full">
      <div className="w-2/5 h-full">
        <div className=" h-12  border-2 border-gray-500 rounded-sm  flex justify-center items-center my-3">
          <div className="border-r-2 border-gray-500 pr-5">
            <label className="text-lg ">File Name</label>
          </div>
          <div className="pl-5">
            <label className="text-lg">From user</label>
          </div>
        </div>
        <div className="h-4/5 border-2 border-black"></div>
        <div className=" flex items-center justify-between my-4 absolute bottom-0 w-2/5">
          <button className="text-white text-xl bg-blue-600 w-3/12 p-1 rounded-sm">
            Approve
          </button>
          <button className="text-white text-xl bg-red-600 w-3/12 p-1 rounded-sm">
            Reject
          </button>
          <button className="text-blue-900 text-xl bg-pink-300 w-3/12 p-1 rounded-sm">
            Exit Preview
          </button>
        </div>
      </div>
    </div>
  );
}

export default GrpFilesRight;
