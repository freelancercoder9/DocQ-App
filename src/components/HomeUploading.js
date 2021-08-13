import React from "react";
import "../style.css";
import Vector from "../Icons/Vector.svg";

function HomeUploading() {
  return (
    <div className="sec2-uploading flex  flex-col items-center justify-evenly">
      <img src={Vector} className="img-uploading" />
      <div className="bar-uploading"></div>
      <label className="font-sans text-3xl">Uploading</label>
      <label className="text-lg font-sans font-semibold bg-red-100 p-2 rounded-md">
        Fast than your imagination
      </label>
    </div>
  );
}

export default HomeUploading;
