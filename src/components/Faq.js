import React, { useState } from "react";

export function Faq({ faqs }) {
  const [visible, setVisible] = useState(faqs.map(() => false));

  const toggleVisibility = (index) => {
    setVisible(visible.map((item, i) => (i === index ? !item : item)));
  };

  return (
    <div className="faqContainer">
      <h1 className="faqHeader">Frequently Asked Questions</h1>
      {faqs.map((faq, index) => (
        <div className="questionContainer" key={index}>
          <h2 className="question" onClick={() => toggleVisibility(index)}>
            {faq.question} <span>{visible[index] ? "-" : "+"}</span>
          </h2>

          {visible[index] && <p className="answer">{faq.answer}</p>}
        </div>
      ))}
    </div>
  );
}

export default Faq;