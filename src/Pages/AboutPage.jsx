import React from "react";
import AsideBox from "../components/AsideBox/AsideBox";
import WhoPage from "../components/MainBox/MainComponents/Pages/AboutPage/Header/WhoPage";

const AboutPage = () => {
  return (
    <div className="max-w-[1500px] m-auto flex">
      <aside
        className="asidePageBox"
        id="asideBar"
      >
        <AsideBox />
      </aside>

      <main className="mainPageBox">
        <WhoPage />
      </main>
    </div>
  );
};

export default AboutPage;
