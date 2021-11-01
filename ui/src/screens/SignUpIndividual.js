import React from "react";
import LeftSignup from "../components/LeftSignup";
import { useHistory } from "react-router-dom";
import { getConfirmPwd, getCreatepwd, getEmailId, getFirstName, getLastName } from "../actions";
import { useDispatch } from "react-redux";

function SignUpIndividual() {
  const history = useHistory();
  const dispatch = useDispatch();

  const onClickCreateUser = async () => {
    // const res = await user_SignUp_Service(indData_Display);
    // console.log("res from service:", res);
    history.push("/dashboardScreen");
  };
  const onClickBackToHome = () => {
    history.push("/homePage");
  };
  return (
    <div className="grid grid-cols-3  BeforeSignUp-main h-full">
      <div className="col-span-1 flex justify-center items-center LeftSignup">
        <LeftSignup></LeftSignup>
      </div>
      <div className="col-span-2 flex flex-col justify-center items-center">
        <div className="text-center font-sans text-4xl text-pink-900 absolute top-0 mt-5">Sign Up for a New Account</div>
        <div className="bg-white flex flex-col w-11/12">
          <div className="font-sans text-3xl p-4">
            <div className="flex justify-between my-4">
              <label className="text-blue-700 font-sans text-xl mb-2">First Name</label>
              <input
                type="text"
                className="border-2 border-gray-200 w-7/12 h-7 px-2 text-xl font-light"
                onChange={(e) => {
                  // console.log(e.target.value);
                  dispatch(getFirstName(e.target.value));
                }}
              />
            </div>
            <div className="flex justify-between my-4">
              <label className="text-blue-700 font-sans text-xl mb-2">Last Name</label>
              <input
                type="text"
                className="border-2 border-gray-200 w-7/12 h-7 px-2 text-xl font-light"
                onChange={(e) => {
                  // console.log(e.target.value);
                  dispatch(getLastName(e.target.value));
                }}
              />
            </div>
            <div className="flex justify-between my-4">
              <label className="text-blue-700 font-sans text-xl mb-2">Email ID</label>
              <input
                type="text"
                className="border-2 border-gray-200 w-7/12 h-7 px-2 text-xl font-light"
                onChange={(e) => {
                  // console.log(e.target.value);
                  dispatch(getEmailId(e.target.value));
                }}
              />
            </div>
            <div className="flex justify-between my-4">
              <label className="text-blue-700 font-sans text-xl mb-2">Create Password</label>
              <input
                type="password"
                className="border-2 border-gray-200 w-7/12 h-7 px-2 text-xl font-light"
                onChange={(e) => {
                  // console.log(e.target.value);
                  dispatch(getCreatepwd(e.target.value));
                }}
              />
            </div>
            <div className="flex justify-between my-4">
              <label className="text-blue-700 font-sans text-xl mb-2">Confirm Password</label>
              <input
                type="password"
                className="border-2 border-gray-200 w-7/12 h-7 px-2 text-xl font-light"
                onChange={(e) => {
                  // console.log(e.target.value);
                  dispatch(getConfirmPwd(e.target.value));
                }}
              />
            </div>
          </div>
          <div className="pb-3 flex justify-center items-center">
            <button
              className=" BeforeSignUp-button  px-4 py-1  text-white no-underline"
              // to="/dashboardScreen"
              onClick={onClickCreateUser}
            >
              Create User
            </button>
          </div>
        </div>
        <div className="text-center text-blue-700 absolute bottom-0 mb-3 ">
          <button className="text-blue-700 font-sans text-xl mb-2 no-underline" onClick={onClickBackToHome}>
            ← Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignUpIndividual;
