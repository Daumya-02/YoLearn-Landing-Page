import React from "react";
import headerlogo from "../assets/headerlogo.png";
import { FaAngleDown } from "react-icons/fa6";

const Header2 = () => {
  return (
    <div className="backdrop-blur-md pt-6 pb-2 px-10 flex justify-between items-center bg-white/30 sticky top-0 z-50 mb-8">
      <img
        src={headerlogo}
        alt="Yolearn.ai"
        className="md:h-[8vh] h-[10vh] mx-3 cursor-pointer"
      />

      <div className="md:flex justify-between items-center hidden ">
        <div className=" group relative flex justify-between items-center text-lg text-black cursor-pointer hover:font-bold mx-5">
          For Teachers
          <FaAngleDown className="ml-2" />

          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 border-1 absolute top-5 -right-2 bg-white text-gray-600 rounded-2xl text:md ">
              <p className="hover:text-black hover:font-bold text-sm cursor-pointer">
                lorem ipsum
              </p>
              <p className="hover:text-black hover:font-bold text-sm cursor-pointer">
                lorem ipsum
              </p>
              <p className="hover:text-black hover:font-bold text-sm cursor-pointer">
                lorem ipsum
              </p>
            </div>
          </div>
        </div>
        <div className="group relative flex justify-between items-center text-lg text-black cursor-pointer hover:font-bold mx-5">
          Resources
          <FaAngleDown className="ml-2" />
          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 border-1 absolute top-5 -right-2 bg-white text-gray-600 rounded-2xl text:md ">
              <p className="hover:text-black hover:font-bold text-sm cursor-pointer">
                lorem ipsum
              </p>
              <p className="hover:text-black hover:font-bold text-sm cursor-pointer">
                lorem ipsum
              </p>
              <p className="hover:text-black hover:font-bold text-sm cursor-pointer">
                lorem ipsum
              </p>
            </div>
          </div>
        </div>
        <div className="group relative flex justify-between items-center text-lg text-black cursor-pointer hover:font-bold mx-5">
          About Us
          <FaAngleDown className="ml-2" />
          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 border-1 absolute top-5 -right-2 bg-white text-gray-600 rounded-2xl text:md ">
              <p className="hover:text-black hover:font-bold text-sm cursor-pointer">
                lorem ipsum
              </p>
              <p className="hover:text-black hover:font-bold text-sm cursor-pointer">
                lorem ipsum
              </p>
              <p className="hover:text-black hover:font-bold text-sm cursor-pointer">
                lorem ipsum
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex mx-2 items-center">
        <a
          href="#"
          className="text-[#006E63] underline hover:text-[#366e69] font-bold font-lg mx-7"
        >
          Login
        </a>
        <button className="border-2 border-[#006E63] rounded-lg w-full sm:w-auto py-1 px-3 text-sm md:text-lg text-white bg-[#006E63] cursor-pointer flex items-center justify-center hover:scale-101 active:scale-99 transition-transform">
          Get started for free →
        </button>
      </div>
    </div>
  );
};

export default Header2;
