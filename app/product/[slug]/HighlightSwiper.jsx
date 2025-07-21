// 'use client';
// import React, { useEffect, useRef } from 'react';
// import { Navigation } from 'swiper/modules';
// import Swiper from 'swiper';
// import 'swiper/css';
// import 'swiper/css/navigation';

// export default function HighlightSwiper({ html }) {
//   const containerRef = useRef();

//   useEffect(() => {
//     if (!containerRef.current) return;

//     // Initialize Swiper in dynamically injected HTML
//     const sliders = containerRef.current.querySelectorAll('.swiper');
//     sliders.forEach((slider) => {
//       if (!slider.swiper) {
//         new Swiper(slider, {
//           modules: [Navigation],
//           navigation: {
//             nextEl: slider.querySelector('.swiper-button-next'),
//             prevEl: slider.querySelector('.swiper-button-prev'),
//           },
//           loop: true,
//         });
//       }
//     });
//   }, [html]);

//   return <div ref={containerRef} dangerouslySetInnerHTML={{ __html: html }} />;
// }

'use client';

import React, { useEffect, useRef } from 'react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function HighlightSwiper({ html }) {
  const containerRef = useRef(null);

  useEffect(() => {
    // Ensure DOM is ready and Swiper classes exist
    if (!containerRef.current) return;

    // Initialize Swiper manually for each .swiper element inside the HTML
    const swiperElements = containerRef.current.querySelectorAll('.swiper');
    swiperElements.forEach((el) => {
      new Swiper(el, {
        modules: [Navigation, Pagination, Autoplay],
        loop: true,
        navigation: {
          nextEl: el.querySelector('.swiper-button-next'),
          prevEl: el.querySelector('.swiper-button-prev'),
        },
        pagination: {
          el: el.querySelector('.swiper-pagination'),
          clickable: true,
        },
        autoplay: {
          delay: 3000,
        },
      });
    });
  }, [html]);

  return <div ref={containerRef} dangerouslySetInnerHTML={{ __html: html }} />;
}
