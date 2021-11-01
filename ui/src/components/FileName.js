import React from "react";
import "../style.css";
import approved_icon from "../Icons/approved_files.svg";
import rejected_icon from "../Icons/Rejectedfiles.svg";
import pending_icon from "../Icons/filePending.svg";
import { useDispatch } from "react-redux";
import { selectedDocData } from "../actions";

function FileName(props) {
  const dispatch = useDispatch();
  const getStatusIcon = () => {
    let fileICon;

    if (props.fileIconStatus === "Pending") {
      fileICon = <img src={pending_icon} className="h-10" alt={pending_icon} />;
    } else if (props.fileIconStatus === "Rejected") {
      fileICon = <img src={rejected_icon} className="h-10 " alt={rejected_icon} />;
    } else if (props.fileIconStatus === "Approved") {
      fileICon = <img src={approved_icon} className="h-10" alt={approved_icon} />;
    }
    return fileICon;
  };
  return (
    <div
      className=" FileName flex border border-black w-60  items-center p-2 mx-2 my-3"
      onClick={() => {
        // console.log(props.fileName, props.userName);
        var selectedData = {
          fileName: props.fileName,
          userName: props.userName,
        };
        dispatch(selectedDocData(selectedData));
      }}
    >
      {getStatusIcon()}

      <div className="flex flex-col ml-3">
        <label className="mb-2 text-base">{props.fileName}</label>
        <label className="text-base">{props.userName}</label>
      </div>
    </div>
  );
}

export default FileName;
