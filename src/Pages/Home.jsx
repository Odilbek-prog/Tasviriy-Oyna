import React from "react";
import Intro from "../components/UI/Intro/Intro";
import News from "../components/UI/News/News";
import Team from "../components/UI/Team/Team";
import Portfolio from "../components/UI/Portfolio/Portfolio";
import Review from "../components/UI/Review/Review";

const Home = () => {
  return (
    <div className="home">
      <Intro />
      <News />
      <Team />
      <Portfolio />
      <Review />
    </div>
  );
};

export default Home;
