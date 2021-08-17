import React from "react";
import DashBoardNavbar from "../components1/DashBoardNavbar";
import DocumentsBar from "../components1/DocumentsBar";
import FilesComp from "../components1/FilesComp";
import GrpFilesRight from "../components1/GrpFilesRight";

function GroupFilesScreen() {
  return (
    <div>
      <div>
        <DashBoardNavbar></DashBoardNavbar>
        <DocumentsBar></DocumentsBar>
      </div>
      <div className="flex justify-between">
        <FilesComp></FilesComp>
        <GrpFilesRight></GrpFilesRight>
      </div>
    </div>
  );
}

export default GroupFilesScreen;
