import React from "react";
import "../style.css";

function FilesComp() {
  return (
    <div className="flex justify-between items-center">
      <button className="FilesComp border border-black bg-white py-2 px-3 text-center">
        All Files
      </button>
      <button className="FilesComp border border-black bg-white py-2 px-3 text-center">
        Approved Files
      </button>
      <button className="FilesComp border border-black bg-white py-2 px-3 text-center">
        Pending Files
      </button>
      <button className="FilesComp border border-black bg-white py-2 px-3 text-center">
        Rejected Files
      </button>
    </div>
  );
}

export default FilesComp;
