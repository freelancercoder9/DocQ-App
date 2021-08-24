import React from "react";

function GrpFilesRight() {
  return (
    <div className="h-full flex flex-col">
      <div className=" h-12  border-2  rounded-sm  flex justify-center items-center mb-3 ">
        <div className="border-r-2  pr-5">
          <label className="text-lg ">File Name</label>
        </div>
        <div className="pl-5">
          <label className="text-lg">From user</label>
        </div>
      </div>
      <div className="flex flex-1 flex-col border-2 "></div>

      <div className="flex justify-between items-center my-4">
        <button className="text-white text-xl bg-blue-600  py-1 px-5 rounded-md">
          Approve
        </button>
        <button className="text-white text-xl bg-red-600 py-1 px-5 rounded-md">
          Reject
        </button>
      </div>
    </div>
  );
}

export default GrpFilesRight;
