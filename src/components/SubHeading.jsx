import React from 'react'

const SubHeading = ({ text, color }) => {
  return (
    <h3
      className="md:text-[22px] text-[18px] font-normal font-['Inter'] leading-[150%] mb-4 max-w-[90vw]"
      style={{ color: color }}
    >
      {text}
    </h3>
  )
}

export default SubHeading