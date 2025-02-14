import React, { Suspense } from "react";
import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

const Router = () => {
  const Home = lazy(() => import("../Pages/Home"));
  const About = lazy(() => import("../Pages/About"));
  const News = lazy(() => import("../Pages/News"));
  const PortfolioPage = lazy(() => import("../Pages/PortfolioPage"));
  return (
    <Suspense fallback={<div class="loader" />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/news" element={<News />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
      </Routes>
    </Suspense>
  );
};

export default Router;
