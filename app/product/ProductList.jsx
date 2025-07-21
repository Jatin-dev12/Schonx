'use client';

import { useEffect, useRef, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import parse from 'html-react-parser';

import 'swiper/css';
import 'swiper/css/navigation';

function ProductList() {
  const searchParams = useSearchParams();
  const slug = searchParams.get('slug');
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState('');
  const [category, setCategory] = useState({
    name: '',
    description: '',
    title: '',
    sub_heading: '',
  });

  const placeholderImages = [
    '/images/placeholder1.jpg',
    '/images/placeholder2.jpg',
    '/images/placeholder3.jpg',
    '/images/placeholder4.jpg',
  ];

  useEffect(() => {
    const token = process.env.NEXT_PUBLIC_API_TOKEN;

    const fetchProjects = async () => {
      try {
        const params = slug ? { category_slug: slug } : {};
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}project`,
          {
            headers: { Authorization: `Bearer ${token}` },
            params,
          }
        );

        if (res.data?.status && Array.isArray(res.data.project)) {
          let filtered = res.data.project;

          // ✅ Only filter when slug exists
          if (slug) {
            filtered = res.data.project.filter(
              (proj) => proj.category?.slug === slug
            );
          }
          if (filtered.length > 0) {
            setProjects(filtered);
            // Use category info only if slug is present
            if (slug) {
              setCategory({
                name: filtered[0].category?.name,
                description: filtered[0].category?.description,
                title: filtered[0].category?.title || '',
                sub_heading: filtered[0].category?.sub_heading || '',
              });
            } else {
              setCategory({
                name: 'Explore Our Signature Products',
                description:
                  'Every Product, Every Detail — Built for Design & Performance',
                title: 'Explore Our Signature Products',
                sub_heading:
                  'Every Product, Every Detail — Built for Design & Performance',
              });
            }
          } else {
            setProjects([]);
            setCategory({
              name: '',
              description: '',
              title: '',
              sub_heading: '',
            });
          }
        } else {
          setError('Invalid data format received from server');
        }
      } catch (err) {
        console.error('Failed to fetch projects:', err.message);
        setError('Failed to load projects');
      }
    };

    fetchProjects();
  }, [slug]);

  const containerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const isAnimatingRef = useRef(false);

  const createCubes = (imageUrl) => {
    const container = containerRef.current;
    const cubes = [];
    const w = window.innerWidth / cols;
    const h = window.innerHeight / rows;

    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        const cube = document.createElement('div');
        cube.classList.add('cube');
        cube.style.width = `${w}px`;
        cube.style.height = `${h}px`;
        cube.style.left = `${x * w}px`;
        cube.style.top = `${y * h}px`;
        cube.style.backgroundImage = imageUrl;
        cube.style.backgroundSize = `${window.innerWidth}px ${window.innerHeight}px`;
        cube.style.backgroundPosition = `-${x * w}px -${y * h}px`;
        cube.style.animationDelay = `${(x + y) * 70}ms`;
        container.appendChild(cube);
        cubes.push(cube);
      }
    }

    return cubes;
  };
  const animateTransition = () => {
    if (isAnimatingRef.current) return;
    isAnimatingRef.current = true;

    const container = containerRef.current;
    const bannerEls = container.querySelectorAll('.banner');

    const currentBanner = bannerEls[currentIndex];
    const nextIndex = (currentIndex + 1) % banners.length;
    const nextBanner = bannerEls[nextIndex];

    nextBanner.style.zIndex = 0;
    nextBanner.style.opacity = 1;
    nextBanner.classList.add('active');

    const cubes = createCubes(banners[currentIndex]);

    currentBanner.style.opacity = 0;

    setTimeout(() => {
      cubes.forEach((cube) => cube.remove());
      currentBanner.classList.remove('active');
      currentBanner.style.opacity = 0;
      setCurrentIndex(nextIndex);
      isAnimatingRef.current = false;
    }, (cols + rows) * 70 + 1300);
  };

  // Function to parse HTML and replace `classname` with `className`
  const parseDistinctiveHTML = (htmlString) => {
    if (!htmlString) return <p>No distinctive features available.</p>;

    // Replace `classname` with `className` for React compatibility
    const cleanedHTML = htmlString.replace(/classname=/g, 'className=');

    return parse(cleanedHTML, {
      replace: (domNode) => {
        if (
          domNode.name === 'img' &&
          domNode.attribs.src?.startsWith('data:image')
        ) {
        }
      },
    });
  };

  return (
    <>
      <div className='banner-container' ref={containerRef}>
        {/* Static banners */}
        <div
          className='banner active'
          style={{ backgroundImage: `url('/images/aboutpagebanner.jpg')` }}
        >
          <div className='banner-content'>
            <div className='banner-content-left'>
              <h1 className='banner-heading'>{category.title || 'Category'}</h1>
              <p className='banner-para'>
                {category.sub_heading || 'Showing all available Products.'}
              </p>
              <div className='header-inner-3'>
                <a className='header-btn' href='#'>
                  {' '}
                  Get Free Consultation <img
                    src='/images/arrow.png'
                    alt=''
                  />{' '}
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          className='banner'
          style={{ backgroundImage: `url('/images/aboutpagebanner.jpg')` }}
        >
          <div className='banner-content'>
            <div className='banner-content-left'>
              <h1 className='banner-heading'>{category.title || 'Category'}</h1>
              <p className='banner-para'>
                {category.sub_heading || 'Showing all available Products.'}
              </p>
              <div className='header-inner-3'>
                <a className='header-btn' href='#'>
                  {' '}
                  Get Free Consultation <img
                    src='/images/arrow.png'
                    alt=''
                  />{' '}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section
        className='what-we-do product_listpage'
        style={{ backgroundImage: `url('/images/white_bg.jpg')` }}
      >
        <div className='container-fluid'>
          <div className='row row_justify'>
            <div className='col-lg-9 col-md-12'>
              <div className='main-heading'>
                <h2 className='heading'>{category.name || 'Category'}</h2>
                <p className='para'>{category.description || 'Description'}</p>
              </div>
            </div>
            <div className='col-lg-3 col-md-12'>
              <div className='what-we-do-bt'>
                <div className='header-inner-3'>
                  {/* <a className='header-btn' href='#'>
                    Read More <img src='/images/arrow.png' alt='' />
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='product_list_grid'>
        <div className='container-fluid'>
          <div className='row row_product_list_grid'>
            {projects.length === 0 && !error && (
              <div className='col-12'>
                <p>No projects found for this category.</p>
              </div>
            )}

            {projects.map((proj, index) => (
              <div
                className='col-lg-6 col-md-6 col-sm-12'
                key={proj.id || index}
              >
                <div className='product_list_grid_block'>
                  <div className='product_list_grid_block_slider'>
                    <div className='product_list_grid_block_nav'>
                      <div className='swiper-button-prev-custom'>
                        <img src='/images/arrow.png' alt='Previous' />
                      </div>
                      <div className='swiper-button-next-custom'>
                        <img src='/images/arrow.png' alt='Next' />
                      </div>
                    </div>

                    <Swiper
                      modules={[Navigation]}
                      slidesPerView={1}
                      spaceBetween={10}
                      navigation={{
                        nextEl: '.swiper-button-next-custom',
                        prevEl: '.swiper-button-prev-custom',
                      }}
                      breakpoints={{
                        640: { slidesPerView: 1, spaceBetween: 20 },
                        991: { slidesPerView: 1, spaceBetween: 20 },
                        1366: { slidesPerView: 1, spaceBetween: 20 },
                      }}
                    >
                      {(proj.images && proj.images.length > 0
                        ? proj.images
                        : [proj.hero_img]
                      ).map((img, idx) => (
                        <SwiperSlide key={idx}>
                          <div className='product_list_grid_block_sliderimg'>
                            <img
                              src={img || placeholderImages[index % 4]}
                              alt={`${proj.name} Slide ${idx}`}
                            />
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>

                  <div className='product_list_grid_block_content'>
                    <h3>{proj.name}</h3>
                    <h4>{proj.overview_content || 'Your subtitle here'}</h4>
                    <div className='what-we-do-bt'>
                      <div className='header-inner-3'>
                        <Link
                          className='header-btn'
                          href={`/product/${proj.slug}`}
                        >
                          Read More <img src='/images/arrow.png' alt='' />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {error && (
              <div className='col-12'>
                <p style={{ color: 'red' }}>{error}</p>
              </div>
            )}
          </div>
        </div>
      </section>
      <section
        className='distinctive_Features'
        style={{ backgroundImage: `url('/images/white_bgbt.jpg')` }}
      >
        <div className='container-fluid'>
          <div className='row row_justify'>
            <div className='col-lg-12 col-md-12'>
              <div className='main-heading'>
                <h2 className='heading text-center'>Distinctive Features</h2>
                {/* <p className='para text-center'>The Schon Window Advantage</p> */}
              </div>
            </div>
          </div>

          <div className='row why_chose_schon_row why_chose_schon_row_ad'>
            <div className='col-lg-4 col-md-6 col-sm-12'>
              <div className='why_chose_schon_block'>
                <div className='why_chose_schon_icon'>
                  <img src='/images/productlisticon10.png' alt='' />
                </div>
                <div className='why_chose_schon_head'>
                  <h3>Aluminium Doors</h3>
                </div>
                <div className='why_chose_schon_para'>
                  <p>
                    Sliding, folding, hinged, swing, and automated systems —
                    crafted for smooth performance, modern aesthetics, and
                    maximum security. Ideal for both residential and commercial
                    applications.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-12'>
              <div className='why_chose_schon_block'>
                <div className='why_chose_schon_icon'>
                  <img src='/images/productlisticon11.png' alt='' />
                </div>
                <div className='why_chose_schon_head'>
                  <h3>Aluminium Windows </h3>
                </div>
                <div className='why_chose_schon_para'>
                  <p>
                    From ultra-slim sliding systems to fixed, awning, and
                    casement windows, our range brings in natural light,
                    ventilation, and thermal efficiency with sleek, minimal
                    designs.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-12'>
              <div className='why_chose_schon_block'>
                <div className='why_chose_schon_icon'>
                  <img src='/images/productlisticon12.png' alt='' />
                </div>
                <div className='why_chose_schon_head'>
                  <h3>Railings</h3>
                </div>
                <div className='why_chose_schon_para'>
                  <p>
                    Modern aluminium and glass railing systems for balconies,
                    staircases, and terraces — combining safety, transparency,
                    and elegance.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-12'>
              <div className='why_chose_schon_block'>
                <div className='why_chose_schon_icon'>
                  <img src='/images/productlisticon13.png' alt='' />
                </div>
                <div className='why_chose_schon_head'>
                  <h3>Shower Cubicles</h3>
                </div>
                <div className='why_chose_schon_para'>
                  <p>
                    Designer cubicles with brass/chrome hardware and
                    high-performance sealing — offering spa-like luxury,
                    effortless maintenance, and lasting durability.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-12'>
              <div className='why_chose_schon_block'>
                <div className='why_chose_schon_icon'>
                  <img src='/images/productlisticon14.png' alt='' />
                </div>
                <div className='why_chose_schon_head'>
                  <h3>Luxury Wall Décor & Partitions</h3>
                </div>
                <div className='why_chose_schon_para'>
                  <p>
                    Our exclusive range of lacquered and decorative glass panels
                    reimagines interiors. Ideal for living spaces, bedrooms, and
                    premium offices — these pieces add both function and
                    finesse.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default function ProductListWithSuspense() {
  return (
    <Suspense fallback={<div>Loading products...</div>}>
      <ProductList />
    </Suspense>
  );
}
