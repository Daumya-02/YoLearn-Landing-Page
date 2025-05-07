import React from "react";
import finalcta from "../assets/finalcta.jpg";
import Heading from "../components/Heading";
import SubHeading from "../components/SubHeading";

const FinalCTA = () => {
  return (
    <div
      style={{ "--image-url2": `url(${finalcta})` }}
      className="min-h-[50vh] final_cta flex flex-col items-center justify-center "
    >
      <Heading text="Join The Yovolution" color="#E6F7F2"/>
      <SubHeading text="Ready to Teach Smarter?" color="#E6F7F2CC" />
      <br />
      <button className=" px-8 py-4 m-4 rounded-2xl text-white bg-[#006E63] hover:scale-105 shadow-white/20 transition-transform active:scale-95 active:shadow-none shadow-xl hover:shadow-2xl cursor-pointer">
      Start Now with Your AI Assistant →
      </button>
    </div>
  );
};

export default FinalCTA;
