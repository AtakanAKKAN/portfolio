import React from "react";
import Hello from "./MainComponents/Pages/HelloPage/Hello/Hello";
import Experience from "./MainComponents/Pages/HelloPage/Experience/Experience";
import { motion } from "framer-motion";

import "./MainBox.css";

const MainBox = () => {
  return (
    <motion.div
      className="w-full h-full p-6 flex flex-col gap-10 mt-16 mb-20"
    >
      <Hello />
      <Experience />
    </motion.div>
  );
};

export default MainBox;
