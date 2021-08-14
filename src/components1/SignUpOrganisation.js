import React from "react";
import LeftSignup from "./LeftSignup";
import "../style.css";

function SignUpOrganisation() {
  return (
    <div className="grid grid-cols-3  BeforeSignUp-main h-full">
      <div className="col-span-1 flex justify-center items-center LeftSignup">
        <LeftSignup></LeftSignup>
      </div>
      <div className="col-span-2 flex flex-col justify-center items-center">
        <div className="text-center font-sans text-4xl text-pink-900 absolute top-0 mt-5">
          Sign Up for a New Account
        </div>
        <div className="bg-white flex flex-col w-11/12">
          <div className="font-sans text-3xl p-4">
            <div className="flex justify-between my-4">
              <label className="text-blue-700 font-sans text-xl mb-2 w-5/12">
                Organisation Name
              </label>
              <input
                type="text"
                className="border-2 border-gray-200 w-7/12 h-7 px-2 text-xl font-light"
              />
            </div>

            <div className="flex justify-between my-4">
              <label className="text-blue-700 font-sans text-xl mb-2">
                UserName(Your Name)
              </label>
              <input
                type="text"
                className="border-2 border-gray-200 w-7/12 h-7 px-2 text-xl font-light"
              />
            </div>

            <div className="flex justify-between my-4">
              <label className="text-blue-700 font-sans text-xl mb-2">
                Email ID
              </label>
              <input
                type="text"
                className="border-2 border-gray-200 w-7/12 h-7 px-2 text-xl font-light"
              />
            </div>

            <div className="flex justify-between my-4">
              <label className="text-blue-700 font-sans text-xl mb-2">
                Mobile Number
              </label>
              <input
                type="text"
                className="border-2 border-gray-200 w-7/12 h-7 px-2 text-xl font-light"
              />
            </div>

            <div className="flex justify-between my-4">
              <label className="text-blue-700 font-sans text-xl mb-2">
                Country
              </label>
              <input
                type="text"
                className="border-2 border-gray-200 w-7/12 h-7 px-2 text-xl font-light"
              />
            </div>
          </div>
          <div className="pb-3 flex justify-center items-center">
            <button className=" BeforeSignUp-button  px-4 py-1  text-white">
              Next
            </button>
          </div>
        </div>
        <div className="text-center text-blue-700 p-3 absolute bottom-0 mb-3">
          <label htmlFor=""> ← Back to Home</label>
        </div>
      </div>
    </div>
  );
}

export default SignUpOrganisation;
