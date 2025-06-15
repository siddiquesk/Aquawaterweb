import React, { useState } from 'react';
import './MajorComp.css';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import Testimonial from "../context/review";

function MajorComp() {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    if (index + 2 < Testimonial.length) {
      setIndex(index + 2);
    }
  };

  const handlePrev = () => {
    if (index - 2 >= 0) {
      setIndex(index - 2);
    }
  };

  return (
    <>
      {/* ⭐ Section: Client Reviews with Slider */}
      <section className='major-comp'>
        <section className="test-section container">
          {/* Section Heading */}
          <header>
            <h2>OUR CLIENT'S REVIEW</h2>
          </header>

          {/* Client Description + Arrows */}
          <div className="client-about">
            <h1>What Client Say About Us?</h1>
            <span>
              <div className='border-comp' onClick={handlePrev}>
                <FaAngleLeft />
              </div>
              <div className='border-comp' onClick={handleNext}>
                <FaAngleRight />
              </div>
            </span>
          </div>

          {/* Slider Section */}
          <div className="slider-wrapper">
            <div
              className="slider-track"
              style={{
                transform: `translateX(-${(index / 2) * 100}%)`,
              }}
            >
              {Testimonial.map((item, idx) => (
                <div className="slider-card" key={idx}>
                  {/* Star Rating */}
                  <span className='stars'>
                    {[...Array(5)].map((_, i) => <FaStar key={i} />)}
                  </span>

                  {/* Client Name */}
                  <h1 className='teacher-name'>{item.name}</h1>

                  {/* Review Text */}
                  <p>{item.review}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </section>

      {/* ✅ Stats and Product Showcase Section */}
      <div className="white-box">
        {/* Stats Section */}
        <section className="stats-section">
          <div className="stats-grid">
            <div className="stat-box">
              <h2>18400+</h2>
              <p>SATISFIED CUSTOMERS</p>
            </div>
            <div className="stat-box">
              <h2>20+</h2>
              <p>YEARS EXPERIENCE</p>
            </div>
            <div className="stat-box">
              <h2>9+</h2>
              <p>COUNTRIES</p>
            </div>
            <div className="stat-box">
              <h2>48+</h2>
              <p>PRODUCTS</p>
            </div>
          </div>
        </section>

        {/* Product Image Showcase */}
        <div className="white-content">
          <div className="main-wrapper">
            <div className='reviews-image-container'>
              <img src="./images/supply1.avif" alt="Supply 1" />
            </div>
            <div className='reviews-image-container'>
              <img src="./images/supply2.avif" alt="Supply 2" />
            </div>
            <div className='reviews-image-container'>
              <img src="./images/supply3.avif" alt="Supply 3" />
            </div>
            <div className='reviews-image-container'>
              <img src="./images/supply4.avif" alt="Supply 4" />
            </div>
          </div>
        </div>
      </div>
    </>

  );
}

export default MajorComp;


