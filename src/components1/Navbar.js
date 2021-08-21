import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

function Navbar() {
  const clickSignIn = () => {
    console.log("hello");
    <NavLink to="/signIn">SignIn</NavLink>;
  };
  return (
    <div className="  flex h-14">
      <div className="w-3/12 flex items-center px-4 ">
        <label className="text-2xl text-blue-900 font-sans">DocTrin</label>
      </div>
      <div className="flex justify-evenly items-center w-5/12">
        <Link className="no-underline text-lg text-gray-500">Explore</Link>
        <Link className="no-underline text-lg text-gray-500">About</Link>
        <Link className="no-underline text-lg text-gray-500">Services</Link>
        <Link className="no-underline text-lg text-gray-500">Contact</Link>
      </div>
      <div className="w-2/12"></div>
      <div className="w-2/12 flex items-center justify-evenly ">
        <button
          className="bg-green-400 text-white px-3 py-1"
          onClick={clickSignIn}
        >
          Sign In
        </button>
        <button className="bg-purple-500 text-white px-3 py-1">Sign Up</button>
      </div>
    </div>
  );
}

export default Navbar;
