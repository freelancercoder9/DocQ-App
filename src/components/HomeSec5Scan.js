import React from "react";
import DocumentsScan from "../Icons/DocumentsScan.svg";

function HomeSec5Scan() {
  return (
    <div className=" flex flex-col items-center py-4">
      <img src={DocumentsScan} />
      <div className="flex flex-col items-center">
        <label className="text-2xl text-red-400 my-2"> 10000+</label>
        <label className="text-xl font-sans">Documents Scanned</label>
      </div>
    </div>
  );
}

export default HomeSec5Scan;
