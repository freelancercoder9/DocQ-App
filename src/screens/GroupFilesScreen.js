import React from "react";
import DashBoardNavbar from "../components1/DashBoardNavbar";
import DocumentsBar from "../components1/DocumentsBar";
import FilesComp from "../components1/FilesComp";
import GrpFilesRight from "../components1/GrpFilesRight";

function GroupFilesScreen() {
  return (
    <div className="bg-red-300">
      <div>
        <DashBoardNavbar></DashBoardNavbar>
        <DocumentsBar></DocumentsBar>
      </div>
      <div className="flex justify-around mt-3 h-full">
        <div className="w-5/12">
          <FilesComp></FilesComp>
        </div>
        <div className="w-5/12">
          <GrpFilesRight></GrpFilesRight>
        </div>
      </div>
    </div>
  );
}

export default GroupFilesScreen;
