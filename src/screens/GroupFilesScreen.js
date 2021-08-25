import React from "react";
import DashBoardNavbar from "../components1/DashBoardNavbar";
import DocumentsBar from "../components1/DocumentsBar";
import FileName from "../components1/FileName";
import FilesComp from "../components1/FilesComp";
import GrpFilesRight from "../components1/GrpFilesRight";
import { useSelector } from "react-redux";

function GroupFilesScreen() {
  const docListData = useSelector((state) => {
    return state.DocList;
  });
  return (
    <div className="h-full flex flex-col">
      <div>
        <DashBoardNavbar></DashBoardNavbar>
        <DocumentsBar></DocumentsBar>
      </div>
      <div className=" flex-1 flex justify-around mt-3 h-full ">
        <div className="w-7/12">
          <FilesComp></FilesComp>
          <div className="flex flex-wrap mt-10 overflow-y-scroll ">
            {docListData.map((item) => {
              return (
                <FileName
                  fileName={item.docName}
                  userName={item.userName}
                ></FileName>
              );
            })}
          </div>
        </div>
        <div className="w-4/12">
          <GrpFilesRight></GrpFilesRight>
        </div>
      </div>
    </div>
  );
}

export default GroupFilesScreen;
