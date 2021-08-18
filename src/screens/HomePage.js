import React, { Component } from "react";
import HomeUploading from "../components/HomeUploading";
import HomeSec2 from "../components/HomeSec2";
import HomeSec5 from "../components/HomeSec5";
import Navbar from "../components1/Navbar";
import HomeToolsBar from "../components/HomeToolsBar";
import HomeSampleTool from "../components/HomeSampleTool";
import HomeCustName from "../components/HomeCustName";
import Footer from "../components/Footer";
import ScrollMenu from "react-horizontal-scrolling-menu";
import HomeUpload from "../components/HomeUpload";
import Sec1Img from "../Icons/Sec1Img.svg";

function HomePage() {
  return (
    <div>
      <div>
        <Navbar></Navbar>
      </div>
      <div className="flex justify-around my-10">
        <div className="flex items-center bg-yellow-300">
          <div>
            <HomeUpload></HomeUpload>
          </div>
          <div className="mx-5">
            <HomeUpload></HomeUpload>
          </div>
          <div>
            <HomeUpload></HomeUpload>
          </div>
        </div>
        <div className="bg-pink-200">
          <img src={Sec1Img} className="" />
        </div>
      </div>
      <div className="mt-3 flex justify-center items-center ">
        <label className="text-xl font-sans mr-16">
          Get Started with a document
        </label>
        <button className="bg-red-50 text-lg rounded-sm py-2 px-3">
          Start
        </button>
      </div>
      <div className="flex justify-around items-center my-5">
        <HomeUploading></HomeUploading>
        <HomeSec2></HomeSec2>
      </div>
      <div className="text-center">
        <label className="text-2xl font-sans font-semibold">
          We make your Document Special{" "}
        </label>
      </div>
      <div className="mt-14">
        <HomeToolsBar></HomeToolsBar>
      </div>
      <div className="grid grid-flow-row grid-cols-4 gap-4 p-5 my-3">
        <HomeSampleTool></HomeSampleTool>
        <HomeSampleTool></HomeSampleTool>
        <HomeSampleTool></HomeSampleTool>
        <HomeSampleTool></HomeSampleTool>
        <HomeSampleTool></HomeSampleTool>
        <HomeSampleTool></HomeSampleTool>
        <HomeSampleTool></HomeSampleTool>
      </div>
      <div className="text-center">
        <label className="text-3xl font-sans font-semibold">
          “ Our Customers have something to Say ”
        </label>
      </div>

      <div className="grid grid-flow-row grid-cols-4 gap-4 p-5 my-3">
        <HomeCustName></HomeCustName>
        <HomeCustName></HomeCustName>
        <HomeCustName></HomeCustName>
        <HomeCustName></HomeCustName>
      </div>
      <div className="flex justify-around items-center">
        <HomeSec5></HomeSec5>
        <HomeSec5></HomeSec5>
        <HomeSec5></HomeSec5>
      </div>
      <div className="mt-7">
        <Footer></Footer>
      </div>
    </div>
  );
}

export default HomePage;
