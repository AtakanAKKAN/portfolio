import React from "react";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0, y: 15 },
  show: {
    opacity: 1, y: 0,
    transition: { duration: 0.35, when: "beforeChildren", staggerChildren: 0.12 }
  }
};

const child = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
};

const WhoPage = () => {
  return (
    <motion.section
      initial="hidden"
      animate="show"
      variants={container}
      className="w-full h-full p-6 flex flex-col gap-12 pt-20 pb-24"
      aria-label="About me section"
    >
      {/* Başlık ve kısa tanışma */}
      <motion.article variants={child}>
        <h1 className="text-5xl font-extrabold mb-6 max-lg:text-center">
          Who am I?
        </h1>
        <p className="leading-relaxed text-gray-800 max-w-prose mx-auto lg:mx-0">
          Hello traveler! I’m Atakan, 24. I’m fun, playful, and love good conversations.
          I thrive on change and self-improvement. These days I’m deep into web design
          and spend my time building interfaces, hanging out with my cat, and seeing friends.
          Keep scrolling to learn more—wishing you love and luck on your goals. See you soon!
        </p>
      </motion.article>

      {/* Hobiler / ilgi alanları */}
      <motion.article variants={child}>
        <h2 className="text-slate-600 underline italic mb-4">
          What I like to do and my hobbies:
        </h2>

        <p className="leading-relaxed text-gray-800 mb-4 max-w-prose">
          Music is almost a sixth basic need for me. I enjoy many genres, but
          instrumental tracks and nature sounds are my favorites. I’ve been into sports
          since a young age—between 12 and 18 I played basketball and achieved several wins.
          In high school I tried archery; it remained a hobby. Here’s my{" "}
          <a
            className="underline font-semibold italic focus:outline-none focus:ring-2 focus:ring-teal-400 rounded-sm"
            target="_blank"
            rel="noopener noreferrer"
            href="https://open.spotify.com/user/21u4rlglpzoii2l6d2inhu3sq?si=1714f03315bd4d92"
          >
            Spotify account
          </a>
          .
        </p>

        <p className="leading-relaxed text-gray-800 mb-0 max-w-prose">
          I also love games and have been a PC gamer since childhood. I usually play
          survival-themed titles with friends. I prefer non-competitive games to avoid stress,
          though I enjoy some healthy competition now and then. Single-player is fun, but
          nothing beats playing together. Here’s my{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="underline font-semibold italic focus:outline-none focus:ring-2 focus:ring-teal-400 rounded-sm"
            href="https://steamcommunity.com/profiles/76561198178391629/"
          >
            Steam account
          </a>
          —maybe we can play sometime.
        </p>
      </motion.article>
    </motion.section>
  );
};

export default WhoPage;
