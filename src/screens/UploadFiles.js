import React from "react";
import DashBoardNavbar from "../components1/DashBoardNavbar";
import dragdrop from "../Icons/dragdrop.svg";
import "../style.css";

function UploadFiles() {
  return (
    <div className="">
      <div>
        <DashBoardNavbar></DashBoardNavbar>
      </div>
      <div className="flex justify-evenly  items-center mt-5">
        <div className=" uploadFiles w-6/12 border-black border ml-7 flex justify-evenly items-center bg-gray-100">
          <img src={dragdrop} />
          <label className="text-3xl text-red-900">
            Drag and Drop your Files here
          </label>
        </div>
        <div className=" uploadFiles w-4/12 border-black border flex flex-col justify-around">
          <div className=" flex flex-col justify-center items-center">
            <input
              type="text"
              className="w-8/12 bg-yellow-100 rounded-sm text-center text-lg mb-4 p-3"
              placeholder="FileName"
            />

            <input
              type="text"
              className="w-8/12 bg-yellow-100 rounded-sm text-center text-lg mb-4 p-3"
              placeholder="UserId"
            />
          </div>
          <div className="flex justify-center items-center">
            <button className="w-2/12 p-2 bg-purple-500 text-white ">
              Save
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mt-5">
        <div className="mr-4">
          <button className="bg-purple-500 px-4 py-2 text-white rounded-sm text-lg ">
            Browse files
          </button>
        </div>
        <div className="flex w-40 bg-purple-500 px-3 py-2 text-white rounded-sm text-lg flex justify-evenly items-center">
          <div className="text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
              />
            </svg>
          </div>
          <button>Upload</button>
        </div>
      </div>
    </div>
  );
}

export default UploadFiles;
