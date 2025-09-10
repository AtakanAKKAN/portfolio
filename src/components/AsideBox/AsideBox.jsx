import React from "react";
import AsideHeader from "./AsideComponents/AsideHeader";
import AsideNavigation from "./AsideComponents/AsideNavigation";
import AsideFollow from "./AsideComponents/AsideFollow";
import AsideContact from "./AsideComponents/AsideContact";

const AsideBox = ({ setPage, setIsNavOpen }) => {
  return (
    <aside
      className="w-full h-full p-6 flex flex-col gap-8 overflow-y-hidden"
      aria-label="Sidebar"
    >
      {/* Profil / Logo */}
      <AsideHeader />

      {/* Navigasyon */}
      <nav aria-label="Main navigation">
        <AsideNavigation setPage={setPage} setIsNavOpen={setIsNavOpen} />
      </nav>

      {/* Sosyal medya bağlantıları */}
      <AsideFollow />

      {/* İletişim bilgileri */}
      <AsideContact />
    </aside>
  );
};

export default AsideBox;
