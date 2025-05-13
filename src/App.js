import "./App.css";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Project from "./pages/Project/Project";
import Article from "./pages/Article/Article";
import ArticleDetail from "./pages/Article/ArticleDetail";
import ProjectDetail from "./pages/Project/ProjectDetail";
import { useState, useEffect } from "react";

function App() {
  const location = useLocation();
  const isHome =
    location.pathname === "/portfolio" || location.pathname === "/portfolio/";
  const isAbout = location.pathname === "/about";

  // const [darkMode, setDarkMode] = useState(false);
  // const toggleDarkMode = () => setDarkMode(!darkMode);

  // useEffect(() => {
  //   if (darkMode) {
  //     document.body.classList.add("dark");
  //   } else {
  //     document.body.classList.remove("dark");
  //   }
  // }, [darkMode]);

  return (
    <div className={isHome ? "App dark" : "App"}>
      {!isHome && <Header />}
      <Routes>
        <Route path="/portfolio/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
        <Route path="/article" element={<Article />} />
        <Route path="/article/:id" element={<ArticleDetail />} />
      </Routes>
      {!isHome && !isAbout && <Footer />}
    </div>
  );
}

export default App;
