import React from "react";

const Heading = ({ text, color,  }) => {
  return (
    <h2
      className="md:text-[33px] text-[22px] font-bold font-['Inter'] leading-[2] max-w-[90vw]"
      style={{ color: color }}
    >
      {text}
    </h2>
  );
};

export default Heading;
