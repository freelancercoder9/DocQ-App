import React from "react";
import "../style.css";
import CustName from "../Icons/CustName.svg";

function HomeCustName() {
  return (
    <div className="CustName-main  bg-white rounded-md flex items-center">
      <img src={CustName} alt={CustName} className="h-16 mx-2" />
      <div className="m-2">
        <label className="text-lg text-purple-800">Customer Name</label>
        <label className="text-sm text-red-600 mt-1">
          consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor
          sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        </label>
      </div>
    </div>
  );
}

export default HomeCustName;
