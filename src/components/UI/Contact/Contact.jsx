import React, { useState } from "react";
import "./Contact.scss";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    number: "",
    text: "",
  });

  const handleValue = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const token = `7326511785:AAGQrqMF_DgNItofNe2kUItExRLR6Ykbnkg`;
    const chat_id = 6306759214;
    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    axios({
      url: url,
      method: "post",
      data: {
        chat_id: chat_id,
        text: data,
      },
    })
      .then((response) => {
        toast("Success");
        setData({ name: "", email: "", number: "", text: "" }); // Data to'g'ri yangilanadi
      })
      .catch((error) => {
        console.log("Xatolik:", error);
      });
  };
  return (
    <div className="contact" id="contact">
      <div className="contact__wrapper">
        <div className="contact__left">
          <h1 className="contact__title">Biz bilan bog‘laning</h1>
          <form onSubmit={handleSubmit} className="contact__form">
            <label className="contact__label" htmlFor="name">
              Ism
            </label>
            <input
              type="text"
              placeholder="Ismingiz..."
              className="contact__input"
              name="name"
              onChange={handleValue}
              value={data.name}
              required
            />
            <label className="contact__label" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              placeholder="Elektron pochta..."
              className="contact__input"
              name="email"
              value={data.email}
              onChange={handleValue}
            />
            <label className="contact__label" htmlFor="number">
              Telefon Raqam
            </label>
            <input
              type="number"
              placeholder="+998"
              className="contact__input"
              name="number"
              onChange={handleValue}
              value={data.number}
              required
            />
            <label className="contact__label" htmlFor="text">
              Xabar
            </label>
            <textarea
              placeholder="Izohingiz..."
              className="contact__textarea"
              name="text"
              onChange={handleValue}
              value={data.text}
            ></textarea>
            <button className="contact__btn">Biz bilan bog‘laning</button>
            <ToastContainer />
          </form>
        </div>
        <div className="contact__right"></div>
      </div>
    </div>
  );
};

export default Contact;
