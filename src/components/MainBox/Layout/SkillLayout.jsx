import React from "react";

const SkillLayout = ({ name, icon }) => {
  return (
    <div className="border border-slate-800 rounded-md py-4 px-16 flex gap-2 justify-center items-center">
      {icon}
      {name}
    </div>
  );
};

export default SkillLayout;
