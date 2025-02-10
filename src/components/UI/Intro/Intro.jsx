import React from "react";
import "./Intro.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import intro1 from "../../../assets/intro1.png";
import intro2 from "../../../assets/intro2.jpeg";
import intro3 from "../../../assets/intro3.png";

const Intro = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="intro">
      <div className="intro__wrapper">
        <div className="intro__left">
          <h1 className="intro__title">San’at olamiga yo‘l oching</h1>
          <p className="intro__text">
            Tasviriy san’at, dizayn va ijodiy ishlar uchun yagona platforma.
            Ilhom oling, o‘rganing va o‘z ijodingizni baham ko‘ring.
          </p>
          <button className="intro__btn">Ko‘proq bilish</button>
        </div>
        <div className="intro__right">
          <div className="intro__card">
            <h1 className="intro__num">5000+</h1>
            <h1 className="intro__cardtitle">Number of Completed Projects</h1>
          </div>
          <div className="intro__card">
            <h1 className="intro__num">5 Years</h1>
            <h1 className="intro__cardtitle">Lifespan of Delivered Software</h1>
          </div>
          <Slider className="intro__slider" {...settings}>
            <div className="intro__slide">
              <img className="intro__img" src={intro1} alt="" />
            </div>
            <div className="intro__slide">
              <img className="intro__img" src={intro2} alt="" />
            </div>
            <div className="intro__slide">
              <img className="intro__img" src={intro3} alt="" />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Intro;
