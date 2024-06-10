import React from "react";
import AsideHeader from "./AsideComponents/AsideHeader";
import AsideNavigation from "./AsideComponents/AsideNavigation";
import AsideFollow from "./AsideComponents/AsideFollow";

import "./Aside.css";
import AsideContact from "./AsideComponents/AsideContact";

const AsideBox = () => {
  return (
    <div className="w-full h-full p-6 flex flex-col gap-8">
      <AsideHeader />
      <AsideNavigation />
      <AsideFollow />
      <AsideContact />
    </div>
  );
};

export default AsideBox;
