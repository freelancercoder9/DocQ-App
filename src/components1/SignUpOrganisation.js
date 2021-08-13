import React from "react";
import LeftSignup from "./LeftSignup";
import "../style.css";

function SignUpOrganisation() {
  return (
    <div className="grid grid-cols-3  BeforeSignUp-main">
      <div className="col-span-1 flex justify-center items-center LeftSignup">
        <LeftSignup></LeftSignup>
      </div>
      <div className="col-span-2 flex flex-col justify-center items-center">
        <div className="text-center font-sans text-4xl text-pink-900 p-3">
          Sign Up for a New Account
        </div>
        <div className="bg-white flex flex-col w-11/12">
          <div className="font-sans text-3xl p-4">
            <label className="text-blue-700 font-sans text-xl mb-2">
              Organisation Name
            </label>
            <hr className="w-96" />
            <label className="text-blue-700 font-sans text-xl mb-2">
              UserName(Your Name)
            </label>
            <hr className="w-96" />
            <label className="text-blue-700 font-sans text-xl mb-2">
              Email ID
            </label>
            <hr className="w-96" />
            <label className="text-blue-700 font-sans text-xl mb-2">
              Mobile Number
            </label>
            <hr className="w-96" />
            <label className="text-blue-700 font-sans text-xl mb-2">
              Country
            </label>
            <hr className="w-96" />
          </div>
          <div className="pb-3 flex justify-center items-center">
            <button className=" BeforeSignUp-button  px-4 py-1  text-white">
              Next
            </button>
          </div>
        </div>
        <div className="text-center text-blue-700 p-3 ">
          <label htmlFor=""> ← Back to Home</label>
        </div>
      </div>
    </div>
  );
}

export default SignUpOrganisation;
