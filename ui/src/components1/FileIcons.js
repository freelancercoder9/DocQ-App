import React from "react";
import Allfiles from "../Icons/Allfiles.svg";
import Rejectedfiles from "../Icons/Rejectedfiles.svg";
import filePending from "../Icons/filePending.svg";

function FileIcons() {
  return (
    <div className="">
      <div className=" FileIcons border border-black w-20 p-1 text-lg text-center text-blue-800">
        All
      </div>
      <div className=" FileIcons border border-black w-20 p-1 flex  justify-center">
        <img src={Allfiles} alt={Allfiles} />
      </div>
      <div className=" FileIcons border border-black w-20 p-1 flex  justify-center h-full">
        <img src={filePending} className="h-7" alt={filePending} />
      </div>
      <div className=" FileIcons border border-black w-20 p-1 flex  justify-center">
        <img src={Rejectedfiles} alt={Rejectedfiles} />
      </div>
    </div>
  );
}

export default FileIcons;
