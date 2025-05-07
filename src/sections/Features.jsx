import React from "react";
import Heading from "../components/Heading";

const Features = () => {
  const AITeachingWorkspaces = [
    {
      icon: "🧭",
      heading: "Plan",
      para: "Everything you need to plan smarter.",
      l1: "Curriculum Mapper",
      l2: "Calendar Planner",
    },
    {
      icon: "🎨",
      heading: "Design",
      para: "Tools to help you design engaging learning.",
      l1: "Lesson Planner",
      l2: "Quiz Builder",
    },
    {
      icon: "🛠️",
      heading: "Create",
      para: "Turn ideas into educational resources.",
      l1: "Worksheet Generator",
      l2: "Slideshow Builder",
    },
    {
      icon: "📊",
      heading: "Manage",
      para: "Organize your class and gain insight.",
      l1: "Completion Analytics",
      l2: "Report Card Generator",
    },
    {
      icon: "🌱",
      heading: "Grow",
      para: "Upskill with personal + professional growth.",
      l1: "Self Assessment",
      l2: "Certifications",
    },
    {
      icon: "💰",
      heading: "Earn",
      para: "Share, scale, and monetize your expertise.",
      l1: "Create your AI Co-teacher",
      l2: "Teach at Scale",
    },
  ];

  return (
    <div className="bg-[#71D9E2] w-full min-h-[100vh] p-15 flex flex-col text-center items-center ">
      <Heading text="Your AI-Powered Teaching Workspaces" color="#1A1B41" />
      <br />
      <br />
      {/* grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 m-2 p-2">
        {AITeachingWorkspaces.map((item, index) => {
          return (
            <div
              className="p-5 m-1 rounded-md shadow-sm border bg-white border-gray-400 hover:scale-105 transition-transform hover:shadow-2xl"
              key={index}
            >
              <div className="flex gap-2 m-3">
                {item.icon}
                <h5 className="font-bold text-black">{item.heading}</h5>
              </div>
              <p className="text-left">{item.para}</p>
              <ul className="text-left list-disc list-inside">
                <li className="flex items-center gap-1 before:content-['•'] before:text-[black] before:mr-1">
                  {item.l1}
                </li>
                <li className="flex items-center gap-1 before:content-['•'] before:text-[black] before:mr-1">
                  {item.l2}
                </li>
              </ul>
              <div className="text-right mt-6">
                <a
                  href=""
                  className="text-[#006E63] hover:scale-105 hover:cursor-pointer"
                >
                  explore workspace --
                </a>
                <br />
                <a
                  href=""
                  className="underline text-[#006E63] hover:scale-105 hover:cursor-pointer"
                >
                  see features
                </a>
              </div>
            </div>
          );
        })}
      </div>

      <button className=" px-8 py-4 m-4 rounded-2xl text-white bg-[#006E63] hover:scale-105 transition-transform active:scale-95 active:shadow-none shadow-xl hover:shadow-2xl cursor-pointer">
        Explore Plan Workshop →
      </button>
      {/* <svg
        width="100%"
        height="auto"
        viewBox="0 0 1440 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-[100"
      >
        <path
          d="M1366.01 75.5733C1479.04 77.2297 1544.21 21.5102 1595.48 0L1604 186H-94V92.1373C-56.4226 67.6364 42.4813 18.6345 137.477 18.6345C256.222 18.6345 247.203 75.5733 319.853 75.5733C392.503 75.5733 458.639 20.3599 545.318 20.3599C634.502 20.3599 645.524 52.1076 778.799 52.1076C912.074 52.1076 964.181 10.3525 1077.92 10.3525C1198.16 10.3525 1224.72 73.5028 1366.01 75.5733Z"
          fill="#00BBA6"
        />
      </svg> */}

      {/* <svg
        width="100%"
        height="auto"
        viewBox="0 0 1440 92"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-[100vw] -mb-15"
      >
        <path
          d="M131.797 92.6382C24.5551 94.6686 -37.2735 26.3673 -85.9189 0L-94 228H1517V112.942C1481.35 82.9091 1387.51 22.8423 1297.38 22.8423C1184.72 22.8423 1193.28 92.6382 1124.35 92.6382C1055.42 92.6382 992.676 24.9573 910.439 24.9573C825.824 24.9573 815.366 63.8738 688.92 63.8738C562.474 63.8738 513.037 12.6902 405.13 12.6902C291.043 12.6902 265.849 90.1002 131.797 92.6382Z"
          fill="#66DDAA"
        />
      </svg> */}
    </div>
  );
};

export default Features;
