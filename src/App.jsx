import { useEffect, useMemo, useCallback, useState } from "react";
import AsideBox from "./components/AsideBox/AsideBox";
import MainBox from "./components/MainBox/MainBox";
import WhoPage from "./components/MainBox/MainComponents/Pages/AboutPage/Header/WhoPage";
import SkillPage from "./components/MainBox/MainComponents/Pages/SkillPage/SkillPage";
import PortfolioCN from "./components/MainBox/MainComponents/Pages/PortfolioPage/PortfolioCN";
import { FaBars, FaTimes } from "react-icons/fa";

const FONT_CLASSES = ["info", "info2", "info3", "info4"];

const App = () => {
  const [page, setPage] = useState("");
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [currentFont, setCurrentFont] = useState(FONT_CLASSES[0]);

  // lg breakpoint: 1024px
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const onChange = (e) => {
      // large ekranlarda aside hep açık
      if (e.matches) setIsNavOpen(true);
      else setIsNavOpen(false);
    };

    // initial
    onChange(mq);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  // Mobilde menü açıkken body scroll kilidi
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const isDesktop = mq.matches;
    if (!isDesktop && isNavOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [isNavOpen]);

  // Esc ile kapatma
  const closeNav = useCallback(() => setIsNavOpen(false), []);
  const openNav = useCallback(() => setIsNavOpen(true), []);
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") closeNav();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [closeNav]);

  // Mobil top bar: isim için font cycle
  useEffect(() => {
    const id = setInterval(() => {
      setCurrentFont((prev) => {
        const idx = FONT_CLASSES.indexOf(prev);
        return FONT_CLASSES[(idx + 1) % FONT_CLASSES.length];
      });
    }, 2500);
    return () => clearInterval(id);
  }, []);

  const PAGES = useMemo(
    () => ({
      "": MainBox,
      about: WhoPage,
      skill: SkillPage,
      portfolio: PortfolioCN,
    }),
    []
  );
  const ActivePage = PAGES[page] ?? MainBox;

  const overlayVisible =
    typeof window !== "undefined"
      ? !window.matchMedia("(min-width: 1024px)").matches && isNavOpen
      : false;

  return (
    <div className="max-w-[1500px] mx-auto flex max-lg:flex-col">
      {/* Mobile top bar with name (cycling font) + menu button */}
      <div className="w-full fixed top-0 left-0 z-30 lg:hidden bg-white/90 backdrop-blur-md border-b border-gray-200">
        <div className="flex items-center justify-between px-4 py-3">
          <span
            className={`text-lg font-bold transition-colors duration-500 ${currentFont}`}
            aria-label="Brand"
          >
            Atakan Akkan
          </span>

          <button
            type="button"
            aria-label={isNavOpen ? "Close navigation" : "Open navigation"}
            aria-controls="asideBar"
            aria-expanded={isNavOpen}
            onClick={isNavOpen ? closeNav : openNav}
            className="p-2 text-gray-700 transition-all duration-200 hover:text-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 rounded-md"
          >
            {isNavOpen ? (
              <FaTimes
                size={26}
                className="transition-transform duration-200 hover:rotate-90"
              />
            ) : (
              <FaBars
                size={26}
                className="transition-transform duration-200 hover:scale-110"
              />
            )}
          </button>
        </div>
      </div>

      {/* Kliklenebilir overlay (mobilde menü açıkken) */}
      {overlayVisible && (
        <div
          onClick={closeNav}
          className="fixed inset-0 bg-black/20 z-20 lg:hidden"
          role="presentation"
        />
      )}

      {/* ASIDE */}
      <aside
        id="asideBar"
        aria-label="Site navigation"
        className={`bg-[#fafafa] border transition-transform duration-500
        max-lg:fixed max-lg:w-7/12 sm:max-lg:w-6/12 w-3/12 z-40
        ${isNavOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0
        top-0 left-0 h-screen overflow-hidden`}
      >
        <AsideBox
          setPage={(p) => {
            setPage(p);
            // mobilde sayfa seçince menüyü kapat
            if (window.innerWidth < 1024) closeNav();
          }}
          setIsNavOpen={setIsNavOpen}
        />
      </aside>

      {/* MAIN */}
      <main
        id="mainContent"
        className="mainPageBox w-full lg:w-9/12 lg:ml-auto"
      >
        <ActivePage />
      </main>
    </div>
  );
};

export default App;
