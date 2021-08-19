import React from "react";
import InteractIcon from "../Icons/InteractIcon.svg";

function HomeInteract() {
  return (
    <div>
      <div className="sec1-main flex flex-col items-center justify-between bg-white">
        <img src={InteractIcon} className="sec1-img mt-5" />
        <label className="font-sans font-semibold text-2xl">Interact</label>
      </div>
    </div>
  );
}

export default HomeInteract;
