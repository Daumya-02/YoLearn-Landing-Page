import React from "react";
import Heading from "../components/Heading";
import SubHeading from "../components/SubHeading";
import BlobImage from "../assets/BlobImage.png";

const HeroSection = () => {
  return (
    <div className="min-h-[100vh] -mt-8 relative pb-24 md:pb-32 overflow-hidden max-w-[100vw]">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 max-[100vw]">
        <div className="flex flex-col-reverse lg:flex-row lg:justify-between lg:items-center gap-6 lg:gap-12 pt-12">
          {/* right side */}
          <div className="max-w-[90vw] lg:max-w-[50%] mx-auto lg:mx-0 text-center lg:text-left mt-6 lg:mt-0">
            <Heading text="PLAN" color="#40E0D0" />
            <h1 className="text-[32px] md:text-[48px] lg:text-[64px] font-bold font-['Poppins'] leading-[1.1] md:leading-[1]">
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
            {/* button */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-5">
              <button className="border-2 border-[#006E63] rounded-lg px-5 py-2 mt-2 w-full sm:w-auto shadow-md text-lg md:text-xl text-white bg-[#006E63] cursor-pointer flex items-center justify-center hover:scale-105 active:scale-95 transition-transform">
                Get started for free →
              </button>
              <button className="border-2 rounded-lg text-[#00BBA6] px-5 py-2 mt-2 w-full sm:w-auto shadow-md text-lg sm:text-xl cursor-pointer flex items-center justify-center hover:scale-105 active:scale-95 transition-transform">
                Explore Now
              </button>
            </div>
          </div>

          {/* left side */}
          <div
            style={{ backgroundImage: `url(${BlobImage})` }}
            className="md:h-[35vw] md:w-[35vw] h-[70vw] w-[70vw] rounded-full overflow-hidden bg-cover bg-center mx-auto lg:mx-0 lg:h-[30vw] lg:w-[30vw]"
          ></div>
        </div>
      </div>


      <div className="absolute bottom-0 left-0 right-0 w-full">
        <svg
          width="100%"
          height="auto"
          viewBox="0 0 1440 210"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M184.5 104C12 104 -94.3333 166.333 -123 196V329.5H1466.5V0.5C1258 0.5 1170.04 196 867 196C585.5 196 422.042 104 184.5 104Z"
            fill="#66DDAA"
          />
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;
