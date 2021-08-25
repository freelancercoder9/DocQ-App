import React from "react";
import secureIcon from "../Icons/secureIcon.svg";

function HomeSecure() {
  return (
    <div>
      <div className="sec1-main flex flex-col items-center justify-between bg-white">
        <img src={secureIcon} className="sec1-img mt-5" alt={secureIcon} />
        <label className="font-sans font-semibold text-2xl">Secure</label>
      </div>
    </div>
  );
}

export default HomeSecure;
