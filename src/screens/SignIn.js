import React from "react";
import { NavLink } from "react-router-dom";
import Vector from "../Icons/Vector.svg";
import Google from "../Icons/Google.svg";

function SignIn() {
  return (
    <div className="grid grid-cols-3  BeforeSignUp-main h-full">
      <div className="col-span-1 flex justify-center items-center LeftSignup">
        <div className="sec2-uploading flex  flex-col items-center justify-around">
          <label className="text-3xl text-blue-900 font-sans font-semibold">
            Doctrin
          </label>
          <img src={Vector} />
          <label className="text-lg text-blue-900 px-5 text-center">
            Explore the amazing Environment
          </label>
        </div>
      </div>
      <div className="col-span-2 flex flex-col justify-center items-center ">
        <div className="text-center font-sans text-4xl text-pink-900 absolute top-0 mt-5">
          Sign In to your Account
        </div>
        <div className="bg-white flex flex-col w-11/12">
          <div className="font-sans text-3xl p-4">
            <div className="flex justify-between my-4">
              <label className="text-blue-700 font-sans text-xl mb-2">
                Email Id
              </label>
              <input
                type="text"
                className="border-2 border-gray-200 w-7/12 h-7 px-2 text-xl font-light"
              />
            </div>
            <div className="flex justify-between my-4">
              <label className="text-blue-700 font-sans text-xl mb-2">
                Password
              </label>
              <input
                type="text"
                className="border-2 border-gray-200 w-7/12 h-7 px-2 text-xl font-light"
              />
            </div>
            <div className="flex justify-between my-4">
              <NavLink
                className="text-blue-700 font-mono text-xl mb-2 no-underline"
                to="/forgotPwd"
              >
                Forgot Password ?
              </NavLink>
            </div>
          </div>
          <div className="pb-3 flex justify-center items-center">
            <NavLink
              className=" BeforeSignUp-button  px-4 py-1  text-white w-6/12 no-underline text-center"
              to="/dashboardScreen"
            >
              Sign In
            </NavLink>
          </div>
          <div className="pb-3 flex justify-center items-center">
            <button className=" SignIn-button flex justify-evenly items-center w-6/12">
              <img src={Google} /> Sign In With Google
            </button>
          </div>
        </div>
        <div className="text-center text-blue-700 absolute bottom-0 mb-3 ">
          <NavLink
            className="text-blue-700 font-sans text-xl mb-2 no-underline"
            to="/homePage"
          >
            ← Back to Home
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
