import React from "react";
import VipUsersIcon from "../Icons/VipUsersIcon.svg";

function HomeSec5() {
  return (
    <div className=" flex flex-col items-center py-4">
      <img src={VipUsersIcon} alt={VipUsersIcon} />
      <div className="flex flex-col items-center">
        <label className="text-2xl text-red-400 my-2"> 10000+</label>
        <label className="text-xl font-sans">VIP Users</label>
      </div>
    </div>
  );
}

export default HomeSec5;
