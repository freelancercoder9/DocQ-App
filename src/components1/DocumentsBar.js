import React from "react";
import uploadfile from "../Icons/Files.svg";
import searchFiles from "../Icons/searchFiles.svg";

function DocumentsBar() {
  return (
    <div className="bg-purple-400 flex p-2 justify-between items-center">
      <div className="h-full flex items-center">
        <img src={uploadfile} className="h-full mr-10" />
        <label className="text-white text-2xl font-sans">Documents</label>
      </div>
      <div className=" mr-4 ">
        <img src={searchFiles} className="w-8" />
      </div>
    </div>
  );
}

export default DocumentsBar;
