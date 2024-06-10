import { useState } from "react";
import AsideBox from "./components/AsideBox/AsideBox";
import MainBox from "./components/MainBox/MainBox";
import WhoPage from "./components/MainBox/MainComponents/Pages/AboutPage/Header/WhoPage";
import SkillPage from "./components/MainBox/MainComponents/Pages/SkillPage/SkillPage";
import PortfolioCN from "./components/MainBox/MainComponents/Pages/PortfolioPage/PortfolioCN";

const App = () => {
  const [page, setPage] = useState("");

  return (
    <div className="max-w-[1500px] m-auto flex">
      <aside className="asidePageBox" id="asideBar">
        <AsideBox setPage={setPage} />
      </aside>

      {page === "" && (
        <main className="mainPageBox">
          <MainBox />{" "}
        </main>
      )}
      {page === "about" && (
        <main className="mainPageBox">
          <WhoPage />{" "}
        </main>
      )}
      {page === "skill" && (
        <main className="mainPageBox">
          <SkillPage />{" "}
        </main>
      )}
      {page === "portfolio" && (
        <main className="mainPageBox">
          <PortfolioCN />{" "}
        </main>
      )}
    </div>
  );
};

export default App;
