'use client';

import { useEffect } from 'react';
import Swiper from 'swiper';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

Swiper.use([Navigation, Autoplay]);

export default function SwiperInitializer() {
  useEffect(() => {
    const swiperEls = document.querySelectorAll('.swiper');

    swiperEls.forEach((el) => {
      // Avoid initializing already initialized sliders
      if (!el.swiper) {
        new Swiper(el, {
          loop: true,
          autoplay: { delay: 3000 },
          navigation: {
            nextEl: el.querySelector('.swiper-button-next'),
            prevEl: el.querySelector('.swiper-button-prev'),
          },
        });
      }
    });
  }, []);

  return null; // No UI, just script
}
