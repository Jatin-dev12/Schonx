'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Mousewheel } from 'swiper/modules';
import Link from 'next/link';

import 'swiper/css';
import 'swiper/css/navigation';

function ProjectList() {
  const [portfolio, setPortfolio] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const token = process.env.NEXT_PUBLIC_API_TOKEN;
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;

    axios
      .get(`${apiUrl}portfolio`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.data && Array.isArray(res.data.portfolio)) {
          // Filter portfolios that don't have a category selected
          const filteredPortfolios = res.data.portfolio.filter(
            (item) =>
              !item.category_id ||
              item.category_id === null ||
              item.category_id === undefined
          );
          setPortfolio(filteredPortfolios);
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

  // Don't render if no portfolios found
  if (portfolio.length === 0) {
    return null;
  }

  return (
    <section
      className='project_list'
      style={{ backgroundImage: `url('/images/projectbg.png')` }}
    >
      <div className='container-fluid'>
        <div className='row row_justify'>
          <div className='col-lg-12 col-md-12'>
            <div className='main-heading'>
              <h2 className='heading'>Our Projects</h2>
              <p className='para'>Where Vision Becomes Reality</p>
              <div className='small-para'>
                <p className='small-inpara mt-3'>
                  From luxury residences to landmark commercial spaces, our
                  projects reflect the precision, performance, and design
                  excellence that define Schon Doorways. Each installation is a
                  testament to our commitment to craftsmanship, collaboration,
                  and delivering solutions that elevate architecture and
                  lifestyle alike.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Swiper carousel */}
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
              640: { slidesPerView: 1.1 },
              991: { slidesPerView: 1.2 },
              1366: { slidesPerView: 1.2 },
              1600: { slidesPerView: 1.5 },
            }}
          >
            {portfolio.slice(0, 6).map((item, index) => (
              <SwiperSlide key={index}>
                <div className='product_listing'>
                  <div className='product_listing_img'>
                    <img src={item.logo} alt={item.name || 'project'} />
                  </div>
                  <div className='product_listing_content'>
                    {/* <h3>{item.name}</h3> */}
                  </div>
                  <div className='product_listing_content product_listing_content_hover'>
                    {/* <h3>{item.name}</h3> */}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Grid Layout */}
        <div className='row row_product_space'>
          {portfolio.slice(0, 6).map((item, index) => (
            <div className='col-lg-4 col-md-6 col-sm-12' key={index}>
              <div className='product_listing'>
                <div className='product_listing_img'>
                  <img src={item.logo} alt={item.name} />
                </div>
                <div className='product_listing_content'>
                  {/* <h3>{item.name}</h3> */}
                </div>
                <div className='product_listing_content product_listing_content_hover'>
                  {/* <h3>{item.name}</h3> */}
                </div>
              </div>
            </div>
          ))}
        </div>

        {error && (
          <div className='row'>
            <div className='col-12'>
              <p className='text-danger'>{error}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default ProjectList;
