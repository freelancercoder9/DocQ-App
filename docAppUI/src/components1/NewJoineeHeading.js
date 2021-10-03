import React from "react";

function NewJoineeHeading() {
  return (
    <div>
      <div className="bg-purple-500 flex justify-around items-center ">
        <div className="border-r-2 border-gray-600 w-1/6 flex items-center justify-center">
          <label className="text-white text-lg ">Username</label>
        </div>
        <div className="border-r-2 border-gray-600 w-1/6 flex items-center justify-center">
          <label className="text-white text-lg">Email ID</label>
        </div>
        <div className="border-r-2 border-gray-600 w-1/6 flex items-center justify-center">
          <label className="text-white text-lg">Phone No.</label>
        </div>
        <div className="border-r-2 border-gray-600 w-1/6 flex items-center justify-center">
          <label className="text-white text-lg">Role</label>
        </div>
        <div className=" w-1/6 flex items-center justify-center">
          <label className="text-white text-lg py-2">Decision</label>
        </div>
      </div>
    </div>
  );
}

export default NewJoineeHeading;
