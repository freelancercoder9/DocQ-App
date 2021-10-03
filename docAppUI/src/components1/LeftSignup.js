import React from "react";
import "../style.css";
import Vector from "../Icons/Vector.svg";
function LeftSignup() {
  return (
    <div>
      <div className="sec2-uploading flex  flex-col items-center justify-around">
        <label className="text-3xl text-blue-900 font-sans font-semibold">EDEMS</label>
        <img src={Vector} alt={Vector} />
        <label className="text-lg text-blue-900 px-5 text-center">You are Going to experience Something New</label>
      </div>
    </div>
  );
}

export default LeftSignup;
