import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "../Pages/About";
import News from "../Pages/News";
import PortfolioPage from "../Pages/PortfolioPage";
import Home from "../Pages/Home";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/news" element={<News />} />
      <Route path="/portfolio" element={<PortfolioPage />} />
    </Routes>
  );
};

export default Router;
