import "./App.css";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import About from "./page/About";
import Project from "./page/Project";
import Article from "./page/Article";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
        <Route path="/article" element={<Article />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
