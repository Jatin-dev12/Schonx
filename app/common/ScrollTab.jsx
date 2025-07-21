'use client'; // required because it uses hooks and Swiper

import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Link from 'next/link';

// You may want to import from public folder using full path or optimize with next/image
const placeholderImages = [
  '/images/window1.png',
  '/images/window2.png',
  '/images/window3.png',
  '/images/window4.png',
];

function ScrollTab() {
  const containerRef = useRef(null);
  const [activeId1, setActiveId1] = useState('');
  const [projects, setProjects] = useState([]);
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState('');

  const token = process.env.NEXT_PUBLIC_API_TOKEN;
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    axios
      .get(`${apiUrl}category`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        if (res.data?.status && Array.isArray(res.data.category)) {
          setCategories(res.data.category);
          // Set first category as default active
          if (res.data.category.length > 0) {
            setActiveId1(res.data.category[0].name);
          }
        } else {
          setError('Invalid category data');
        }
      })
      .catch(() => setError('Failed to load categories'));
  }, []);

  useEffect(() => {
    axios
      .get(`${apiUrl}project`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        if (res.data?.status && Array.isArray(res.data.project)) {
          setProjects(res.data.project);
        } else {
          setError('Invalid project data');
        }
      })
      .catch(() => setError('Failed to load projects'));
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      let closestSection = null;
      let minOffset = Infinity;

      categories
        .map((cat) => cat.name)
        .forEach((id) => {
          const section = document.getElementById(id);
          if (section) {
            const sectionTop =
              section.getBoundingClientRect().top -
              container.getBoundingClientRect().top;
            const offset = Math.abs(sectionTop);
            if (sectionTop <= container.offsetHeight && offset < minOffset) {
              minOffset = offset;
              closestSection = id;
            }
          }
        });

      if (closestSection && closestSection !== activeId1) {
        setActiveId1(closestSection);
      }
    };

    container.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      container.removeEventListener('scroll', handleScroll);
    };
  }, [activeId1, categories]);

  const handleSectionClick = (id) => {
    setActiveId1(id);
    const section = document.getElementById(id);
    if (section && containerRef.current) {
      const container = containerRef.current;
      const sectionTop = section.offsetTop - container.offsetTop;
      container.scrollTo({ top: sectionTop, behavior: 'smooth' });
    }
  };

  const filteredProjects = projects.filter(
    (project) => project.category.name === activeId1
  );

  const getCategoryDescription = (id) => {
    const category = categories.find((cat) => cat.name === id);
    return category?.description || 'No description available.';
  };

  if (error) return <div className='error-message'>{error}</div>;

  return (
    <section
      className='what-we-do'
      style={{ backgroundImage: `url('/images/white_bg.jpg')` }}
    >
      <div className='container-fluid'>
        <div className='row row_justify'>
          <div className='col-lg-12 col-md-12'>
            <div className='main-heading'>
              <h2 className='heading'>What We Do</h2>
              <p className='para'>
                Crafted for Performance. Designed to Inspire Our Range of
                Precision-Engineered Solutions
              </p>
            </div>
          </div>
        </div>
        <div className='row row_justify row_justify_haeding'>
          <div className='col-lg-12 col-md-12'>
            <div className='main-heading'>
              {/* <h2 className='heading'>All Products</h2> */}
            </div>
          </div>
        </div>
        <div className='row-what-we-do'>
          <div className='row-what-we-do-inner-1'>
            <ul>
              {categories.map((cat) => (
                <li key={cat.id}>
                  <a
                    className={activeId1 === cat.name ? 'active' : ''}
                    href={`#${cat.name}`}
                    onClick={(e) => {
                      if (window.innerWidth <= 768) e.preventDefault();
                      handleSectionClick(cat.name);
                    }}
                  >
                    {cat.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className='row-what-we-do-inner-2' ref={containerRef}>
            {/* Repeatable Sections */}
            {categories.map((cat, i) => {
              const currentProjects = projects.filter(
                (project) => project.category.name === cat.name
              );

              return (
                <div
                  key={cat.name}
                  id={cat.name}
                  className={`row-what-we-do-inner-3 ${
                    activeId1 === cat.name ? 'active' : ''
                  }`}
                >
                  <div className='main-heading'>
                    <h2 className='heading'>{cat.title}</h2>
                  </div>
                  <div className='small-para'>
                    <p className='small-inpara'>{cat.description}</p>
                  </div>

                  <div className='row row-inn-img'>
                    {currentProjects.slice(0, 4).map((project, index) => (
                      <div
                        key={project.id}
                        className='col-lg-3 col-md-6 col-sm-12'
                      >
                        <Link
                          href={`/product/${project.slug}`}
                          style={{ textDecoration: 'none' }}
                        >
                          <div className='inner-wedo'>
                            <div className='inner-wedo-img'>
                              <img
                                src={
                                  project.hero_img ||
                                  placeholderImages[index % 4]
                                }
                                alt={project.name}
                              />
                            </div>
                            <div className='inner-wedo-para'>
                              <p>{project.name}</p>
                            </div>
                          </div>
                        </Link>
                      </div>
                    ))}
                  </div>

                  <div className='row-inn-img-img row-inn-img-img-mb'>
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
                        640: { slidesPerView: 1.2 },
                        991: { slidesPerView: 2 },
                        1366: { slidesPerView: 2 },
                        1600: { slidesPerView: 2 },
                      }}
                    >
                      {currentProjects.map((project, index) => (
                        <SwiperSlide key={project.id}>
                          <Link
                            href={`/product/${project.slug}`}
                            style={{ textDecoration: 'none' }}
                          >
                            <div className='inner-wedo'>
                              <div className='inner-wedo-img'>
                                <img
                                  src={
                                    project.hero_img ||
                                    placeholderImages[index % 4]
                                  }
                                  alt={project.name}
                                />
                              </div>
                              <div className='inner-wedo-para'>
                                <p>{project.name}</p>
                              </div>
                            </div>
                          </Link>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>

                  <div className='row'>
                    <div className='header-inner-3'>
                      <Link
                        className='header-btn'
                        href={`/product?slug=${cat.slug}`}
                      >
                        Explore {cat.title}{' '}
                        <img src='/images/arrow.png' alt='' />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ScrollTab;
