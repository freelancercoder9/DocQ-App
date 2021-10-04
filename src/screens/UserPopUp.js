import React from "react";
import closeOutline from "../Icons/closeOutline.svg";
import "../style.css";

function UserPopUp(props) {
  return (
    <div className="popup-box">
      <div className="box">
        <div className=" flex items-center  justify-between p-2">
          <div className="ml-52">
            <label className="text-2xl text-purple-800 ">User Permitted</label>
          </div>
          <div className="">
            <img
              src={closeOutline}
              alt={closeOutline}
              onClick={props.handleClose}
            />
          </div>
        </div>
        <hr className="mt-0" />
        <div className="flex flex-col p-2">
          <div className="flex  px-5 py-1 justify-around">
            <label className="text-lg" style={{ minWidth: "40%" }}>
              Name
            </label>
            <label htmlFor="collan">:</label>
            <label className="text-lg" style={{ minWidth: "40%" }}>
              Geetha Dontha
            </label>
          </div>
          <div className="flex  px-5 py-1 justify-around">
            <label className="text-lg" style={{ minWidth: "40%" }}>
              Email ID
            </label>
            <label htmlFor="collan">:</label>
            <label className="text-lg" style={{ minWidth: "40%" }}>
              testuser@gmail.com
            </label>
          </div>
          <div className="flex  px-5 py-1 justify-around">
            <label className="text-lg" style={{ minWidth: "40%" }}>
              Phone Number
            </label>
            <label htmlFor="collan">:</label>
            <label className="text-lg" style={{ minWidth: "40%" }}>
              +91 9911227788
            </label>
          </div>
        </div>

        <div className="flex justify-evenly mt-3 mb-3">
          <button className="bg-red-500 px-2 py-1 text-white text-xl rounded-md">
            Cancel
          </button>
          <button className="bg-blue-500 px-2 py-1 text-white text-xl rounded-md">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserPopUp;
