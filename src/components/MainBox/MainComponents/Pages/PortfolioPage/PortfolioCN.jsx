import React from "react";
import { motion } from "framer-motion";
import video from "../../../../../assets/vid/socialMediaApp.mp4";
import coffe from "../../../../../assets/img/12.jpg";
import pos from "../../../../../assets/img/22.png";
import { FaCode } from "react-icons/fa6";
import { IoMdLink } from "react-icons/io";
import { Image } from "antd";

const PortfolioCN = () => {
  return (
    <motion.div
      initial={{
        y: 35,
      }}
      animate={{
        y: 0,
      }}
      transition={{
        duration: 0.5,
      }}
      className="w-full h-full p-6 flex flex-col gap-10 mt-16 mb-20"
    >
      <h1 className="text-5xl font-extrabold mb-10">projects.</h1>

      <div className="border border-[#a1a1a1] flex gap-4 bg-[#fafafa] rounded-md p-2 w-11/12">
        <video className="w-5/12" controls>
          <source src={video} type="video/mp4" className="w-full h-full" />
        </video>
        <div className="w-7/12 flex flex-col gap-8 justify-center p-4">
          <h1 className="font-bold text-3xl">Social Media App</h1>

          <div className="flex justify-between">
            <span className="text-sm text-gray-600">
              A social media application where people can share, like and save
              pictures.{" "}
            </span>
            <span className="flex gap-1 items-center border border-teal-600 rounded-full w-fit p-2 hover:text-teal-600 hover:bg-[#f8f8ff] transition-all duration-300 cursor-pointer ml-auto ">
              <FaCode />
              Ongoing
            </span>
          </div>
        </div>
      </div>

      <div className="border border-[#a1a1a1] flex gap-4 bg-[#fafafa] rounded-md p-3 w-11/12">
        <div className="w-5/12 flex justify-center items-center">
          <Image src={pos} alt="" className="object-cover" />
        </div>
        <div className="w-7/12 flex flex-col gap-8 justify-center p-4">
          <h1 className="font-bold text-3xl">POS Application</h1>

          <div className="flex justify-between">
            <span className="text-sm text-gray-600">
              Application for restaurants to organise their products, customer
              and invoice tracking
            </span>
            <a
              href="https://atakanakkan.github.io/coffeShop/"
              className="flex gap-1 items-center border border-teal-600 rounded-full w-fit p-2 hover:text-teal-600 hover:bg-[#f8f8ff] transition-all duration-300 cursor-pointer ml-auto"
            >
              <IoMdLink />
              Live
            </a>
          </div>
        </div>
      </div>

      <div className="border border-[#a1a1a1] flex gap-4 bg-[#fafafa] rounded-md p-3 w-11/12">
        <div className="w-5/12 flex justify-center items-center">
          <Image src={coffe} alt="" className="object-cover" />
        </div>
        <div className="w-7/12  flex flex-col gap-8 justify-center p-4">
          <h1 className="font-bold text-3xl">Coffe Shop</h1>
          <div className="flex justify-between">
            <span className="text-sm text-gray-600">
              Application prepared for company and product promotion
            </span>
            <a
              href="https://atakanakkan.github.io/coffeShop/"
              className="flex gap-1 items-center border border-teal-600 rounded-full w-fit p-2 hover:text-teal-600 hover:bg-[#f8f8ff] transition-all duration-300 cursor-pointer ml-auto"
            >
              <IoMdLink />
              Live
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioCN;
