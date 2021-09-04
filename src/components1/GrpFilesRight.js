import React from "react";
import { getApprovedFiles } from "../actions";
import { useSelector } from "react-redux";

function GrpFilesRight() {
  const selectedData = useSelector((state) => state.selectedFile);
  const getApprovedFiles = () => {
    console.log("ApprovedFiles");
  };
  const getRejectedFiles = () => {
    console.log("RejectedFiles");
  };
  return (
    <div className="h-full flex flex-col">
      <div className=" h-12  border-2  rounded-sm  flex justify-center items-center mb-3 ">
        <div className="border-r-2  pr-5">
          <label className="text-lg ">{selectedData.fileName}</label>
        </div>
        <div className="pl-5">
          <label className="text-lg">{selectedData.userName}</label>
        </div>
      </div>
      <div className="flex flex-1 flex-col border-2 "></div>

      <div className="flex justify-between items-center my-4">
        <button
          className="text-white text-xl bg-blue-600  py-1 px-5 rounded-md"
          onClick={getApprovedFiles}
        >
          Approve
        </button>
        <button
          className="text-white text-xl bg-red-600 py-1 px-5 rounded-md"
          onClick={getRejectedFiles}
        >
          Reject
        </button>
      </div>
    </div>
  );
}

export default GrpFilesRight;
