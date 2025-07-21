

import c1 from '../../assets/images/c1.png'
import c2 from '../../assets/images/c2.png'
import c3 from '../../assets/images/c3.png'
import c4 from '../../assets/images/c4.png'
import { useEffect, useRef, useState } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Mousewheel } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

function PopularColours() {

  return (
    <>
      <section className='color_swatches popular_colours'>
        <div className='container-fluid'>
          <div className="row row_justify">
            <div className="col-lg-12 col-md-12">
              <div className="main-heading">
                <h2 className="heading text-center">Popular Colours</h2>
              </div>
            </div>
          </div>
          <div className='color_swatches_slider'>
            <Swiper
              modules={[Navigation, Mousewheel]}
              direction="horizontal"
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
              <SwiperSlide>
                <div className='color_swatches_sliderimg'> 
                  <img  src={c1} alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='color_swatches_sliderimg'>
                  <img src={c2} alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='color_swatches_sliderimg'>
                  <img src={c3} alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='color_swatches_sliderimg'>
                  <img src={c4} alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='color_swatches_sliderimg'>
                  <img src={c1} alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='color_swatches_sliderimg'>
                  <img src={c2} alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='color_swatches_sliderimg'>
                  <img src={c3} alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='color_swatches_sliderimg'>
                  <img src={c4} alt="" />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
}

export default PopularColours;
