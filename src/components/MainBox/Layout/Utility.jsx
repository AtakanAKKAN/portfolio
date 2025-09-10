import React from "react";

const Utility = ({ name }) => {
  return (
    <span
      className="
        inline-block 
        px-3 py-1 
        text-xs font-medium
        border border-gray-300 
        rounded-full 
        bg-gray-50 
        text-gray-700
        whitespace-nowrap
        hover:bg-teal-50 
        hover:border-teal-400 
        hover:text-teal-700
        focus:outline-none 
        focus:ring-2 
        focus:ring-teal-400 
        transition
        cursor-pointer
      "
    >
      {name}
    </span>
  );
};

export default Utility;
