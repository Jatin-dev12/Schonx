'use client';
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Mousewheel } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

function ColorSwatches() {
  const [color, setColor] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL;
        const res = await axios.get(`${apiUrl}color`);
        const allColor = res.data.color;
        setColor(allColor);
      } catch (error) {
        console.error('Error fetching colors:', error);
      }
    }

    fetchData();
  }, []);
  return (
    <>
      <section className='color_swatches'>
        <div className='container-fluid'>
          <div className='row row_justify'>
            <div className='col-lg-12 col-md-12'>
              <div className='main-heading'>
                <h2 className='heading text-center'>Color Swatches</h2>
              </div>
            </div>
          </div>
          <div className='color_swatches_slider'>
            <Swiper
              modules={[Navigation, Mousewheel]}
              direction='horizontal'
              slidesPerView={1.2}
              spaceBetween={30}
              mousewheel={{
                forceToAxis: true,
                releaseOnEdges: true,
                sensitivity: 1,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 1.2,
                },
                991: {
                  slidesPerView: 2,
                },
                1366: {
                  slidesPerView: 3.5,
                },
                1600: {
                  slidesPerView: 4,
                },
              }}
            >
              {color.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className='color_swatches_sliderimg'>
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div class='color_swatches_sliderimgtest main-heading'>
                    <p class='para text-center'>{item.name}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
}

export default ColorSwatches;
