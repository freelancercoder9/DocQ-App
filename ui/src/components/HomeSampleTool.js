import React from "react";

function HomeSampleTool() {
  return (
    <div>
      <div className="sample-tool rounded-md">
        <label className="text-2xl font-sans p-2">Sample Tool</label>
        <label className="text-lg font-sans p-2">
          Sample Tool description , its features in short only for customer
          attraction ..
        </label>
        <div className="flex justify-end p-2">
          <div className="text-white bg-purple-400 px-4 py-2 rounded-md">
            Test For Free
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeSampleTool;
