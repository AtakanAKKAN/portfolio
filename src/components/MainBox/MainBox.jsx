import React from "react";
import Hello from "./MainComponents/Pages/HelloPage/Hello/Hello";
import Experience from "./MainComponents/Pages/HelloPage/Experience/Experience";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35 } },
};

const MainBox = () => {
  return (
    <motion.main
      className="w-full h-full p-6 flex flex-col gap-14 lg:gap-20 pt-20 lg:pt-24 pb-20"
      initial="hidden"
      animate="show"
      variants={containerVariants}
      id="main-content"
    >
      <motion.section variants={childVariants}>
        <Hello />
      </motion.section>

      <motion.section variants={childVariants}>
        <Experience />
      </motion.section>
    </motion.main>
  );
};

export default MainBox;
