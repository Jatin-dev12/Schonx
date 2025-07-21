'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Mousewheel } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

function ProjectListing() {
  const [portfolio, setPortfolio] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const token = process.env.NEXT_PUBLIC_API_TOKEN;
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}portfolio`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.data && Array.isArray(res.data.portfolio)) {
          setPortfolio(res.data.portfolio);
        } else {
          setError('Invalid data format received from server');
        }
      })
      .catch((err) => {
        console.error('Failed to fetch portfolio:', err);
        setError('Failed to load portfolio');
      });
  }, []);
  // Character limiter function
  const truncate = (text, maxLength = 100) => {
    if (!text) return '';
    return text.length > maxLength
      ? text.substring(0, maxLength).trim() + '...'
      : text;
  };
  return (
    <section
      className='project_list project_listing'
      style={{ backgroundImage: `url('/images/white_bg.jpg')` }}
    >
      <div className='container-fluid'>
        <div className='row row_justify'>
          <div className='col-lg-12 col-md-12'>
            <div className='main-heading'>
              <h2 className='heading text-center'>Our Projects</h2>
            </div>
          </div>
        </div>

        {/* Swiper slider */}
        <div className='row row_product_space row_product_space-mobile'>
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
                slidesPerView: 1.1,
                spaceBetween: 10,
              },
              991: {
                slidesPerView: 1.2,
              },
              1366: {
                slidesPerView: 1.2,
              },
              1600: {
                slidesPerView: 1.5,
              },
            }}
          >
            {Array.isArray(portfolio) &&
              portfolio.map((item, index) => (
                <SwiperSlide key={`slide-${index}`}>
                  <div className='product_listing product_listing_data'>
                    <div className='product_listing_img'>
                      <img src={item.logo} alt={item.name} />
                    </div>
                    <div className='product_listing_content'>
                      {/* <h3>{item.name}</h3> */}
                    </div>
                    <div className='product_listing_content product_listing_content_hover'>
                      {/* <h3>{item.name}</h3> */}
                      {/* <p>{truncate(item.description)}</p>
                      <div className='header-inner-3'>
                        <a className='header-btn' href='#'>
                          Explore it <img src='/images/arrow.jpg' alt='' />
                        </a>
                      </div> */}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>

        {/* Grid view */}
        <div className='row row_product_space'>
          {Array.isArray(portfolio) &&
            portfolio.map((item, index) => (
              <div
                className='col-lg-4 col-md-6 col-sm-12'
                key={`grid-${index}`}
              >
                <div className='product_listing'>
                  <div className='product_listing_img'>
                    <img src={item.logo} alt={item.name} />
                  </div>
                  <div className='product_listing_content'>
                    {/* <h3>{item.name}</h3> */}
                  </div>
                  <div className='product_listing_content product_listing_content_hover'>
                    {/* <h3>{item.name}</h3> */}
                    {/* <p>{truncate(item.description)}</p>
                    <div className='header-inner-3'>
                      <a className='header-btn' href='#'>
                        Explore it <img src='/images/arrow.jpg' alt='' />
                      </a>
                    </div> */}
                  </div>
                </div>
              </div>
            ))}
        </div>

        {error && (
          <div className='row'>
            <div className='col-12'>
              <p style={{ color: 'red' }}>{error}</p>
            </div>
          </div>
        )}
        {/* <div className='row row_pagination'>
            <div className='pagination'>
              <div className='page-left'>
                <span>
                  <a href='#'>
                    <img src={pageleft} alt='' />
                  </a>
                </span>
              </div>
              <div className='page-mide'>
                <span>
                  <a className='active' href='#'>
                    1
                  </a>
                </span>
                <span>
                  <a href='#'>2</a>
                </span>
                <span>
                  <a href='#'>3</a>
                </span>
                <span>
                  <a href='#'>4</a>
                </span>
                <span>
                  <a href='#'>5</a>
                </span>
              </div>
              <div className='page-right'>
                <span>
                  <a href='#'>
                    <img src={pageright} alt='' />
                  </a>
                </span>
              </div>
            </div>
          </div> */}
      </div>
    </section>
  );
}

export default ProjectListing;
