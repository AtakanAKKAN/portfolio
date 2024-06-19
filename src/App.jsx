import { useEffect, useState } from "react";
import AsideBox from "./components/AsideBox/AsideBox";
import MainBox from "./components/MainBox/MainBox";
import WhoPage from "./components/MainBox/MainComponents/Pages/AboutPage/Header/WhoPage";
import SkillPage from "./components/MainBox/MainComponents/Pages/SkillPage/SkillPage";
import PortfolioCN from "./components/MainBox/MainComponents/Pages/PortfolioPage/PortfolioCN";
import { FaBars, FaTimes } from "react-icons/fa";

const App = () => {
  const [page, setPage] = useState("");
  const [isNavOpen, setIsNavOpen] = useState(true);
  const [isShadow, setIsShadow] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1024) {
        setIsNavOpen(false);
      } else {
        setIsNavOpen(true);
      }
    };

    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="max-w-[1500px] m-auto flex max-lg:flex-col">
      <div className="w-full flex fixed top-0 left-0 justify-end text-4xl bg-teal-400 lg:hidden">
        <span
          className="p-6 "
          onClick={() => {
            setIsNavOpen(true);
            setIsShadow(true);
          }}
        >
          {isNavOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </span>
      </div>

      {isShadow && (
        <>
          <div
            onClick={() => {
              setIsNavOpen(false);
              setIsShadow(false);
            }}
            className="w-full h-full fixed top-0 left-0 bg-black/20 z-10"
          ></div>
        </>
      )}

      <aside
        className={`bg-[#fafafa] border max-h-screen h-full overflow-auto transition-all duration-500 max-lg:absolute max-lg:w-6/12 w-2/12 z-30 ${
          isNavOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        id="asideBar"
      >
        <AsideBox
          setPage={setPage}
          setIsNavOpen={setIsNavOpen}
          setIsShadow={setIsShadow}
        />
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
