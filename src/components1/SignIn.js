import React from "react";

import Vector from "../Icons/Vector.svg";
import Google from "../Icons/Google.svg";

function SignIn() {
  return (
    <div className="grid grid-cols-3  BeforeSignUp-main ">
      <div className="col-span-1 flex justify-center items-center LeftSignup">
        <div className="leftSignUp-main">
          <div>
            <label className="lbl-doctrin-signup">Doctrin</label>
          </div>
          <div>
            <img src={Vector} className="img-uploading" />
          </div>

          <div className="div-text-signup">
            <label className="lbl-text-signup">
              Explore the amazing Environment
            </label>
          </div>
        </div>
      </div>
      <div className="col-span-2 flex flex-col justify-center items-center">
        <div className="text-center font-sans text-4xl text-pink-900 p-3">
          Sign Up for a New Account
        </div>
        <div className="bg-white flex flex-col w-11/12">
          <div className="font-sans text-3xl p-4">
            <label className="text-blue-700 font-sans text-xl mb-2">
              Email Id
            </label>
            <hr className="w-96" />
            <label className="text-blue-700 font-sans text-xl mb-2">
              Password
            </label>
            <hr className="w-96" />
            <label className="text-blue-700 font-sans text-xl mb-2">
              Forgot Password ?
            </label>
          </div>
          <div className="pb-3 flex justify-center items-center">
            <button className=" BeforeSignUp-button  px-4 py-1  text-white w-6/12">
              Sign In
            </button>
          </div>
          <div className="pb-3 flex justify-center items-center">
            <button className=" SignIn-button flex justify-evenly items-center w-6/12">
              <img src={Google} /> Sign In With Google
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

export default SignIn;
