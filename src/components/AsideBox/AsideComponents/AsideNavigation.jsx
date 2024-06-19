import React from "react";
import { MdOutlineWavingHand } from "react-icons/md";
import { IoInformationCircleOutline } from "react-icons/io5";
import { FaRegFileCode } from "react-icons/fa";
import { LuBrainCircuit } from "react-icons/lu";
import { TbFileCv } from "react-icons/tb";

const AsideNavigation = ({ setPage, setIsNavOpen, setIsShadow }) => {
  console.log(window.innerWidth);

  return (
    <div className="asideContentBox">
      <h1 className="asideHeader">Navigation</h1>
      <span
        onClick={() => {
          setPage("");
          if (window.innerWidth <= 1024) {
            setIsNavOpen(false);
            setIsShadow(false);
          }
        }}
        className="asideContent"
      >
        <MdOutlineWavingHand /> Hello
      </span>
      <span
        onClick={() => {
          setPage("about");
          if (window.innerWidth <= 1024) {
            setIsNavOpen(false);
            setIsShadow(false);
          }
        }}
        className="asideContent"
      >
        <IoInformationCircleOutline /> Who Am I
      </span>
      <span
        onClick={() => {
          setPage("skill");
          if (window.innerWidth <= 1024) {
            setIsNavOpen(false);
            setIsShadow(false);
          }
        }}
        className="asideContent"
      >
        <LuBrainCircuit /> Skills
      </span>
      <span
        onClick={() => {
          setPage("portfolio");
          if (window.innerWidth <= 1024) {
            setIsNavOpen(false);
            setIsShadow(false);
          }
        }}
        className="asideContent"
      >
        <FaRegFileCode /> Portfolio
      </span>
      <a
        href="https://flowcv.com/resume/rpgi1sujlv"
        rel="noreferrer"
        target="_blank"
        className="asideContent"
      >
        <TbFileCv /> Wiev Cv
      </a>
    </div>
  );
};

export default AsideNavigation;
