import React from "react";
import "../style.css";

function FilesComp() {
  return (
    <div className="flex justify-evenly w-7/12">
      <div className=" FilesComp border border-black w-1/5 p-1 text-center">
        <button>All Files</button>
      </div>
      <div className=" FilesComp border border-black w-1/5 p-1 text-center">
        <button>Approved Files</button>
      </div>
      <div className=" FilesComp border border-black w-1/5 p-1 text-center">
        <button>Pending Files</button>
      </div>
      <div className=" FilesComp border border-black w-1/5 p-1 text-center">
        <button>Rejected Files</button>
      </div>
    </div>
  );
}

export default FilesComp;
