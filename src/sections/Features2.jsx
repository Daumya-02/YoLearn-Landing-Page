import React from "react";
import Heading from "../components/Heading";
import SubHeading from "../components/SubHeading";
import Marquee from "../components/Marquee";
import { TiTick } from "react-icons/ti";

const Features2 = () => {
  const marquee2 = [
    "Works in your language",
    "Save hours every week",
    "School-ready",
    "Student-safe",
    "Save hourse every week",
    "Aligned to global curriculum",
    "No training needed",
  ];

  const whyTeachersLoveYolearn = [
    {
      icon: "🕒 ",
      text: "Save time across lesson prep, content, communication",
    },
    {
      icon: "🧑‍🏫",
      text: "Improve instructional quality with research-aligned templates",
    },
    {
      icon: "🧠",
      text: "Create engaging, differentiated content in minutes",
    },
    {
      icon: "🧑‍🤝‍🧑",
      text: "Multiply your presence with a co-teacher avatar",
    },
    {
      icon: "📈",
      text: "Get actionable analytics + smart student reports",
    },
    {
      icon: "💬",
      text: "Better emotional connection with students",
    },
    {
      icon: "🧰",
      text: "All-in-one toolset: planner, designer, communicator",
    },
    {
      icon: "🌐",
      text: "Available 24/7, from any device",
    }
  ];

  return (
    <div className="min-h-[100vh] w-full bg-[#66DDAA] flex flex-col items-center py-15 ">
      <Heading text="Why Teachers ❤ YoLearn.ai" color="#1A1B41" />

      <SubHeading
        text="Explore the AI-powered tools that simplify your day, spark engagement, and save hours of effort."
        color="#005E57"
      />

      <br />

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

      {/* grid */}
      <div className="max-w-[80vw] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 m-2 px-2 my-10 gap-3">
        {whyTeachersLoveYolearn.map((item, index) => {
          return (
            <div
              className="bg-white p-5 m-1 text-left rounded-lg shadow-md hover:scale-103 border-2 border-[#00BBA6] "
              key={index}
            >
              {item.icon}
              <p className="my-3">{item.text}</p>
            </div>
          );
        })}
      </div>

      <button className=" px-8 py-4 m-4 rounded-2xl text-white bg-[#006E63] hover:scale-105 transition-transform active:scale-95 active:shadow-none shadow-xl hover:shadow-2xl cursor-pointer">
        Get Started for Free →
      </button>
    </div>
  );
};

export default Features2;
