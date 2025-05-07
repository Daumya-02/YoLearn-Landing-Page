import React, { useState } from "react";

const Accordion = ({ heading, arr }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <>
      <h4 className="font-bold my-2 text-lg text-white">{heading}</h4>
    <div className="bg-white rounded-xl p-3">
      {arr.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div className="py-2 border-b-2 border-[#00BBA633]" key={index}>
            <button
              onClick={() => toggleAccordion(index)}
              className="flex justify-between w-full text-left"
            >
              <span className={`${isOpen && "underline"}`}>{item.title}</span>
              <svg
                className="fill-indigo-500 shrink-0 ml-8"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  y="7"
                  width="16"
                  height="2"
                  rx="1"
                  className={`transform origin-center transition duration-200 ease-out ${
                    isOpen && "!rotate-180"
                  }`}
                />
                <rect
                  y="7"
                  width="16"
                  height="2"
                  rx="1"
                  className={`transform origin-center rotate-90 transition duration-200 ease-out ${
                    isOpen && "!rotate-180"
                  }`}
                />
              </svg>
            </button>
            <div
              className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${
                isOpen
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">{item.answer}</div>
            </div>
          </div>
        );
      })}
    </div>
    </>
  );
};

export default Accordion;
