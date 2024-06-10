import React from "react";
import Utility from "../../../../Layout/Utility";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 0.5,
      }}
      className="flex flex-col gap-8"
    >
      <h1 className="font-bold text-xl">Experience</h1>

      <div className="flex gap-5">
        <span>2022</span>
        <div className="flex flex-col gap-4">
          <span className="text-gray-500">March - Present</span>
          <span className="text-gray-800">
            <span className="text-xl">UpWork & Fiverr</span> - Front-End
            Developer{" "}
          </span>

          <div className="border-l-4 border-teal-500 pl-6 relative flex flex-col gap-5">
            <div className="absolute size-6 bg-teal-300 border-teal-500 border-2 rounded-full -left-3.5 top-4"></div>
            <h2>Web Pages || HTML Bug Fix || CSS Bug Fix || API</h2>
            <span>
              Powerful, dynamic, user-friendly, artificial intelligence
              supported
            </span>
            <div className="flex flex-wrap gap-3 w-11/12">
              <Utility name="HTML" />
              <Utility name="CSS" />
              <Utility name="Javascript" />
              <Utility name="Bootstrap" />
              <Utility name="Tailwind CSS" />
              <Utility name="React" />
              <Utility name="Express.js" />
              <Utility name="Node.js" />
              <Utility name="MongoDb" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
