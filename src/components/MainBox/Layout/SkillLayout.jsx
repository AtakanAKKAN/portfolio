import React from "react";

const SkillLayout = ({ name, icon }) => {
  return (
    <div className="border border-slate-800 shadow hover:shadow-lg rounded py-4 px-8 flex gap-2 justify-center items-center max-lg:py-2 max-lg:px-4 cursor-pointer hover:scale-125 hover:mx-3 transition-all duration-300 hover:rounded-2xl ">
      {icon}
      {name}
    </div>
  );
};

export default SkillLayout;
