'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Mousewheel } from 'swiper/modules';
import Link from 'next/link';

import 'swiper/css';
import 'swiper/css/navigation';

function CategoryProjectList({ categoryId = null }) {
  const [portfolio, setPortfolio] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    // Only fetch if categoryId is not undefined (null is allowed for all with category)
    if (typeof categoryId === 'undefined') {
      setLoading(false);
      setPortfolio([]);
      setError('Category not available');
      return;
    }

    setLoading(true);
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
          let filteredPortfolios;
          if (categoryId) {
            filteredPortfolios = res.data.portfolio.filter(
              (item) => item.category_id === categoryId
            );
          } else {
            filteredPortfolios = res.data.portfolio.filter(
              (item) =>
                item.category_id &&
                item.category_id !== null &&
                item.category_id !== undefined
            );
          }
          setPortfolio(filteredPortfolios);
          setError('');
        } else {
          setError('Invalid data format received from server');
        }
      })
      .catch((err) => {
        setError('Failed to load portfolio');
      })
      .finally(() => setLoading(false));
  }, [categoryId]);

  // Character limiter function
  const truncate = (text, maxLength = 100) => {
    if (!text) return '';
    return text.length > maxLength
      ? text.substring(0, maxLength).trim() + '...'
      : text;
  };

  if (loading) return <div>Loading portfolios...</div>;
  if (error) return <div>{error}</div>;
  if (portfolio.length === 0) return <div>No portfolios found.</div>;

  return (
    <section
      className='project_list'
      style={{ backgroundImage: `url('/images/projectbg.png')` }}
    >
      <div className='container-fluid'>
        <div className='row row_justify'>
          <div className='col-lg-12 col-md-12'>
            <div className='main-heading'>
              <h2 className='heading'>
                {categoryId ? 'Category Projects' : 'Featured Projects'}
              </h2>
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
            {portfolio.map((item, index) => (
              <SwiperSlide key={index}>
                <div className='product_listing'>
                  <div className='product_listing_img'>
                    <img src={item.logo} alt={item.name || 'project'} />
                  </div>
                  <div className='product_listing_content'>
                    <h3>{item.name}</h3>
                  </div>
                  <div className='product_listing_content product_listing_content_hover'>
                    <h3>{item.name}</h3>
                    {/* <p>{truncate(item.description)}</p>
                    <div className='header-inner-3'>
                      <a className='header-btn' href='#'>
                        Explore it <img src='/images/arrow.png' alt='' />
                      </a>
                    </div> */}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Grid Layout */}
        <div className='row row_product_space'>
          {portfolio.map((item, index) => (
            <div className='col-lg-4 col-md-6 col-sm-12' key={index}>
              <div className='product_listing'>
                <div className='product_listing_img'>
                  <img src={item.logo} alt={item.name} />
                </div>
                <div className='product_listing_content'>
                  <h3>{item.name}</h3>
                </div>
                <div className='product_listing_content product_listing_content_hover'>
                  <h3>{item.name}</h3>
                  {/* <p>{truncate(item.description)}</p>
                  <div className='header-inner-3'>
                    <a className='header-btn' href='#'>
                      Explore it <img src='/images/arrow.png' alt='' />
                    </a>
                  </div> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CategoryProjectList;
