import React from "react";
import { motion } from "framer-motion";
import video from "../../../../../assets/vid/socialMediaApp.mp4";
import coffe from "../../../../../assets/img/12.jpg";
import pos from "../../../../../assets/img/22.png";
import { FaCode, FaGithub } from "react-icons/fa6";
import { IoMdLink } from "react-icons/io";
import { Image } from "antd";
import Utility from "../../../Layout/Utility";

const projects = [
  {
    id: "social-media",
    title: "Social Media App",
    description:
      "A social media application where people can share, like, and save pictures.",
    mediaType: "video",
    mediaSrc: video,
    alt: "Demo video of Social Media App",
    status: { label: "Ongoing", icon: <FaCode /> },
    link: null,
    repo: "https://github.com/atakanakkan/social-media-app",
    features: [
      "User authentication & profiles",
      "Post upload with image support",
      "Like & save system",
    ],
    tech: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
  },
  {
    id: "pos-app",
    title: "POS Application",
    description:
      "Application for restaurants to organize their products, and manage customers and invoices.",
    mediaType: "image",
    mediaSrc: pos,
    alt: "Screenshot of POS Application dashboard",
    status: { label: "Live", icon: <IoMdLink /> },
    link: "https://atakanakkan-pos-application.onrender.com",
    repo: "https://github.com/atakanakkan/pos-application",
    features: [
      "Product & category management",
      "Customer database",
      "Invoice generation & tracking",
    ],
    tech: ["React", "Node.js", "Express.js", "MongoDB", "Bootstrap"],
  },
  {
    id: "coffee-shop",
    title: "Coffee Shop",
    description:
      "Single-page application prepared for brand and product promotion.",
    mediaType: "image",
    mediaSrc: coffe,
    alt: "Landing page hero of Coffee Shop website",
    status: { label: "Live", icon: <IoMdLink /> },
    link: "https://atakanakkan.github.io/coffeShop/",
    repo: "https://github.com/atakanakkan/coffeShop",
    features: [
      "Responsive landing page",
      "Menu & product showcase",
      "Simple contact form",
    ],
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
  },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { when: "beforeChildren", staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const Badge = ({ children }) => (
  <span
    className="flex items-center gap-1 border border-teal-600 rounded-full px-3 py-1
               text-sm hover:text-teal-700 hover:bg-teal-50 transition-colors duration-200"
  >
    {children}
  </span>
);

const Media = ({ type, src, alt }) => (
  <figure className="w-full lg:w-5/12">
    <div className="relative w-full overflow-hidden rounded-md shadow-sm bg-white">
      <div className="aspect-[16/9]">
        {type === "video" ? (
          <video className="w-full h-full" controls>
            <source src={src} type="video/mp4" />
          </video>
        ) : (
          <Image
            src={src}
            alt={alt}
            className="w-full h-full object-cover"
            preview={false}
            loading="lazy"
          />
        )}
      </div>
    </div>
    <figcaption className="sr-only">{alt}</figcaption>
  </figure>
);

const PortfolioCN = () => {
  return (
    <motion.section
      initial="hidden"
      animate="show"
      variants={container}
      className="w-full h-full p-6 flex flex-col gap-10 pt-20 pb-24"
      aria-label="Projects section"
    >
      <h1 className="text-5xl font-extrabold mb-6 max-lg:text-center">Projects</h1>

      <motion.ul className="flex flex-col gap-6" variants={container}>
        {projects.map((p) => (
          <motion.li
            key={p.id}
            variants={item}
            className="border border-gray-300 bg-[#fafafa] rounded-md p-3 lg:p-4 shadow-sm"
          >
            <div className="flex gap-4 lg:gap-6 max-lg:flex-col">
              <Media type={p.mediaType} src={p.mediaSrc} alt={p.alt} />

              <div className="w-full lg:w-7/12 flex flex-col gap-4 justify-center">
                <h2 className="font-bold text-2xl lg:text-3xl">{p.title}</h2>

                <p className="text-sm text-gray-700 leading-relaxed">
                  {p.description}
                </p>

                {/* Özellik listesi */}
                {p.features && (
                  <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                    {p.features.map((f, idx) => (
                      <li key={idx}>{f}</li>
                    ))}
                  </ul>
                )}

                {/* Kullanılan teknolojiler */}
                {p.tech && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {p.tech.map((t) => (
                      <Utility key={t} name={t} />
                    ))}
                  </div>
                )}

                {/* Linkler */}
                <div className="flex gap-3 mt-3">
                  {p.link ? (
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${p.title} — Live demo`}
                    >
                      <Badge>
                        <IoMdLink />
                        Live
                      </Badge>
                    </a>
                  ) : (
                    <Badge>
                      <FaCode />
                      Ongoing
                    </Badge>
                  )}
                  {p.repo && (
                    <a
                      href={p.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${p.title} — GitHub repo`}
                    >
                      <Badge>
                        <FaGithub />
                        Repo
                      </Badge>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.li>
        ))}
      </motion.ul>
    </motion.section>
  );
};

export default PortfolioCN;
