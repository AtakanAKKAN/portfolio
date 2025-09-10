import React from "react";
import Utility from "../../../../Layout/Utility";
import { motion } from "framer-motion";

const experiences = [
  {
    year: "2022",
    startMonth: "March",
    endLabel: "Present",
    startDateISO: "2022-03",
    endDateISO: null, // present
    company: "Upwork & Fiverr",
    role: "Front-End Developer",
    title: "Web Pages · HTML Bug Fix · CSS Bug Fix · API",
    summary:
      "Powerful, dynamic, user-friendly, AI-assisted solutions for landing pages, dashboards, and integrations.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap",
      "Tailwind CSS",
      "React",
      "Express.js",
      "Node.js",
      "MongoDB",
    ],
  },
];

const variants = {
  hidden: { opacity: 0, y: 8 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, delay: 0.08 * i },
  }),
};

const Experience = () => {
  return (
    <motion.section
      initial="hidden"
      animate="show"
      variants={variants}
      className="flex flex-col gap-6"
      aria-label="Work experience"
    >
      <h2 className="font-bold text-xl">Experience</h2>

      <ol className="relative ml-4">
        {/* dikey çizgi */}
        <span
          aria-hidden="true"
          className="absolute left-0 top-0 h-full w-0.5 bg-teal-500/60"
        />
        {experiences.map((exp, idx) => (
          <li
            key={`${exp.company}-${exp.startDateISO}`}
            className="pl-6 mb-8 last:mb-0"
          >
            {/* timeline düğümü */}
            <span
              aria-hidden="true"
              className="absolute -left-[11.5px] mt-2 size-6 rounded-full bg-teal-300 border-2 border-teal-500"
            />

            <motion.div
              custom={idx}
              variants={variants}
              className="flex gap-5"
            >
              {/* Yıl sütunu */}
              <div className="w-16 shrink-0 pt-1 text-gray-800">
                <span className="font-medium">{exp.year}</span>
              </div>

              {/* İçerik */}
              <div className="flex-1 flex flex-col gap-3">
                <div className="text-sm text-gray-500">
                  <time dateTime={exp.startDateISO}>{exp.startMonth}</time>
                  {" — "}
                  {exp.endDateISO ? (
                    <time dateTime={exp.endDateISO}>{exp.endLabel}</time>
                  ) : (
                    <span>{exp.endLabel}</span>
                  )}
                </div>

                <h3 className="text-gray-900">
                  <span className="text-xl font-semibold">{exp.company}</span>{" "}
                  <span className="text-gray-700">— {exp.role}</span>
                </h3>

                <p className="text-base text-gray-800">{exp.title}</p>

                <p className="text-gray-700 leading-relaxed">{exp.summary}</p>

                <div className="flex flex-wrap gap-3 w-11/12">
                  {exp.skills.map((s) => (
                    <Utility key={s} name={s} />
                  ))}
                </div>
              </div>
            </motion.div>
          </li>
        ))}
      </ol>
    </motion.section>
  );
};

export default Experience;
