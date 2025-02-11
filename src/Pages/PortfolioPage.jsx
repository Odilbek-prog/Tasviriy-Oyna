import React, { useState } from "react";
import Portfolio from "../components/UI/Portfolio/Portfolio";

const PortfolioPage = () => {
  const [showMore, setShowMore] = useState(false);
  const handleBtn = () => {
    setShowMore(true);
    console.log(showMore);
  };
  return (
    <div className="portfolio">
      <Portfolio />
      <div className="portfolio__wrap">
        <div className="portfolio__wrapper">
          {showMore ? (
            <div className="port__bottom">
              <div className="port__img4"></div>
              <div className="port__img5"></div>
              <div className="port__img6"></div>
            </div>
          ) : null}
          {showMore ? null : (
            <button onClick={handleBtn} className="portfolio__btn">
              Koproq...
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
