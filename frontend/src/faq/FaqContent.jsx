import React, { useState } from 'react';
import { TbMessages } from "react-icons/tb";
import { FaPlus, FaMinus } from "react-icons/fa6";

const faqData = [
  { question: "How can we remove hardness from water?", answer: "We remove hardness using a water softener or ion exchange method." },
  { question: "Where do we need an STP plant?", answer: "STP plants are required for treating sewage water in residential and commercial areas." },
  { question: "What is the ideal pH level for drinking water?", answer: "The ideal pH level is between 6.5 and 8.5." },
  { question: "How does RO water purification work?", answer: "RO uses a semi-permeable membrane to filter out impurities and dissolved solids." },
  { question: "What are the types of water filtration systems?", answer: "Some common types are RO, UV, UF, and Activated Carbon filters." },
  { question: "Why is water softening important?", answer: "It prevents scaling in pipes and improves soap efficiency." },
  { question: "How does a water softener work?", answer: "It replaces calcium and magnesium ions with sodium ions." },
  { question: "What is the difference between STP and ETP?", answer: "STP treats sewage; ETP treats industrial effluents." },
];

function FaqContent() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(prev => prev === index ? null : index);
  };

  return (
    <>
      {/* Mobile fallback */}
      <div className="mobile-fallback-banner">
        <h1>FAQ - We're Here to Help</h1>
        <p>Explore common questions about water treatment</p>
      </div>

      {/* Heading section */}
      <div className="helping-faq-content">
        <span><TbMessages className='faq-icon1' /></span>
        <h1>How can we help you</h1>
        <p>Have your own questions? (or)  +91-9560307837</p>
      </div>

      {/* FAQ list */}
      <div className='from-water-faq'>
        {faqData.map((faq, index) => (
          <div
            className={`faq-water-supply ${activeIndex === index ? 'active-faq' : ''}`}
            key={index}
            onClick={() => toggleFAQ(index)}
          >
            <div style={{ flex: 1 }}>
              <h1>{faq.question}</h1>
              {activeIndex === index && (
                <p style={{ marginTop: '1rem', fontSize: '1.4rem', color: '#fff' }}>{faq.answer}</p>
              )}
            </div>
            <span>
              {activeIndex === index ? <FaMinus /> : <FaPlus />}
            </span>
          </div>
        ))}
      </div>
    </>
  );
}

export default FaqContent;


