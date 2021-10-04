import React from "react";
import DashBoardNavbar from "../components/DashBoardNavbar";
import DocumentsBar from "../components/DocumentsBar";
import FileName from "../components/FileName";
import FilesComp from "../components/FilesComp";
import GrpFilesRight from "../components/GrpFilesRight";
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
            {docListData.map((item, index) => {
              return (
                <FileName
                  fileIconStatus={item.fileStatus}
                  fileName={item.docName}
                  userName={item.userName}
                  key={index}
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
