import React, { useRef } from "react";
import Heading from "../components/Heading";
import SubHeading from "../components/SubHeading";
import BlobImage from "../assets/BlobImage.png";

const HeroSection = () => {

  return (
    <div className="max-h-[100vh] -mt-8">
      <div className="lg:flex lg:justify-between lg:items-center  gap-2 px-18">
        {/* right content */}
        <div className=" max-w-[90vw] min-w-[50vw] mx-auto text-left">
          <Heading text="PLAN" color="#40E0D0" />
          <h1 className="text-[32px] md:text-[64px] font-bold font-['Poppins'] leading-[1]">
            Your AI Teaching Assistants Team
          </h1>
          <Heading
            text="Smarter planning. Effortless teaching. Exponential impact."
            color="#40E0D0"
          />
          <SubHeading
            text="Unlock the power of AI for personalized lesson planning, resource creation, classroom management, and student support — all in one intelligent workspace."
            color="#1A1B41B2"
          />
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-5">
            <button className="border-2 border-[#006E63] rounded-lg px-5 py-2 mt-2 w-full sm:w-auto shadow-xl/30 text-lg md:text-xl text-white bg-[#006E63] cursor-pointer flex items-center justify-center hover:scale-105 active:scale-95 transition-transform">
              Get started for free →
            </button>
            <button className="border-2 rounded-lg text-[#00BBA6] px-5 py-2 mt-2 w-full sm:w-auto shadow-xl/30 text-lg sm:text-xl cursor-pointer flex items-center justify-center hover:scale-105 active:scale-95 transition-transform">
              Explore Now
            </button>
          </div>
        </div>

        {/* left content */}
        <div
        style={{backgroundImage:`url(${BlobImage})`}}
        className="md:h-[40vw] md:w-[40vw] h-[50vw] w-[50vw] rounded-full overflow-hidden bg-cover bg-center mx-auto my-5 border-[#40E0D0] border border-solid lg:my-0 lg:scale-75">
        </div>
      </div>
      <svg
        width="100%"
        height="auto"
        viewBox="0 0 1440 210"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="md:-mt-33 -mt-18"
      >
        <path
          d="M184.5 104C12 104 -94.3333 166.333 -123 196V329.5H1466.5V0.5C1258 0.5 1170.04 196 867 196C585.5 196 422.042 104 184.5 104Z"
          fill="#66DDAA"
        />
      </svg>
    </div>
  );
};

export default HeroSection;
