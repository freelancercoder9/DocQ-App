import React from "react";
import BackArrow from "../Icons/BackArrow.svg";

function ForgotPwd() {
  return (
    <div>
      <nav className="flex items-center">
        <img src={BackArrow} className=" mx-3" />
        <label className="text-2xl"> Forgot Password</label>
      </nav>
      <div className="flex justify-center mt-20">
        <div className="border w-2/5  flex flex-col justify-evenly items-center h-44">
          <div>
            <label className="font-sans text-lg">
              Enter your registered email ID to get a password reset link
            </label>
          </div>
          <div>
            <input type="text" placeholder="Email ID" className="border w-96" />
          </div>
          <div className="">
            <button className=" bg-green-500 rounded-lg py-1 px-3 text-white mr-4">
              Get Link
            </button>
            <a className="hover:underline no-underline">Resend email</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPwd;
