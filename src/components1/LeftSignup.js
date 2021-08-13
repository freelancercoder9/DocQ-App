import React from "react";
import "../style.css";
import Vector from "../Icons/Vector.svg";
function LeftSignup() {
  return (
    <div>
      <div className="leftSignUp-main">
        <div>
          <label className="lbl-doctrin-signup">Doctrin</label>
        </div>
        <div>
          <img src={Vector} className="img-uploading" />
        </div>

        <div className="div-text-signup">
          <label className="lbl-text-signup">
            You are Going to experience Something New
          </label>
        </div>
      </div>
    </div>
  );
}

export default LeftSignup;
