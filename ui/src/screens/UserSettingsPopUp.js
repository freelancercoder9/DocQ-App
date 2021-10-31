import React, { useState } from "react";
import closeOutline from "../Icons/closeOutline.svg";
import morevertical from "../Icons/morevertical.svg";
import editicon from "../Icons/editicon.svg";
import Select from "react-select";
import "../style.css";

function UserSettingsPopUp(props) {
  const [userStatus, setUserStatus] = useState(props.statusValue);
  const [userRole, setUserRole] = useState(props.roleValue);

  const onChangeStatus = (e) => {
    setUserStatus(e.value);
  };

  const onChangeRole = (e) => {
    setUserRole(e.value);
  };

  const optionsUserStatus = [
    { value: "approved", label: "Approved" },
    { value: "pending", label: "Pending" },
    { value: "rejected", label: "Rejected" },
  ];

  const optionsUserRoles = [
    { value: "admin", label: "Admin" },
    { value: "staff", label: "Staff" },
  ];
  return (
    <div className="popup-box justify-center align-middle ">
      <div className="box">
        <div className=" flex items-center justify-between p-2">
          <label className="text-2xl text-purple-800  text-center w-100 h-11">User Settings</label>
          <div className="">
            <img src={closeOutline} alt={closeOutline} onClick={props.handleClose} />
          </div>
        </div>
        <hr className="mt-0" />
        <div className="flex justify-evenly">
          <label className="text-lg">User Status</label>
          <img src={morevertical} alt={morevertical} />
          <Select
            className="w-50"
            options={optionsUserStatus}
            onChange={onChangeStatus}
            value={optionsUserStatus.find((item) => item.value === userStatus)}
          />
        </div>
        <br />
        <div className="flex justify-evenly">
          <label className="text-lg ml-16">Role</label>
          <img src={morevertical} alt={morevertical} />
          <Select
            className="w-50"
            options={optionsUserRoles}
            onChange={onChangeRole}
            value={optionsUserRoles.find((item) => item.value === userRole)}
          />
        </div>
        <div className="flex justify-evenly mt-5 mb-3">
          <button onClick={props.deleteAction} className="bg-red-500 px-4 py-1 text-white text-xl rounded-md">
            Delete User
          </button>
          <button
            onClick={() => {
              props.saveAction(userStatus, userRole);
            }}
            className="bg-blue-500 px-4 py-1 text-white text-xl rounded-md"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserSettingsPopUp;
