import React from "react";
import {motion} from "motion/react"

const Marquee = ({ children, direction, duration = 15 }) => {
    
// usage

    // <div className=" items-center justify-center p-4 m-2">
    //   <Marquee direction="left">
    //     {txt.map((text, index) => (
    //       <div
    //         key={index}
    //         className="text-white mr-10 px-10 py-1 border flex items-center justify-center rounded-full max-w-max"
    //       >
    //         {text}
    //       </div>
    //     ))}
    //   </Marquee>
    // </div>

  return (
    <div className="horizontal-gradient marquee-container flex w-full whitespace-nowrap overflow-x-hidden mx-auto my-3 text-gray-300">
      <motion.div
        initial={{
          x: direction === "right" ? "-100%" : direction === "left" ? "0" : 0,
        }}
        animate={{
          x: direction === "right" ? "0" : direction === "left" ? "-100%" : 0,
        }}
        transition={{ duration: duration, repeat: Infinity, ease: "linear" }}
        className="flex flex-shrink-0 space-x-6"
      >
        {children}
      </motion.div>
      <motion.div
        initial={{
          x: direction === "right" ? "-100%" : direction === "left" ? "0" : 0,
        }}
        animate={{
          x: direction === "right" ? "0" : direction === "left" ? "-100%" : 0,
        }}
        transition={{ duration: duration, repeat: Infinity, ease: "linear" }}
        className="flex flex-shrink-0 space-x-6"
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Marquee;
