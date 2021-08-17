import React from "react";
import DashBoardNavbar from "../components1/DashBoardNavbar";
import DocumentsBar from "../components1/DocumentsBar";
import FileName from "../components1/FileName";
import FilesComp from "../components1/FilesComp";

function RejectedFilesScreen() {
  return (
    <div>
      <DashBoardNavbar></DashBoardNavbar>
      <DocumentsBar></DocumentsBar>
      <div className="mt-3">
        <FilesComp></FilesComp>
      </div>
      <div className="mx-2 mt-3 flex ">
        <FileName></FileName>
      </div>
    </div>
  );
}

export default RejectedFilesScreen;
