import React from "react";
import AsideBox from "../components/AsideBox/AsideBox";
import MainBox from "../components/MainBox/MainBox";

const HomePage = () => {
  return (
    <div className="max-w-[1500px] m-auto flex">
      <aside
        className="asidePageBox"
        id="asideBar"
      >
        <AsideBox />
      </aside>

      <main className="mainPageBox">
        <MainBox />
      </main>
    </div>
  );
};

export default HomePage;
