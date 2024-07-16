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

const SkillPage = () => {
  return (
    <motion.div
      initial={{
        y: 35,
      }}
      animate={{
        y: 0,
      }}
      transition={{
        duration: 0.5,
      }}
      className="w-full h-full p-6 flex flex-col gap-10 mt-16 mb-20"
    >
      <h1 className="text-5xl font-extrabold mb-10 max-lg:text-center">
        My Skills.
      </h1>
      <motion.div
        initial={{
          y: 35,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1,
        }}
        className="flex flex-wrap gap-3 w-12/12 m-auto"
      >
        <SkillLayout name={"HTML"} icon={<FaHtml5 />} />
        <SkillLayout name={"CSS"} icon={<IoLogoCss3 />} />
        <SkillLayout name={"JavaScript"} icon={<IoLogoJavascript />} />
        <SkillLayout name={"Bootstrap"} icon={<FaBootstrap />} />
        <SkillLayout name={"React"} icon={<FaReact />} />
        <SkillLayout name={"Tailwind CSS"} icon={<RiTailwindCssFill />} />
        <SkillLayout name={"AntDesign"} icon={<SiAntdesign />} />
        <SkillLayout name={"Express.js"} icon={<BsFillLightningChargeFill />} />
        <SkillLayout name={"Node.js"} icon={<FaNodeJs />} />
        <SkillLayout name={"Mongodb"} icon={<BiLogoMongodb />} />
        <SkillLayout name={"Git"} icon={<FaGitAlt />} />
        <SkillLayout name={"MERN Stack"} icon={<GiStack />} />
        <SkillLayout name={"Next.js"} icon={<SiNextdotjs />} />
        <SkillLayout name={"ChatGbt"} icon={<SiOpenai />} />
      </motion.div>
    </motion.div>
  );
};

export default SkillPage;
