'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Mousewheel } from 'swiper/modules';
import Link from 'next/link';

import 'swiper/css';
import 'swiper/css/navigation';

function ProjectList() {
  const [portfolios, setPortfolios] = useState([]);
  const [error, setError] = useState('');
  const searchParams = useSearchParams();
  const slug = searchParams.get('slug') || ''; // Extract slug from URL query

  useEffect(() => {
    const token = process.env.NEXT_PUBLIC_API_TOKEN;
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;

    console.log('Client: Search Params:', Object.fromEntries(searchParams));
    console.log('Slug Value:', slug);
    console.log('API Token:', token ? '[Set]' : 'undefined');
    console.log('API URL:', apiUrl || 'undefined');

    if (!token || !apiUrl) {
      setError('Configuration error: API token or URL missing');
      console.error('Missing API token or URL');
      setPortfolios([]);
      return;
    }

    axios
      .get(`${apiUrl}project`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        timeout: 10000, // 10-second timeout
      })
      .then((res) => {
        console.log('API Response:', res.data);
        if (res.data?.status && Array.isArray(res.data.project)) {
          // Flatten portfolios from all projects' categories
          const allPortfolios = res.data.project.flatMap((project) =>
            project.category && Array.isArray(project.category.portfolios)
              ? project.category.portfolios.map((portfolio) => ({
                  id: portfolio.id,
                  name: portfolio.name,
                  description:
                    portfolio.description || 'No description available',
                  logo: portfolio.logo,
                  categoryName: project.category.name,
                  categorySlug: project.category.slug?.trim() || '', // Ensure slug is a string
                }))
              : []
          );

          console.log('All Portfolios:', allPortfolios);

          // Remove duplicates based on id
          const uniquePortfolios = Array.from(
            new Map(allPortfolios.map((item) => [item.id, item])).values()
          );

          console.log('Unique Portfolios:', uniquePortfolios);

          // Log category slugs and slug comparison
          uniquePortfolios.forEach((portfolio) => {
            console.log(
              `Portfolio: ${portfolio.name}, Category Slug: ${
                portfolio.categorySlug
              }, Slug Match: ${
                portfolio.categorySlug?.toLowerCase() === slug?.toLowerCase()
              }`
            );
          });

          // Filter portfolios where category slug matches the provided slug
          const filteredPortfolios = slug
            ? uniquePortfolios.filter((portfolio) => {
                const portfolioSlug = portfolio.categorySlug
                  ? String(portfolio.categorySlug).trim().toLowerCase()
                  : '';
                const isMatch = portfolioSlug === slug.toLowerCase();
                console.log(
                  `Filtering ${portfolio.name}: isMatch=${isMatch}, portfolioSlug="${portfolioSlug}", slug="${slug}"`
                );
                return isMatch;
              })
            : uniquePortfolios.filter(
                (portfolio) =>
                  !portfolio.categorySlug ||
                  portfolio.categorySlug.trim() === ''
              ); // Return all portfolios if no slug is provided or slug doesn't match

          console.log('Filtered Portfolios:', filteredPortfolios);

          if (filteredPortfolios.length === 0) {
            setError(
              slug ? `No portfolios found for the category: ${slug}` : null
            );
            const fallbackPortfolios = uniquePortfolios.slice(0, 6);
            console.log('Fallback Portfolios:', fallbackPortfolios);
            setPortfolios(fallbackPortfolios);
          } else {
            setError(null);
            setPortfolios(filteredPortfolios.slice(0, 6));
          }
        } else {
          setError('Invalid data format received from server');
          console.error('Invalid data format:', res.data);
          setPortfolios([]);
        }
      })
      .catch((err) => {
        console.error('Axios Error:', err.message);
        if (err.code === 'ECONNABORTED') {
          setError('API request timed out. Please try again later.');
        } else {
          setError('Failed to load portfolios. Please try again later.');
        }
        setPortfolios([]);
      });
  }, [slug, searchParams]);
  const truncate = (text, maxLength = 100) => {
    if (!text) return 'No description available';
    return text.length > maxLength
      ? text.substring(0, maxLength).trim() + '...'
      : text;
  };

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
        {portfolios.length > 0 ? (
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
              {portfolios.slice(0, 6).map((item) => (
                <SwiperSlide key={item.id}>
                  <div className='product_listing'>
                    <div className='product_listing_img'>
                      <img
                        src={item.logo || '/images/placeholder.png'}
                        alt={item.name || 'portfolio'}
                      />
                    </div>
                    <div className='product_listing_content'>
                      {/* <h3 style={{ textTransform: 'capitalize' }}>
                        {item.name}
                      </h3> */}
                    </div>
                    <div className='product_listing_content product_listing_content_hover'>
                      {/* <h3 style={{ textTransform: 'capitalize' }}>
                        {item.name}
                      </h3> */}
                      {/* <p>{truncate(item.description)}</p>
                      <div className='header-inner-3'>
                        <Link
                          href={`/portfolio/${item.id}`}
                          className='header-btn'
                        >
                          Explore it <img src='/images/arrow.png' alt='' />
                        </Link>
                      </div> */}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        ) : null}

        {/* Grid Layout */}
        {portfolios.length > 0 ? (
          <div className='row row_product_space'>
            {portfolios.slice(0, 6).map((item) => (
              <div className='col-lg-4 col-md-6 col-sm-12' key={item.id}>
                <div className='product_listing'>
                  <div className='product_listing_img'>
                    <img
                      src={item.logo || '/images/placeholder.png'}
                      alt={item.name}
                    />
                  </div>
                  <div className='product_listing_content'>
                    {/* <h3 style={{ textTransform: 'capitalize' }}>{item.name}</h3> */}
                  </div>
                  <div className='product_listing_content product_listing_content_hover'>
                    {/* <h3 style={{ textTransform: 'capitalize' }}>{item.name}</h3> */}
                    {/* <p>{truncate(item.description)}</p>
                    <div className='header-inner-3'>
                      <Link
                        href={`/portfolio/${item.id}`}
                        className='header-btn'
                      >
                        Explore it <img src='/images/arrow.png' alt='' />
                      </Link>
                    </div> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : null}

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

export default function ProductListWithSuspense() {
  return (
    <Suspense fallback={<div>Loading products...</div>}>
      <ProjectList />
    </Suspense>
  );
}
