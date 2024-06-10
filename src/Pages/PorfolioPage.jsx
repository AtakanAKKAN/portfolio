import React from "react";
import AsideBox from "../components/AsideBox/AsideBox";
import PortfolioCN from "../components/MainBox/MainComponents/Pages/PortfolioPage/PortfolioCN";

const PorfolioPage = () => {
  return (
    <div className="max-w-[1500px] m-auto flex">
      <aside
        className="asidePageBox"
        id="asideBar"
      >
        <AsideBox />
      </aside>

      <main className="mainPageBox">
        <PortfolioCN />
      </main>
    </div>
  );
};

export default PorfolioPage;
