import React from "react";
import closeOutline from "../Icons/closeOutline.svg";
import morevertical from "../Icons/morevertical.svg";
import editicon from "../Icons/editicon.svg";
import "../style.css";

function UserSettingsPopUp(props) {
  return (
    <div className="popup-box">
      <div className="box">
        <div className=" flex items-center  justify-between p-2">
          <div className="ml-52">
            <label className="text-2xl text-purple-800 ">User Settings</label>
          </div>
          <div className="">
            <img
              src={closeOutline}
              alt={closeOutline}
              onClick={props.handleClose}
            />
          </div>
        </div>
        <hr className="mt-0" />
        <div className="flex justify-evenly">
          <label className="text-lg">User Status</label>
          <img src={morevertical} alt={morevertical} />
          <label className="text-lg text-purple-600">Active</label>
          <img src={editicon} />
        </div>
        <div className="flex justify-evenly">
          <label className="text-lg ml-16">Role</label>
          <img src={morevertical} alt={morevertical} />
          <label className="text-lg text-purple-600">Default</label>
          <img src={editicon} />
        </div>
        <div className="flex justify-evenly mt-5 mb-3">
          <button className="bg-red-500 px-4 py-1 text-white text-xl rounded-md">
            Delete User
          </button>
          <button className="bg-blue-500 px-4 py-1 text-white text-xl rounded-md">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserSettingsPopUp;
