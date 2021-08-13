import React from "react";
import VectorSignUp from "../Icons/VectorSignUp.svg";

function RightSignUp() {
  return (
    <div>
      <div className="bg-white flex flex-col w-11/12">
        <div className="font-sans text-3xl p-4">
          <label className="text-blue-700 font-sans text-xl mb-2">
            First Name
          </label>
          <hr className="w-96" />
          <label className="text-blue-700 font-sans text-xl mb-2">
            Last Name
          </label>
          <hr className="w-96" />
          <label className="text-blue-700 font-sans text-xl mb-2">
            Email ID
          </label>
          <hr className="w-96" />
          <label className="text-blue-700 font-sans text-xl mb-2">
            Create Password
          </label>
          <hr className="w-96" />
          <label className="text-blue-700 font-sans text-xl mb-2">
            Confirm Password
          </label>
          <hr className="w-96" />
          <label className="text-blue-700 font-sans text-xl mb-2">
            How many users you have ?
          </label>
          <div>
            <input type="radio" id=">10" value=">10" className="mr-3" />
            <label htmlFor=">10" className="text-xl mr-3">
              >10
            </label>
            <input type="radio" id=">50" value=">50" className="mr-3" />
            <label htmlFor=">50" className="text-xl mr-3">
              >50
            </label>
            <input type="radio" id=">100" value=">100" className="mr-3" />
            <label htmlFor=">100" className="text-xl mr-3">
              >100
            </label>
            <input type="radio" id="<100" value="<100" className="mr-3" />
            <label htmlFor="<100" className="text-xl mr-3">
              >100
            </label>
          </div>
          <div className="my-2">
            <label className="text-blue-700 font-sans text-xl mb-2">
              Document verification
            </label>
            <div className="flex  justify-around p-1 bg-gray-200 w-28">
              <img src={VectorSignUp} />
              <label className="SignUp-upload text-gray-700 text-lg">
                upload
              </label>
            </div>
          </div>
          <div>
            <label className="text-blue-700 font-sans text-xl mb-2">
              Create Password
            </label>
            <hr className="w-96" />
          </div>
        </div>
        <div className="pb-3 flex flex-col justify-center items-center">
          <button className=" BeforeSignUp-button  px-4 py-1  text-white mb-1">
            Create Account
          </button>
          <button className=" BeforeSignUp-button  px-4 py-1  text-white">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default RightSignUp;
