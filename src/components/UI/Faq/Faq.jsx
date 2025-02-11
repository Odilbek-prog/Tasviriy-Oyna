import { useState } from "react";
import "./Faq.scss";

const Faq = () => {
  const faqs = [
    {
      question: "Tasviriyoyina.uz qanday xizmatlarni taqdim etadi?",
      answer:
        "Biz grafik dizayn, san’at asarlari yaratish, raqamli san’at, animatsiya va brendni rivojlantirish bo‘yicha xizmatlar taqdim etamiz.",
    },
    {
      question: "Xizmatlarni qanday buyurtma qilish mumkin?",
      answer:
        "Buyurtma berish uchun veb-saytimiz orqali bog‘laning yoki bizning kontaktlarimizga murojaat qiling.",
    },
    {
      question: "Xizmatlar uchun narxlar qanday hisoblanadi?",
      answer:
        "Narxlar loyiha murakkabligiga, muddatga va talab qilinadigan resurslarga qarab belgilanadi.",
    },
    {
      question: "San’at asarlarini yaratishda qanday uslubda ishlaysiz?",
      answer:
        "Biz mijozning talablariga qarab har xil uslublarda ishlaymiz: realistik, abstrakt, vektor grafikasi va boshqa.",
    },
    {
      question: "Ishlar qancha vaqt davomida tayyorlanadi?",
      answer:
        "Loyiha murakkabligiga qarab ish vaqti 2 kundan 2 haftagacha davom etishi mumkin.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0); // Dastlab birinchi savol ochiq turadi

  return (
    <>
      <div className="faq-title">
        <h1>FAQ</h1>
      </div>
      <div className="faq-container">
        <div className="faq-left">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="faq-item"
              onClick={() => setActiveIndex(index)}
            >
              <span className="faq-number">{index + 1}</span>
              {faq.question}
              <span className="toggle-icon">
                {activeIndex === index ? "−" : "+"}
              </span>
            </div>
          ))}
        </div>
        <div className="faq-right">
          <div className="faq-answer">{faqs[activeIndex].answer}</div>
        </div>
      </div>
    </>
  );
};

export default Faq;
