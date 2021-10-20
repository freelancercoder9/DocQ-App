import React from "react";
import DashBoardNavbar from "../components/DashBoardNavbar";

import successfulUpload from "../Icons/successfulUpload.svg";

function ShareFiles() {
  return (
    <div>
      <div>
        <DashBoardNavbar></DashBoardNavbar>
      </div>
      <div className=" flex flex-col items-center">
        <div className="text-blue-700 text-2xl font-semibold my-5">
          Your Files are successfully uploaded !
        </div>
        <div className="w-3/12 border border-black flex justify-center items-center bg-red-50">
          <div className="mr-4">
            <img src={successfulUpload} alt={successfulUpload} />
          </div>
          <div className="text-xl">File name</div>
        </div>
        <div className="flex text-purple-500 text-lg mt-96 items-center ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
              clip-rule="evenodd"
            />
          </svg>
          <label>Back to home</label>
        </div>
      </div>
    </div>
  );
}

export default ShareFiles;
