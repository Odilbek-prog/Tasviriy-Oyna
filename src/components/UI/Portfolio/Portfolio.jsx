import React from "react";
import "./Portfolio.scss";
import uzb from "../../../assets/uzb.png";

const Portfolio = () => {
  return (
    <div className="port">
      <div className="port__wrapper">
        <div className="port__address">
          <img className="port__uzb" src={uzb} alt="uzb" />
          <div className="port__desc">
            <h1 className="port__title">Toshkent</h1>
            <p className="port__text">
              Tasviriy san’at va dizayn sohasida innovatsion yechimlar, yuqori
              sifatli xizmatlar va ijodiy qo‘llab-quvvatlashni taqdim etamiz.
              Bizning jamoamiz sizning tasviriy ijodiyatingizni yangi bosqichga
              olib chiqishga tayyor.
            </p>
            <button className="port__btn">Batafsil</button>
          </div>
        </div>
        <div className="port__portfolio">
          <div className="port__top">
            <div className="port__top1">
              <h1 className="port__title">Portfoliyamiz</h1>
              <div className="port__img1"></div>
            </div>
            <div className="port__img2"></div>
            <div className="port__img3"></div>
          </div>
          <div className="port__bottom">
            <div className="port__img4"></div>
            <div className="port__img5"></div>
            <div className="port__img6"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
