import React from "react";
import "../style.css";
import Allfiles from "../Icons/Allfiles.svg";
import morevertical from "../Icons/morevertical.svg";

function FileName() {
  return (
    <div className=" FileName flex border border-black w-60 justify-between p-2 mx-2 my-3">
      <div className="h-full">
        <img src={Allfiles} className="h-14" />
      </div>
      <div>
        <div>
          <label className="mb-2 text-base">File Name</label>
        </div>
        <div>
          <label className="text-base">From: Username</label>
        </div>
      </div>
      <div>
        <img src={morevertical} />
      </div>
    </div>
  );
}

export default FileName;
