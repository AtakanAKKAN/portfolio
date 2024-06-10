import React from "react";
import { MdOutlineWavingHand } from "react-icons/md";
import { IoInformationCircleOutline } from "react-icons/io5";
import { FaRegFileCode } from "react-icons/fa";
import { LuBrainCircuit } from "react-icons/lu";
import { TbFileCv } from "react-icons/tb";
import { Link } from "react-router-dom";

const AsideNavigation = () => {
  return (
    <div className="asideContentBox">
      <h1 className="asideHeader">Navigation</h1>
      <Link to="/" className="asideContent">
        <MdOutlineWavingHand /> Hello
      </Link>
      <Link to="/about" className="asideContent">
        <IoInformationCircleOutline /> Who Am I
      </Link>
      <Link to="/skills" className="asideContent">
        <LuBrainCircuit /> Skills
      </Link>
      <Link to="/myProjects" className="asideContent">
        <FaRegFileCode /> Portfolio
      </Link>
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
