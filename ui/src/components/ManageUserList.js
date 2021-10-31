import React, { useState } from "react";
import SettingsIcon from "../Icons/SettingsIcon.svg";
import UserSettingsPopUp from "../screens/UserSettingsPopUp";
import Modal from "react-modal";
import * as services from "../services/UserServices";

function ManageUserList(props) {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopUp = () => {
    setIsOpen(!isOpen);
  };

  function deleteUserClicked() {
    console.log("in delete User");
  }

  async function saveUserCliecked(userStatus, userRole) {
    const updatedUserObject = { ...props.userData, status: userStatus, role: userRole, organisationId: props.userData.organisation_id };
    console.log("After Update: ", updatedUserObject);
    const response = await services.update_User(updatedUserObject);
    console.log("user settings save response", response);
  }

  function closeModal() {}

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      width: "45%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -40%)",
    },
  };

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
          <img src={SettingsIcon} className="w-6 py-2 cursor-pointer" alt={SettingsIcon} onClick={togglePopUp} />
        </div>
      </div>
      <Modal isOpen={isOpen} contentLabel="Example Modal" ariaHideApp={false} style={customStyles}>
        <UserSettingsPopUp
          deleteAction={deleteUserClicked}
          saveAction={saveUserCliecked}
          statusValue={props.userData.status}
          roleValue={props.userData.role}
          handleClose={togglePopUp}
        ></UserSettingsPopUp>
      </Modal>
    </div>
  );
}

export default ManageUserList;
