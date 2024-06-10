import React from "react";
import { MdOutlineWavingHand } from "react-icons/md";
import { IoInformationCircleOutline } from "react-icons/io5";
import { FaRegFileCode } from "react-icons/fa";
import { LuBrainCircuit } from "react-icons/lu";
import { TbFileCv } from "react-icons/tb";

const AsideNavigation = ({ setPage }) => {
  return (
    <div className="asideContentBox">
      <h1 className="asideHeader">Navigation</h1>
      <span onClick={() => setPage("")} className="asideContent">
        <MdOutlineWavingHand /> Hello
      </span>
      <span  onClick={() => setPage("about")} className="asideContent">
        <IoInformationCircleOutline /> Who Am I
      </span>
      <span  onClick={() => setPage("skill")}  className="asideContent">
        <LuBrainCircuit /> Skills
      </span>
      <span onClick={() => setPage("portfolio")}  className="asideContent">
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
