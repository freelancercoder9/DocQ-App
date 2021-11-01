import React from "react";
import { useHistory } from "react-router-dom";
import Vector from "../Icons/Vector.svg";
import Google from "../Icons/Google.svg";
import * as usersList from "../operations/UserOperations";
import { get_Users_withStatus } from "../actions";
import { useDispatch, useSelector } from "react-redux";

function SignIn() {
  const dispatch = useDispatch();
  const history = useHistory();
  const userUpdatedList = useSelector((state) => state.getUpdatedUsersList);
  console.log(userUpdatedList);
  const onClickForgotPwd = () => {
    history.push("/forgotPwd");
  };

  async function callUsersList() {
    console.log("in service call to get list of users");
    const responsePendingUsers = await usersList.getUsersList("pending");
    const responseApprovedUsers = await usersList.getUsersList("approved");
    const responseRejectedUsers = await usersList.getUsersList("rejected");
    dispatch(get_Users_withStatus({ pendingUsers: responsePendingUsers.data, pendingUsersCount: responsePendingUsers.data.length }));
    dispatch(get_Users_withStatus({ approvedUsers: responseApprovedUsers.data, approvedUsersCount: responseApprovedUsers.data.length }));
    dispatch(get_Users_withStatus({ rejectedUsers: responseRejectedUsers.data, rejectedUsersCount: responseRejectedUsers.data.length }));
  }

  const onClickSignIn = async () => {
    history.push("/dashboardScreen");
    callUsersList();
  };
  const onClickBackBtn = () => {
    history.push("/homePage");
  };
  return (
    <div className="grid grid-cols-3  BeforeSignUp-main h-full">
      <div className="col-span-1 flex justify-center items-center LeftSignup">
        <div className="sec2-uploading flex  flex-col items-center justify-around">
          <label className="text-3xl text-blue-900 font-sans font-semibold">EDEMS</label>
          <img src={Vector} alt={Vector} />
          <label className="text-lg text-blue-900 px-5 text-center">Explore the amazing Environment</label>
        </div>
      </div>
      <div className="col-span-2 flex flex-col justify-center items-center ">
        <div className="text-center font-sans text-4xl text-pink-900 absolute top-0 mt-5">Sign In to your Account</div>
        <div className="bg-white flex flex-col w-11/12">
          <div className="font-sans text-3xl p-4">
            <div className="flex justify-between my-4">
              <label className="text-blue-700 font-sans text-xl mb-2">Email Id</label>
              <input type="text" className="border-2 border-gray-200 w-7/12 h-7 px-2 text-xl font-light" />
            </div>
            <div className="flex justify-between my-4">
              <label className="text-blue-700 font-sans text-xl mb-2">Password</label>
              <input type="text" className="border-2 border-gray-200 w-7/12 h-7 px-2 text-xl font-light" />
            </div>
            <div className="flex justify-between my-4">
              <button className="text-blue-700 font-mono text-xl mb-2 no-underline" onClick={onClickForgotPwd}>
                Forgot Password ?
              </button>
            </div>
          </div>
          <div className="pb-3 flex justify-center items-center">
            <button className=" BeforeSignUp-button  px-4 py-1  text-white w-6/12 no-underline text-center" onClick={onClickSignIn}>
              Sign In
            </button>
          </div>
          <div className="pb-3 flex justify-center items-center">
            <button className=" SignIn-button flex justify-evenly items-center w-6/12">
              <img src={Google} alt={Google} /> Sign In With Google
            </button>
          </div>
        </div>
        <div className="text-center text-blue-700 absolute bottom-0 mb-3 ">
          <button className="text-blue-700 font-sans text-xl mb-2 no-underline" onClick={onClickBackBtn}>
            ← Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
