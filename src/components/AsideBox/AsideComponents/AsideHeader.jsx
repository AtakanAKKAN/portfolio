import React from "react";

const tags = [
  "Gamer",
  "Basketball Player",
  "Music Lover",
  "Full-Stack Developer",
];

const AsideHeader = () => {
  return (
    <header className="flex flex-col gap-3">
      <h2 className="text-xs font-semibold text-gray-600 tracking-wide uppercase">
        Headline
      </h2>

      <ul className="flex flex-col gap-1">
        {tags.map((tag) => (
          <li key={tag}>
            <span
              className="
                block text-base px-2 py-1 rounded-md
                transition-all duration-200
                cursor-default
                hover:bg-slate-100 hover:text-teal-700
              "
            >
              {tag}
            </span>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default AsideHeader;
