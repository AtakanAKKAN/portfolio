import React from "react";
import { motion } from "framer-motion";

const WhoPage = () => {
  return (
    <motion.div
      initial={{
        y: 15,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.25,
      }}
      className="w-full h-full p-6 flex flex-col gap-10 mt-16 mb-20"
    >
      <motion.div
        initial={{
          y: 15,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.5,
        }}
      >
        <h1 className="text-5xl font-extrabold mb-10 max-lg:text-center  ">
          who am I.
        </h1>
        <span className="leading-relaxed">
          Hello Traveler! My name is Atakan. I landed on Earth in 2000. I'm fun,
          playful, and love talking to people. I thrive on change and
          self-improvement. Currently, I'm into web design and spending time
          with my cat and friends. Keep scrolling to learn more about me.
          Wishing you love and luck in all your goals. See you soon.
        </span>
      </motion.div>

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
      >
        <h1 className="text-slate-500 underline italic mb-4">
          What I like to do and my hobbies are:
        </h1>

        <p className="leading-relaxed mb-4">
          Listening to music is a necessity for me, almost like a 6th basic
          need. I enjoy many genres, but instrumental and nature sounds are my
          favorites. I've been involved in sports since a young age. From 12 to
          18, I played basketball and achieved many successes. In high school, I
          tried archery, but it remained a hobby. Here is my{" "}
          <a
            className="underline font-semibold italic"
            target="_blank"
            rel="noreferrer"
            href="https://open.spotify.com/user/21u4rlglpzoii2l6d2inhu3sq?si=1714f03315bd4d92"
          >
            Spotify account
          </a>
          .
        </p>

        <p className="leading-relaxed mb-4">
          I love playing games and have been into computer games since
          childhood. I mostly play survival-themed games with friends. I prefer
          non-competitive games to avoid stress, though I occasionally enjoy
          some competition. Single-player games are fun, but they can't replace
          the enjoyment of playing with friends. Here is my{" "}
          <a
            target="_blank"
            rel="noreferrer"
            className="underline font-semibold italic"
            href="https://steamcommunity.com/profiles/76561198178391629/"
          >
            Steam account.
          </a>{" "}
          Maybe we can play together in the future.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default WhoPage;
