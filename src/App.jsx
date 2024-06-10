import { Route, Routes } from "react-router";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import SkillsPage from "./Pages/SkillsPage";
import PorfolioPage from "./Pages/PorfolioPage";

const App = () => {
  return (
    <Routes>
      <Route index element={<HomePage />}></Route>
      <Route path="/about" element={<AboutPage />}></Route>
      <Route path="/skills" element={<SkillsPage />}></Route>
      <Route path="/myProjects" element={<PorfolioPage />}></Route>
    </Routes>
  );
};

export default App;
