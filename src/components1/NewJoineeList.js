import React from "react";
import editBlue from "../Icons/editBlue.svg";
import greenTick from "../Icons/greenTick.svg";
import redCross from "../Icons/redCross.svg";

function NewJoineeList() {
  return (
    <div>
      <div className="bg-red-50 flex justify-around items-center ">
        <div className="border-r-2 border-gray-300 w-1/6 flex items-center justify-center">
          <label className=" text-lg py-2">Adam</label>
        </div>
        <div className="border-r-2 border-gray-300 w-1/6 flex items-center justify-center">
          <label className=" text-lg">Sample@ex.com</label>
        </div>
        <div className="border-r-2 border-gray-300 w-1/6 flex items-center justify-center">
          <label className=" text-lg">+1 1234567890</label>
        </div>
        <div className="border-r-2 border-gray-300 w-1/6 flex items-center justify-evenly ">
          <label className=" text-lg mr-6">default</label>
          <img src={editBlue} />
        </div>
        <div className=" w-1/6 flex items-center justify-evenly">
          <img src={greenTick} />
          <img src={redCross} />
        </div>
      </div>
    </div>
  );
}

export default NewJoineeList;
