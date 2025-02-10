import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "../Pages/About";
import News from "../Pages/News";
import Portfolio from "../Pages/Portfolio";
import Home from "../Pages/Home";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/news" element={<News />} />
      <Route path="/portfolio" element={<Portfolio />} />
    </Routes>
  );
};

export default Router;
