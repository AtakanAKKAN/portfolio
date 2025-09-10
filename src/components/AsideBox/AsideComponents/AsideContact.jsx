import React from "react";
import { TbBrandGmail } from "react-icons/tb";
import { IoSendOutline } from "react-icons/io5";

const AsideContact = () => {
  return (
    <section
      className="flex flex-col gap-2 pb-5 "
      aria-label="Contact section"
    >
      <h2 className="text-xs font-semibold text-gray-600 tracking-wide uppercase mb-2">
        Contact Me
      </h2>

      <a
        href="mailto:atakanakkan00@gmail.com"
        aria-label="Send me an email via Gmail"
        className="flex items-center gap-2 px-2 py-1 rounded-md text-base group transition-all duration-200 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-teal-400"
      >
        <TbBrandGmail />
        <span>Gmail</span>
        <span className="ml-auto text-xl text-gray-500 group-hover:text-2xl group-hover:mr-2 transition-all duration-150">
          <IoSendOutline />
        </span>
      </a>
    </section>
  );
};

export default AsideContact;
