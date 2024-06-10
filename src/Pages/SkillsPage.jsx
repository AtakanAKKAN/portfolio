import React from "react";
import AsideBox from "../components/AsideBox/AsideBox";
import SkillPage from "../components/MainBox/MainComponents/Pages/SkillPage/SkillPage";

const SkillsPage = () => {
  return (
    <div className="max-w-[1500px] m-auto flex">
      <aside
        className="asidePageBox"
        id="asideBar"
      >
        <AsideBox />
      </aside>

      <main className="mainPageBox">
        <SkillPage />
      </main>
    </div>
  );
};

export default SkillsPage;
