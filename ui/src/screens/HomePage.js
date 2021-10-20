import React from "react";
import HomeUploading from "../components/HomeUploading";
import HomeSec2 from "../components/HomeSec2";
import HomeSec5 from "../components/HomeSec5";
import Navbar from "../components/Navbar";
import HomeToolsBar from "../components/HomeToolsBar";
import HomeSampleTool from "../components/HomeSampleTool";
import HomeCustName from "../components/HomeCustName";
import Carousel from "react-elastic-carousel";
import HomeUpload from "../components/HomeUpload";
import Sec1Img from "../Icons/Sec1Img.svg";
import HomeSecure from "../components/HomeSecure";
import HomeInteract from "../components/HomeInteract";
import HomeSec5Scan from "../components/HomeSec5Scan";
import HomeSec5Free from "../components/HomeSec5Free";
import Footer from "../components/Footer";

function HomePage() {
  var custName = [1, 2, 3, 4, 5, 6];
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
    { width: 850, itemsToShow: 3 },
    { width: 1150, itemsToShow: 3, itemsToScroll: 2 },
    { width: 1450, itemsToShow: 4 },
    { width: 1750, itemsToShow: 5 },
  ];

  return (
    <div>
      <div>
        <Navbar></Navbar>
      </div>
      <div className="flex justify-between my-10">
        <div className="flex justify-around items-center w-6/12 bg-gradient-to-b from-blue-400 via-blue-600 to-gray-300 rounded-md">
          <HomeUpload></HomeUpload>
          <HomeSecure></HomeSecure>
          <HomeInteract></HomeInteract>
          <HomeUpload></HomeUpload>
        </div>
        <div className="w-1/12"></div>
        <div className="w-3/12">
          <img src={Sec1Img} alt={Sec1Img} />
        </div>
        <div className="w-2/12"></div>
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

      <Carousel breakPoints={breakPoints} className="px-5 mt-5">
        {custName.map((item) => (
          <HomeCustName key={item}></HomeCustName>
        ))}
      </Carousel>

      <div className="flex justify-around items-center">
        <HomeSec5></HomeSec5>
        <HomeSec5Scan></HomeSec5Scan>
        <HomeSec5Free></HomeSec5Free>
      </div>
      <div className="mt-7">
        <Footer></Footer>
      </div>
    </div>
  );
}

export default HomePage;
