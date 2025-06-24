import React, { useState } from 'react';
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6';
import './Hero.css';

const images = [

  {
    src: '/images/tech18.webp',
    title: 'Smart RO Systems',
    desc: 'Industrial-grade filtration delivering clean, high-capacity water for commercial applications.'
  },
  {
    src: '/images/tech4.webp',
    title: 'Farm-Ready Water',
    desc: 'Treated water optimized for irrigation, boosting crop health and sustainable farming.'
  },
  {
    src: '/images/waterplant.avif',
    title: 'Automated Water Plants',
    desc: 'Advanced purification units that process and supply clean water for diverse needs.'
  },
  {
    src: '/images/water3.avif',
    title: 'Safe RO for Homes',
    desc: 'Reliable RO systems ensuring pure, safe drinking water for every household.'
  },
  {
    src: '/images/waterpure.webp',
    title: 'Every Drop Counts',
    desc: 'Recycling and conservation technology designed to minimize water wastage smartly.'
  }

];






function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imgLoaded, setImgLoaded] = useState(false);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    setImgLoaded(false);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    setImgLoaded(false);
  };



  const { src, title, desc } = images[currentIndex];

  return (
    <>
      <main className="main-hero">
        <section className="main-section" aria-label="Hero Image Slider">
          <button className="arrow left-arrow" onClick={handlePrev} aria-label="Previous Slide">
            <FaArrowLeftLong />
          </button>

          <div className="image-container">
            <img
              src={src}
              alt={title}
              onLoad={() => setImgLoaded(true)}
              className={imgLoaded ? 'loaded' : ''}
            />

            {/* Hover Zones */}
            <div
              className="hover-zone left"
              onMouseEnter={handlePrev}
            ></div>
            <div
              className="hover-zone right"
              onMouseEnter={handleNext}
            ></div>

            <figcaption className="image-content">
              <h1 className='slider-content'>{title}</h1>
              <p className='slider-content'>{desc}</p>
            </figcaption>
          </div>

          <button className="arrow right-arrow" onClick={handleNext} aria-label="Next Slide">
            <FaArrowRightLong />
          </button>
        </section>
      </main>

      <section className='small-section' aria-label="Additional Section"></section>
    </>
  );
}

export default Hero;

