import "./App.css";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Project from "./pages/Project/Project";
import Article from "./pages/Article/Article";
import ArticleDetail from "./pages/Article/ArticleDetail";
import ProjectDetail from "./pages/Project/ProjectDetail";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/porfolio" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
        <Route path="/article" element={<Article />} />
        <Route path="/article/:id" element={<ArticleDetail />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
