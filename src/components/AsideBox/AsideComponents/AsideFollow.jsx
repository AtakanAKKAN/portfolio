import React from "react";
import { FiTwitter } from "react-icons/fi";
import { SiInstagram } from "react-icons/si";
import { FiGithub } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { CiLocationArrow1 } from "react-icons/ci";

const AsideFollow = () => {
  return (
    <div className="asideContentBox">
      <h1 className="asideHeader">Follow me!</h1>
      <a
        href="https://twitter.com/atakan_akkan"
        target="_blank"
        rel="noreferrer"
        className="asideContent group"
      >
        <FiTwitter /> Twitter
        <span className="ml-auto text-xl group-hover:text-2xl group-hover:mr-2 transition-all duration-150 ">
          <CiLocationArrow1 />
        </span>
      </a>
      <a
        href="https://www.instagram.com/atknkkan/"
        target="_blank"
        rel="noreferrer"
        className="asideContent group"
      >
        <SiInstagram /> Instagram
        <span className="ml-auto text-xl group-hover:text-2xl group-hover:mr-2 transition-all duration-150 ">
          <CiLocationArrow1 />
        </span>
      </a>
      <a
        href="https://github.com/AtakanAKKAN"
        target="_blank"
        rel="noreferrer"
        className="asideContent group"
      >
        <FiGithub /> GitHub
        <span className="ml-auto text-xl group-hover:text-2xl group-hover:mr-2 transition-all duration-150 ">
          <CiLocationArrow1 />
        </span>
      </a>
      <a
        href="https://www.linkedin.com/in/atakanakkan/"
        className="asideContent group"
        target="_blank"
        rel="noreferrer"
      >
        <FiLinkedin /> LinkedIn
        <span className="ml-auto text-xl group-hover:text-2xl group-hover:mr-2 transition-all duration-150 ">
          <CiLocationArrow1 />
        </span>
      </a>
    </div>
  );
};

export default AsideFollow;
