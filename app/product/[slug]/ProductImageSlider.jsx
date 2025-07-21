'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function ProductImageSlider({ images = [] }) {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 2500 }}
      loop={true}
    >
      {images.map((img, index) => (
        <SwiperSlide key={index}>
          <img
            src={typeof img === 'string' ? img : img.image}
            alt={`slide-${index}`}
            style={{ width: '100%', height: 'auto' }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
