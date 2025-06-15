import React, { useState } from 'react';
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6';
import './Hero.css';

const images = [
 
  {
    src: '/images/water3.avif',
    title: 'Advanced Filtration',
    desc: 'Enjoy safe and great-tasting water with our advanced multi-stage filtration systems designed to eliminate contaminants.'
  },
  {
    src: '/images/drop.avif',
    title: 'Every Drop Matters',
    desc: 'We believe every drop counts. Our technology ensures maximum efficiency in saving and purifying water for a better tomorrow.'
  },
  {
    src: '/images/treatment7.avif',
    title: 'Eco-friendly Plant',
    desc: 'Our systems are built with sustainability in mind — reducing waste, conserving energy, and protecting the environment.'
  },
  {
    src: '/images/treatment6.avif',
    title: 'Your Health, Our Priority',
    desc: 'We ensure the water you consume meets the highest standards of purity, promoting a healthier lifestyle for your family.'
  },
  {
    src: '/images/treatment4.avif',
    title: 'Purification is Our Promise',
    desc: 'From installation to maintenance, we offer reliable solutions that make purified water accessible for everyone.'
  }
];


function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imgLoaded, setImgLoaded] = useState(false);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    setImgLoaded(false);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
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

          <figure className="image-container">
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
          </figure>

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

