import React from "react";
import Heading from "../components/Heading";
import SubHeading from "../components/SubHeading";
import Marquee from "../components/Marquee";
import { IoEarthOutline } from "react-icons/io5";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { TbPlant } from "react-icons/tb";
import { BsStars } from "react-icons/bs";
import { IoPersonOutline } from "react-icons/io5";
import { TiTick } from "react-icons/ti";

const Section2 = () => {
  const marquee1 = [
    {
      icon: <IoEarthOutline color="#1A1B41" />,
      text: "Global Platform",
    },
    {
      icon: <IoChatbubbleEllipsesOutline color="#1A1B41" />,
      text: "Localized Content for Every Region",
    },
    {
      icon: <TbPlant color="#1A1B41" />,
      text: "K-12 Coverage",
    },
    {
      icon: <IoPersonOutline color="#1A1B41" />,
      text: "All Major Curriculums",
    },
    {
      icon: <BsStars color="#1A1B41" />,
      text: "Mulitlingual Support",
    },
  ];

  const marquee2 = [
    "Works in your language",
    "Save hours every week",
    "School-ready",
    "Student-safe",
    "Save hourse every week",
    "Aligned to global curriculum",
    "No training needed",
  ];

  return (
    <div className="h-[50vh] md:h-[50vh] lg:h-[50vh] min-w-full bg-[#66DDAA] px-4 md:px-8 lg:px-16 py-4 md:py-8 lg:py-16 flex flex-col text-center">
      <Heading
        text="Built for Teachers. Powered by AI. Trusted by Schools."
        color="#1A1B41"
      />
      <SubHeading
        text="Any Country, Any curriculum/board, Any Language- Global Platform-Localized
		solution"
        color="#1A1B41"
      />
      <br />
      <Marquee direction={"left"}>
        {marquee1.map((item, index) => {
          return (
            <div
              className="px-5 py-2 mx-4 flex gap-4 items-center justify-center bg-white rounded-full"
              key={index}
            >
              {item.icon}
              <span className="text-1xl text-black ">{item.text}</span>
            </div>
          );
        })}
      </Marquee>

      <Marquee direction={"right"}>
        {marquee2.map((item, index) => {
          return (
            <div
              className="px-5 py-2 mx-4 flex gap-4 items-center justify-center"
              key={index}
            >
              <TiTick color="black" />
              <span className="text-1xl text-black ">{item}</span>
            </div>
          );
        })}
      </Marquee>
      {/* <svg
        width="1440"
        height="62"
        viewBox="0 0 1440 62"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
		className="w-full bg-no-repeat scale-125 relative bottom-0"
      >
        <path
          d="M1276.01 52.82C1389.04 53.9777 1454.21 15.034 1505.48 0L1514 130H-184V64.397C-146.423 47.2727 -47.5187 13.0241 47.4771 13.0241C166.222 13.0241 157.203 52.82 229.853 52.82C302.503 52.82 368.639 14.2301 455.318 14.2301C544.502 14.2301 555.524 36.4193 688.799 36.4193C822.074 36.4193 874.181 7.23562 987.916 7.23562C1108.16 7.23562 1134.72 51.3729 1276.01 52.82Z"
          fill="#71D9E2"
        />
      </svg> */}
    </div>
  );
};

export default Section2;
