import React from "react";
import { FiTwitter, FiGithub, FiLinkedin } from "react-icons/fi";
import { SiInstagram } from "react-icons/si";
import { CiLocationArrow1 } from "react-icons/ci";

const socials = [
  {
    name: "Twitter",
    icon: <FiTwitter />,
    url: "https://x.com/yerfistigilover",
  },
  {
    name: "Instagram",
    icon: <SiInstagram />,
    url: "https://www.instagram.com/atknkkan/",
  },
  { name: "GitHub", icon: <FiGithub />, url: "https://github.com/AtakanAKKAN" },
  {
    name: "LinkedIn",
    icon: <FiLinkedin />,
    url: "https://www.linkedin.com/in/atakanakkan/",
  },
];

const AsideFollow = () => {
  return (
    <section className="flex flex-col gap-2" aria-label="Social links">
      <h2 className="text-xs font-semibold text-gray-600 tracking-wide uppercase mb-2">
        Follow me
      </h2>

      <ul className="flex flex-col gap-1">
        {socials.map((s) => (
          <li key={s.name}>
            <a
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Follow me on ${s.name} (opens in new tab)`}
              className="flex items-center gap-2 px-2 py-1 rounded-md text-base group transition-all duration-200 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-teal-400"
            >
              {s.icon}
              <span>{s.name}</span>
              <span className="ml-auto text-xl text-gray-500 group-hover:text-2xl group-hover:mr-2 transition-all duration-150">
                <CiLocationArrow1 />
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default AsideFollow;
