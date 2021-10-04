import React from "react";
import DashBoardNavbar from "../components/DashBoardNavbar";
import DocumentsBar from "../components/DocumentsBar";
import FileName from "../components/FileName";
import FilesComp from "../components/FilesComp";

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
