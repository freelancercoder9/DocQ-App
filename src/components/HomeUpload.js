import React from "react";
import "../style.css";
import UploadIcon from "../Icons/Upload-icon.svg";

function HomeUpload() {
  return (
    <div className="sec1-main flex flex-col items-center justify-between bg-white">
      <img src={UploadIcon} className="sec1-img mt-5" />
      <label className="font-sans font-semibold text-2xl"> Upload</label>
    </div>
  );
}

export default HomeUpload;
