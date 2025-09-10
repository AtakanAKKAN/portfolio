import React from "react";

const SkillLayout = ({ name, icon }) => {
  return (
    <div
      className="
        flex items-center justify-center gap-2
        px-6 py-3
        max-lg:px-4 max-lg:py-2
        border border-slate-300
        rounded-xl
        bg-white
        text-gray-800 font-medium
        shadow-sm hover:shadow-md
        transition-transform duration-300
        hover:scale-105
        cursor-pointer
      "
      role="listitem"
      aria-label={name}
    >
      <span className="text-2xl text-slate-700">{icon}</span>
      <span className="text-sm sm:text-base">{name}</span>
    </div>
  );
};

export default SkillLayout;
