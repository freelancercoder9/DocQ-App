import React from "react";
import SettingsIcon from "../Icons/SettingsIcon.svg";

function ManageUserList(props) {
  return (
    <div>
      <div className="bg-red-50 flex justify-around items-center">
        <div className="border-r-2 border-gray-300 w-1/6 flex items-center justify-center">
          <label className=" text-lg">{props.userData.first_name}</label>
        </div>
        <div className="border-r-2 border-gray-300 w-1/6 flex items-center justify-center">
          <label className=" text-lg">{props.userData.email}</label>
        </div>
        <div className="border-r-2 border-gray-300 w-1/6 flex items-center justify-center">
          <label className=" text-lg">{props.userData.status}</label>
        </div>
        <div className="border-r-2 border-gray-300 w-1/6 flex items-center justify-center">
          <label className=" text-lg">{props.userData.role}</label>
        </div>
        <div className="border-r-2 border-gray-300 w-1/6 flex items-center justify-center">
          <label className=" text-lg">{props.userData.mobile_no}</label>
        </div>
        <div className="border-r-2 border-gray-300 w-1/6 flex items-center justify-center">
          <img
            src={SettingsIcon}
            className="w-6 py-2 cursor-pointer"
            alt={SettingsIcon}
          />
        </div>
      </div>
    </div>
  );
}

export default ManageUserList;
