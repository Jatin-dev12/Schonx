'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

function TestiMonials() {
  const [testimonials, setTestimonials] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const token = process.env.NEXT_PUBLIC_API_TOKEN;
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;

    axios
      .get(`${apiUrl}testimonial`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.data && Array.isArray(res.data.testimonial)) {
          setTestimonials(res.data.testimonial);
        } else {
          setError('Invalid data format received from server');
        }
      })
      .catch((err) => {
        console.error('Failed to fetch testimonials:', err);
        setError('Failed to fetch testimonials');
      });
  }, []);

  return (
    <section className='testimonialsmain'>
      <div className='container-fluid'>
        <div className='row row_justify'>
          <div className='col-lg-12 col-md-12'>
            <div className='main-heading'>
              <h2 className='heading'>Built on Trust. Chosen by Experts</h2>
            </div>
          </div>
        </div>

        {error && <p className='error'>{error}</p>}

        <Swiper
          modules={[Navigation]}
          slidesPerView={1}
          spaceBetween={10}
          navigation
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 20 },
            991: { slidesPerView: 2, spaceBetween: 50 },
            1366: { slidesPerView: 3, spaceBetween: 50 },
          }}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className='testimonials'>
                <div className='testimonials-icon'>
                  <img src='/images/testo.png' alt='testimonial icon' />
                </div>
                <div className='testimonials-content'>
                  <p>{item.description}</p>
                </div>
                <div className='testimonials-block'>
                  <div className='testimonials-inner-1'>
                    <img src={item.banner} alt={item.name} />
                  </div>
                  <div className='testimonials-inner-2'>
                    <h3>
                      {item.name} <span>{item.position}</span>
                    </h3>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default TestiMonials;
