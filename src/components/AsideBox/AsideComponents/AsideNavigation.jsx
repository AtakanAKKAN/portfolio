import React, { useCallback } from "react";
import { MdOutlineWavingHand } from "react-icons/md";
import { IoInformationCircleOutline } from "react-icons/io5";
import { FaRegFileCode } from "react-icons/fa";
import { LuBrainCircuit } from "react-icons/lu";
import { TbFileCv } from "react-icons/tb";

const navItems = [
  { key: "", label: "Hello", icon: <MdOutlineWavingHand /> },
  { key: "about", label: "Who Am I", icon: <IoInformationCircleOutline /> },
  { key: "skill", label: "Skills", icon: <LuBrainCircuit /> },
  { key: "portfolio", label: "Portfolio", icon: <FaRegFileCode /> },
];

const baseItemCls =
  "w-full text-left flex items-center gap-2 px-2 py-1 rounded-md transition-all duration-200 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-teal-400";

const AsideNavigation = ({
  setPage,
  setIsNavOpen,
  setIsShadow,
  currentPage,
}) => {
  // setIsShadow artık kullanılmıyorsa App ve AsideBox'tan tamamen kaldırabilirsin.
  const closeOnMobile = useCallback(() => {
    if (typeof window !== "undefined" && window.innerWidth <= 1024) {
      setIsNavOpen?.(false);
      setIsShadow?.(false);
    }
  }, [setIsNavOpen, setIsShadow]);

  const handleNavigate = (key) => {
    setPage?.(key);
    closeOnMobile();
  };

  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-xs font-semibold text-gray-600 tracking-wide uppercase mb-2">
        Navigation
      </h2>

      <ul className="flex flex-col gap-1">
        {navItems.map((item) => {
          const isActive = currentPage === item.key; // opsiyonel aktiflik
          return (
            <li key={item.key}>
              <button
                type="button"
                onClick={() => handleNavigate(item.key)}
                className={`${baseItemCls} ${
                  isActive ? "bg-slate-100 text-teal-700" : ""
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            </li>
          );
        })}

        <li>
          <a
            href="https://flowcv.com/resume/rpgi1sujlv"
            rel="noopener noreferrer"
            target="_blank"
            className={`${baseItemCls} inline-flex`}
            onClick={closeOnMobile}
            aria-label="View CV on FlowCV (opens in a new tab)"
          >
            <TbFileCv />
            <span>View CV</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default AsideNavigation;
