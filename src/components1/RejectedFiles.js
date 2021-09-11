import React from "react";
import Rejectedfiles from "../Icons/Rejectedfiles.svg";
import morevertical from "../Icons/morevertical.svg";

function RejectedFiles() {
  return (
    <div className=" FileName flex border border-black w-1/5 justify-between p-2">
      <div className="h-full">
        <img src={Rejectedfiles} className="h-14" alt={Rejectedfiles} />
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
        <img src={morevertical} alt={morevertical} />
      </div>
    </div>
  );
}

export default RejectedFiles;
