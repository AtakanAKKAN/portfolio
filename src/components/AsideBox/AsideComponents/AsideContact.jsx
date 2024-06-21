import React from "react";
import { TbBrandGmail } from "react-icons/tb";
import { IoSendOutline } from "react-icons/io5";

const AsideContact = () => {
  return (
    <div className="asideContentBox pb-5 max-lg:pb-10">
      <h1 className="asideHeader">Contact Me!</h1>
      <a href="mailto:atakanakkan00@gmail.com" className="asideContent group">
        <TbBrandGmail /> G-Mail
        <span className="ml-auto text-xl group-hover:text-2xl group-hover:mr-2 transition-all duration-150 ">
          <IoSendOutline />
        </span>
      </a>
    </div>
  );
};

export default AsideContact;
