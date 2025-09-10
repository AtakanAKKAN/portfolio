import React from "react";
import SkillLayout from "../../../Layout/SkillLayout";
import {
  FaHtml5,
  FaReact,
  FaNodeJs,
  FaBootstrap,
  FaGitAlt,
} from "react-icons/fa";
import { IoLogoCss3, IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiAntdesign, SiNextdotjs, SiOpenai } from "react-icons/si";
import { BsFillLightningChargeFill } from "react-icons/bs";
import { BiLogoMongodb } from "react-icons/bi";
import { GiStack } from "react-icons/gi";
import { motion } from "framer-motion";

const skills = [
  { name: "HTML", icon: <FaHtml5 /> },
  { name: "CSS", icon: <IoLogoCss3 /> },
  { name: "JavaScript", icon: <IoLogoJavascript /> },
  { name: "Bootstrap", icon: <FaBootstrap /> },
  { name: "React", icon: <FaReact /> },
  { name: "Tailwind CSS", icon: <RiTailwindCssFill /> },
  { name: "Ant Design", icon: <SiAntdesign /> },
  { name: "Express.js", icon: <BsFillLightningChargeFill /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "MongoDB", icon: <BiLogoMongodb /> },
  { name: "Git", icon: <FaGitAlt /> },
  { name: "MERN Stack", icon: <GiStack /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "ChatGPT", icon: <SiOpenai /> },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const SkillPage = () => {
  return (
    <motion.section
      className="w-full h-full p-6 flex flex-col gap-10 pt-20 pb-24"
      initial="hidden"
      animate="show"
      variants={container}
      aria-label="Skills section"
    >
      <h1 className="text-5xl font-extrabold mb-6 max-lg:text-center">
        My Skills
      </h1>

      <motion.ul
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
        variants={container}
      >
        {skills.map((skill) => (
          <motion.li key={skill.name} variants={item}>
            <SkillLayout name={skill.name} icon={skill.icon} />
          </motion.li>
        ))}
      </motion.ul>
    </motion.section>
  );
};

export default SkillPage;
