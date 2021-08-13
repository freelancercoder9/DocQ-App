import React from "react";
import "../style.css";
import FooterSocial from "./FooterSocial";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div className="footer-main h-60 flex justify-around items-center bg-blue-900">
      <div className="flex w-3/12 h-full justify-around ">
        <div className="flex flex-col items-start justify-evenly w-4/12 ">
          <Link className="no-underline text-white text-base">Home</Link>
          <Link className="no-underline text-white text-base">About Us</Link>
          <Link className="no-underline text-white text-base">Contact Us</Link>
          <Link className="no-underline text-white text-base">
            Subscriptions
          </Link>
        </div>
        <div className="flex flex-col justify-evenly items-start w-4/12 ">
          <Link className="no-underline text-white text-base">FAQ's</Link>
          <Link className="no-underline text-white text-base">Career</Link>
          <Link className="no-underline text-white text-base">
            Terms of use
          </Link>
          <Link className="no-underline text-white text-base">Disclamier</Link>
        </div>
      </div>
      <div className="w-4/12">
        <FooterSocial></FooterSocial>
      </div>
      <div className="font-sans text-white text-base w-3/12">
        Address: <br />
        <br />
        102 Sample Address , city , State <br /> <br />
        Toll free : 1800 00 000 <br />
        <br /> Our service time : 9pm to 10am
      </div>
    </div>
  );
}

export default Footer;
