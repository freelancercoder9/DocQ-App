import React from "react";
import "../style.css";
import { useDispatch } from "react-redux";
import {
  getAllFiles,
  getApprovedFiles,
  getPendingFiles,
  getRejectedFiles,
} from "../actions";

function FilesComp() {
  const dispatch = useDispatch();

  const getAllFilesFunc = () => {
    console.log("AllFiles");
    dispatch(getAllFiles());
  };
  const getApprovedFilesFunc = () => {
    console.log("ApprovedFiles");
    dispatch(getApprovedFiles());
  };
  const getPendingFilesFunc = () => {
    console.log("PendingFiles");
    dispatch(getPendingFiles());
  };
  const getRejectedFilesFunc = () => {
    console.log("RejectedFiles");
    dispatch(getRejectedFiles());
  };

  return (
    <div className="flex justify-between items-center">
      <button
        className="FilesComp border border-black bg-white py-2 px-3 text-center"
        onClick={getAllFilesFunc}
      >
        All Files
      </button>
      <button
        className="FilesComp border border-black bg-white py-2 px-3 text-center"
        onClick={getApprovedFilesFunc}
      >
        Approved Files
      </button>
      <button
        className="FilesComp border border-black bg-white py-2 px-3 text-center"
        onClick={getPendingFilesFunc}
      >
        Pending Files
      </button>
      <button
        className="FilesComp border border-black bg-white py-2 px-3 text-center"
        onClick={getRejectedFilesFunc}
      >
        Rejected Files
      </button>
    </div>
  );
}

export default FilesComp;
