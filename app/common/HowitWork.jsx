'use client';
import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Mousewheel, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

function HowItWorks() {
  return (
    <section className='hoeitwork'>
      <div className='container-fluid'>
        <div className='row row_justify'>
          <div className='col-lg-4 col-md-12'>
            <div className='main-heading'>
              <h2 className='heading'>How it Works</h2>
              <p className='para'>
                Want to make your dream home a reality? Here’s how to start with
                Schon:
              </p>
            </div>
            <div className='what-we-do-bt'>
              <div className='header-inner-3'>
                <a className='header-btn' href='/contact'>
                  Free Consultation <img src='/images/arrow.png' alt='arrow' />
                </a>
              </div>
            </div>
          </div>

          <div className='col-lg-8 col-md-12 padd_rigth'>
            <Swiper
              modules={[Navigation, Mousewheel, Autoplay]}
              direction='horizontal'
              slidesPerView={1}
              spaceBetween={30}
              loop={true}
              autoplay={{
                delay: 3000, // 3 seconds
                disableOnInteraction: false,
              }}
              mousewheel={{
                forceToAxis: true,
                releaseOnEdges: true,
                sensitivity: 1,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                },
                991: {
                  slidesPerView: 1.2,
                },
                1366: {
                  slidesPerView: 1.2,
                },
                1600: {
                  slidesPerView: 1.4,
                },
              }}
            >
              <SwiperSlide>
                <div className='hoeitwork_slider'>
                  <div className='hoeitwork_slider_inner1'>
                    <div className='main-heading'>
                      <h2 className='heading'>
                        Consultation{' '}
                        <span className='hoeitwork_sliderspan'>1</span>
                      </h2>

                      <p className='para'>
                        <span>Let’s Talk Design Over Coffee - </span> We’d love
                        to welcome you to our experience centre for a
                        personalised consultation. Explore our range, get
                        inspired by real displays, and share your vision with
                        our experts—over a great cup of coffee.
                      </p>
                    </div>
                  </div>
                  <div className='hoeitwork_slider_inner2'>
                    <img src='/images/left_1.png' alt='Consultation' />
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className='hoeitwork_slider'>
                  <div className='hoeitwork_slider_inner1'>
                    <div className='main-heading'>
                      <h2 className='heading'>
                        Design Approval{' '}
                        <span className='hoeitwork_sliderspan'>2</span>
                      </h2>
                      <p className='para'>
                        <span>Finalise with Confidence: </span> Once we
                        understand your needs, our team presents tailored
                        solutions and detailed drawings for your approval. Every
                        line and finish is refined to reflect your space and
                        style.
                      </p>
                    </div>
                  </div>
                  <div className='hoeitwork_slider_inner2'>
                    <img src='/images/left_1.png' alt='Approval' />
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className='hoeitwork_slider'>
                  <div className='hoeitwork_slider_inner1'>
                    <div className='main-heading'>
                      <h2 className='heading'>
                        Precision Production{' '}
                        <span className='hoeitwork_sliderspan'>3</span>
                      </h2>
                      <p className='para'>
                        <span>Engineered to Perfection: </span> Your approved
                        design is then brought to life at our advanced
                        manufacturing facility, where German engineering meets
                        meticulous Indian craftsmanship.
                      </p>
                    </div>
                  </div>
                  <div className='hoeitwork_slider_inner2'>
                    <img src='/images/left_1.png' alt='Execution' />
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className='hoeitwork_slider'>
                  <div className='hoeitwork_slider_inner1'>
                    <div className='main-heading'>
                      <h2 className='heading'>
                        Professional Installation{' '}
                        <span className='hoeitwork_sliderspan'>4</span>
                      </h2>
                      <p className='para'>
                        <span>Seamless & On Schedule: </span> Our skilled
                        installation team ensures everything is fitted
                        flawlessly, with minimal disruption and maximum
                        attention to detail—so your space is ready to impress.
                      </p>
                    </div>
                  </div>
                  <div className='hoeitwork_slider_inner2'>
                    <img src='/images/left_1.png' alt='Execution' />
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
