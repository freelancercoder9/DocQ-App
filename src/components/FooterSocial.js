import React from "react";
import "../style.css";
import Facebook from "../Icons/Facebook.svg";
import Instagram from "../Icons/Instagram.svg";
import Twitter from "../Icons/Twitter.svg";
import Youtube from "../Icons/Youtube.svg";
import Linkedin from "../Icons/Linkedin.svg";

function FooterSocial() {
  return (
    <div>
      <div className="flex justify-evenly items-center">
        <img src={Facebook} className="" />
        <img src={Instagram} className="" />
        <img src={Twitter} className="" />
        <img src={Youtube} className="" />
        <img src={Linkedin} className="" />
      </div>
      <div className=" text-center">
        <label className="text-4xl text-white font-semibold mt-3">
          DocTrin
        </label>
        <div>
          <label className="text-white text-xs">Copyrighted @ 2021</label>
        </div>
      </div>
    </div>
  );
}

export default FooterSocial;
