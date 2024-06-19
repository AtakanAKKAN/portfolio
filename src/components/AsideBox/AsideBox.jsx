import React from "react";
import AsideHeader from "./AsideComponents/AsideHeader";
import AsideNavigation from "./AsideComponents/AsideNavigation";
import AsideFollow from "./AsideComponents/AsideFollow";

import "./Aside.css";
import AsideContact from "./AsideComponents/AsideContact";

const AsideBox = ({ setPage, setIsShadow, setIsNavOpen }) => {
  return (
    <div className="w-full h-full p-6 flex flex-col gap-8">
      <AsideHeader />
      <AsideNavigation
        setPage={setPage}
        setIsShadow={setIsShadow}
        setIsNavOpen={setIsNavOpen}
      />
      <AsideFollow />
      <AsideContact />
    </div>
  );
};

export default AsideBox;
