import React from "react";
import editBlue from "../Icons/editBlue.svg";
import greenTick from "../Icons/greenTick.svg";
import redCross from "../Icons/redCross.svg";
import * as services from "../services/UserServices";
import { useDispatch } from "react-redux";

import { get_Users_withStatus } from "../actions";
import * as usersList from "../operations/UserOperations";

function NewJoineeList(props) {
  const dispatch = useDispatch();

  async function approve_click(data) {
    console.log("in approve", data);
    const updatedRecord = { ...data, status: "approved", organisationId: data.organisation_id };
    const response = await services.update_User(updatedRecord);
    console.log("operation:", response);
    callUsersList();
  }
  async function callUsersList() {
    var data = [];

    const responsePendingUsers = await usersList.getUsersList("pending");
    const responseApprovedUsers = await usersList.getUsersList("approved");
    const responseRejectedUsers = await usersList.getUsersList("rejected");
    dispatch(get_Users_withStatus({ pendingUsers: responsePendingUsers.data, pendingUsersCount: responsePendingUsers.data.length }));
    dispatch(get_Users_withStatus({ approvedUsers: responseApprovedUsers.data, approvedUsersCount: responseApprovedUsers.data.length }));
    dispatch(get_Users_withStatus({ rejectedUsers: responseRejectedUsers.data, rejectedUsersCount: responseRejectedUsers.data.length }));
  }

  async function reject_click(data) {
    console.log(" In Reject", data);
    const updatedRecord = { ...data, status: "rejected", organisationId: data.organisation_id };
    const response = await services.update_User(updatedRecord);
    console.log("operation:", response);
    callUsersList();
  }
  return (
    <div>
      <div className="bg-red-50 flex justify-around items-center ">
        <div className="border-r-2 border-gray-300 w-1/6 flex items-center justify-center">
          <label className=" text-lg py-2">{props.userData.first_name}</label>
        </div>
        <div className="border-r-2 border-gray-300 w-1/6 flex items-center justify-center">
          <label className=" text-lg">{props.userData.email}</label>
        </div>
        <div className="border-r-2 border-gray-300 w-1/6 flex items-center justify-center">
          <label className=" text-lg">{props.userData.mobile_no}</label>
        </div>
        <div className="border-r-2 border-gray-300 w-1/6 flex items-center justify-evenly ">
          <label className=" text-lg mr-6">{props.userData.role}</label>
          <img src={editBlue} alt={editBlue} />
        </div>
        <div className=" w-1/6 flex items-center justify-evenly">
          <img
            src={greenTick}
            className="cursor-pointer"
            onClick={() => {
              approve_click(props.userData);
            }}
            alt={greenTick}
          />
          <img
            src={redCross}
            className="cursor-pointer"
            onClick={() => {
              reject_click(props.userData);
            }}
            alt={redCross}
          />
        </div>
      </div>
    </div>
  );
}

export default NewJoineeList;
