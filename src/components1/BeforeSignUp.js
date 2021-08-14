import React from "react";
import LeftSignup from "./LeftSignup";
import "../style.css";

function BeforeSignUp() {
  return (
    <div className="grid grid-cols-3 BeforeSignUp-main h-full">
      <div className="col-span-1 flex justify-center items-center LeftSignup">
        <LeftSignup></LeftSignup>
      </div>
      <div className="col-span-2 flex flex-col justify-center items-center">
        <div className="text-center font-sans text-4xl text-pink-900 absolute top-0 mt-5">
          Sign Up for a New Account
        </div>
        <div className="bg-white flex flex-col justify-around items-center w-11/12">
          <div className="font-sans text-3xl p-5">Creating Account for ?</div>
          <div className="">
            <div className=" font-sans text-2xl">
              <input
                type="radio"
                id="individual"
                value="Individual"
                className="mr-3 mb-3"
              />
              <label htmlFor="individual">Individual</label>
            </div>
            <div className=" font-sans text-2xl">
              <input
                type="radio"
                id="organisation"
                value="Organisation"
                className="mr-3"
              />
              <label htmlFor="organisation">Organisation</label>
            </div>
          </div>

          <div className=" BeforeSignUp-text font-sans text-xl text-blue-600">
            Already having account ? Sign In
          </div>
          <div className="p-4">
            <button className=" BeforeSignUp-button  px-4 py-2  text-white">
              Next
            </button>
          </div>
        </div>
        <div className="text-center text-blue-700 absolute bottom-0 mb-3 ">
          <label htmlFor=""> ← Back to Home</label>
        </div>
      </div>
    </div>
  );
}

export default BeforeSignUp;
