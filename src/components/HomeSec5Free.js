import React from "react";
import FreeUser from "../Icons/FreeUser.svg";

function HomeSec5Free() {
  return (
    <div className=" flex flex-col items-center py-4">
      <img src={FreeUser} alt={FreeUser} />
      <div className="flex flex-col items-center">
        <label className="text-2xl text-red-400 my-2"> 10000+</label>
        <label className="text-xl font-sans">Free Users</label>
      </div>
    </div>
  );
}

export default HomeSec5Free;
