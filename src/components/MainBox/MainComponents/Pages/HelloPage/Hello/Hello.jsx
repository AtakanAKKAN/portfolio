import React, { useEffect, useState } from "react";
import cvResim from "../../../../../../assets/img/2.jpeg";
import { motion } from "framer-motion";

const FONT_CLASSES = ["info", "info2", "info3", "info4"];

const Hello = () => {
  const [currentFontClass, setCurrentFontClass] = useState(FONT_CLASSES[0]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentFontClass((prev) => {
        const currentIndex = FONT_CLASSES.indexOf(prev);
        const nextIndex = (currentIndex + 1) % FONT_CLASSES.length;
        return FONT_CLASSES[nextIndex];
      });
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <motion.section
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col gap-10"
      aria-label="Introduction section"
    >
      {/* Profil ve başlık */}
      <div className="flex gap-8 items-center">
        <div className="size-36 shrink-0">
          <div className="p-[3px] rounded-full bg-gradient-to-tr from-teal-400 via-emerald-500 to-blue-500">
            <img
              src={cvResim}
              alt="Profile of Atakan Akkan"
              className="object-cover rounded-full shadow-md border border-white aspect-square"
              loading="lazy"
            />
          </div>
        </div>

        <div className="flex flex-col text-2xl leading-snug">
          <motion.h1
            className="font-medium"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Hey 👋
          </motion.h1>

          <motion.h2
            className="font-semibold"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            aria-live="polite"
          >
            I'm <span className={currentFontClass}>Atakan Akkan</span>
          </motion.h2>

          <motion.span
            className="flex items-center gap-1 text-lg"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <span className="text-gray-600">&lt;</span>
            <span className="text-emerald-800 font-semibold">
              Full-Stack Developer
            </span>
            <span className="text-gray-600">/&gt;</span>
          </motion.span>
        </div>
      </div>

      {/* Açıklama */}
      <motion.p
        className="w-11/12 text-lg text-gray-700 leading-relaxed"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        I'm working to become an experienced developer in the Software
        Development field. In this profession, I'm open to learning and
        improving myself. I enjoy exploring new technologies and ideas. You can
        contact me to meet!
      </motion.p>
    </motion.section>
  );
};

export default Hello;
