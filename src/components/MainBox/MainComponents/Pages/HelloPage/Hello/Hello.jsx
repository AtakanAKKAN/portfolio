import React, { useEffect, useState } from "react";
import cvResim from "../../../../../../assets/img/1.jpeg";
import { motion } from "framer-motion";

const fonts = ["info", "info2", "info3", "info4"];

const Hello = () => {
  const [currentFont, setCurrentFont] = useState(fonts[0]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentFont((prevFont) => {
        const currentIndex = fonts.indexOf(prevFont);
        const nextIndex = (currentIndex + 1) % fonts.length;
        return fonts[nextIndex];
      });
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <motion.div
      initial={{
        y: 10,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.25,
      }}
      className="flex flex-col gap-10"
    >
      <div className="flex gap-10">
        <div className="size-36">
          <img
            src={cvResim}
            alt=""
            className="w-full h-full object-cover object-fix rounded-xl"
          />
        </div>

        <div className="flex flex-col justify-between text-2xl py-1">
          <span>Hey 👋​</span>
          <span>
            I'm <span className={currentFont}>Atakan Akkan</span>
          </span>
          <span>
            <span className="text-gray-600">&lt;</span>
            <span className="mr-1 text-emerald-800 font-semibold">
              Full-Stack Developer
            </span>
            <span className="text-gray-600">/&gt;</span>
          </span>
        </div>
      </div>

      <div className="w-10/12">
        I'm working to become an experienced developer in the Software
        Development field. In this profession, I'm open to learning and
        improving myself. And I enjoy learning new things. You can contact me to
        meet!
      </div>
    </motion.div>
  );
};

export default Hello;
