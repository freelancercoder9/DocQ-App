import React, { useState } from "react";
import SettingsIcon from "../Icons/SettingsIcon.svg";
import UserSettingsPopUp from "../screens/UserSettingsPopUp";

function ManageUserList() {
  const [isOpen, setIsOpen] = useState(false);
  const togglePopUp = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="">
      <div className="bg-red-50 flex justify-around items-center">
        <div className="border-r-2 border-gray-300 w-1/6 flex items-center justify-center">
          <label className=" text-lg">Adam</label>
        </div>
        <div className="border-r-2 border-gray-300 w-1/6 flex items-center justify-center">
          <label className=" text-lg">Sample@ex.com</label>
        </div>
        <div className="border-r-2 border-gray-300 w-1/6 flex items-center justify-center">
          <label className=" text-lg">Active</label>
        </div>
        <div className="border-r-2 border-gray-300 w-1/6 flex items-center justify-center">
          <label className=" text-lg">Admin</label>
        </div>
        <div className="border-r-2 border-gray-300 w-1/6 flex items-center justify-center">
          <label className=" text-lg">+1 1234567890</label>
        </div>
        <div className="border-r-2 border-gray-300 w-1/6 flex items-center justify-center">
          <img
            src={SettingsIcon}
            className="w-6 py-2 cursor-pointer"
            alt={SettingsIcon}
            onClick={togglePopUp}
          />
        </div>
      </div>
      {isOpen && (
        <UserSettingsPopUp handleClose={togglePopUp}></UserSettingsPopUp>
      )}
    </div>
  );
}

export default ManageUserList;
