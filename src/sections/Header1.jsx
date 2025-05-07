import React from "react";
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import en from "../assets/en.png"
import ind from "../assets/ind.png"

const Header1 = () => {
  return (
    <div className="w-full py-[10px] md:flex justify-between hidden px-[80px] bg-[#0E479E]  ">
        <div className="text-white flex justify-between items-center">
            <div className="px-2 hover:border-b-2 mx-2">For Teachers</div>
            <div className="px-2 hover:border-b-2 mx-2">For Students</div>
            <div className="px-2 hover:border-b-2 mx-2">For Schools </div>
            <div className="px-2 hover:border-b-2 mx-2">For Organisations</div>
        </div>
        <div className="flex text-white cursor-pointer">
            <div className="flex hover:font-bold mx-2 items-center">
                <img src={en} alt="" className="h-[20px] w-[20px] rounded-full " />
                <p className="mx-2">EN</p>
                <FaAngleDown />
            </div>
            <div className="flex hover:font-bold mx-2 items-center">
                <img src={ind} alt="" className="h-[20px] w-[20px] rounded-full" />
                <p className="mx-2">IND</p>
                <FaAngleDown />
            </div>
        </div>
    </div>
  );
};

export default Header1;