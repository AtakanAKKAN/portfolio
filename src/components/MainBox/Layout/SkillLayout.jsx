import React from "react";

const SkillLayout = ({ name, icon }) => {
  return (
    <div className="border border-slate-800 rounded-md py-4 px-8 flex gap-2 justify-center items-center max-lg:py-2 max-lg:px-4 ">
      {icon}
      {name}
    </div>
  );
};

export default SkillLayout;
