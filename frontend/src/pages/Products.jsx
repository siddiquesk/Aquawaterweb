import React from 'react';
import './Products.css';
import Plants from '../context/api';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { FaAnglesLeft, FaAnglesRight } from 'react-icons/fa6';
import 'swiper/css';
import 'swiper/css/navigation';

function Products() {
  return (
    <main className='main-card-section'>
      <div className='card-section-text'>
        <h2>How We Are</h2>
        <h1>We Provide These Products</h1>
      </div>

      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={30}
        slidesPerView={4}
        navigation
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
        className='swiper-container'
      >
        {Plants.map((plant) => (
          <SwiperSlide key={plant.id}>
            <div className='product-card'>
              <div className='product-image'>
                <img src={plant.image} alt={plant.title} />
              </div>
              <div className='product-details'>
                <h2>{plant.title}</h2>
                <p>{plant.description}</p>
                <p className='read-more'>
                  <FaAnglesLeft /> Read More <FaAnglesRight />
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </main>
  );
}

export default Products;

