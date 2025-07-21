'use client';
import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import '../common/css/style.css';
import SideNav from '../common/SideNav';
import ColorSwatches from './ColorSwatches';
import ContactFormfaq from '../about/ContactFormfaq';
import FooterBar from '../common/FooterBar';
import ProductList from './ProductList';
import CuttingEdge from './CuttingEdge';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Mousewheel } from 'swiper/modules';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'swiper/css';
import 'swiper/css/navigation';
import ProjectList2 from '../common/ProjectList2';
import TestiMonials from '../common/TestiMonials';
import ClientLogo from '../common/ClientLogo';
import HomeBanner from './HomeBanner';

const banners = [
  'url(/images/aboutpagebanner.jpg)',
  'url(/images/aboutpagebanner.jpg)',
];

const cols = 12;
const rows = 10;
const duration = 7000;

const Index = () => {
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

  useEffect(() => {
    const interval = setInterval(() => {
      animateTransition();
    }, duration);

    return () => clearInterval(interval);
  }, [currentIndex]);
  return (
    <>
      <SideNav />

      <ProductList />

      <CuttingEdge />

      <ColorSwatches />

      <section className='our_solutions'>
        <div className='container-fluid'>
          <div className='row row_justify'>
            <div className='col-lg-12 col-md-12'>
              <div className='main-heading'>
                <h2 className='heading'>Our Solutions</h2>
                <div className='small-para'>
                  <p className='small-inpara'>
                    At Schon Doorways, we cater to the unique needs of every
                    customer segment—be it architects crafting bold visions,
                    interior designers curating refined spaces, builders
                    delivering on scale, or homeowners creating their dream
                    abode. With tailored solutions, design flexibility, and
                    expert support, we ensure every client finds the perfect
                    aluminium system to match their purpose, project, and style.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='row our_solutions_row'>
            <div className='col-lg-4 col-md-6 col-sm-12'>
              <div className='our_solutions_block'>
                <div className='why_chose_schon_icon'>
                  <img src='/images/solutionimg1.png' alt='' />
                </div>
                <div className='why_chose_schon_head'>
                  <h3>Architects & Designers</h3>
                </div>
                <div className='why_chose_schon_para'>
                  <p>
                    We collaborate closely with architects and designers to turn
                    creative vision into structural reality. From sleek profiles
                    to bespoke finishes, our aluminium systems offer the
                    flexibility and technical performance needed to execute even
                    the most ambitious design ideas—without compromise.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-12'>
              <div className='our_solutions_block'>
                <div className='why_chose_schon_icon'>
                  <img src='/images/solutionimg2.png' alt='' />
                </div>
                <div className='why_chose_schon_head'>
                  <h3>Builders & Developers</h3>
                </div>
                <div className='why_chose_schon_para'>
                  <p>
                    Schon Doorways delivers scalable, high-quality aluminium
                    door and window solutions that meet project timelines and
                    performance benchmarks. Our expert team ensures smooth
                    coordination from specification to installation—making us a
                    trusted partner for efficient and reliable execution.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-12'>
              <div className='our_solutions_block'>
                <div className='why_chose_schon_icon'>
                  <img src='/images/solutionimg3.png' alt='' />
                </div>
                <div className='why_chose_schon_head'>
                  <h3>Homeowners</h3>
                </div>
                <div className='why_chose_schon_para'>
                  <p>
                    For homeowners seeking elegance, durability, and peace of
                    mind, our doors and windows bring in light, style, and
                    security. Whether you're building new or upgrading your
                    home, we offer customised solutions that blend seamlessly
                    with your lifestyle and aesthetics.
                  </p>
                </div>
              </div>
            </div>
          </div>

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
              <SwiperSlide>
                <div className='our_solutions_block'>
                  <div className='why_chose_schon_icon'>
                    <img src='/images/solutionimg1.png' alt='' />
                  </div>
                  <div className='why_chose_schon_head'>
                    <h3>Architects & Designers</h3>
                  </div>
                  <div className='why_chose_schon_para'>
                    <p>
                      We collaborate closely with architects and designers to
                      turn creative vision into structural reality. From sleek
                      profiles to bespoke finishes, our aluminium systems offer
                      the flexibility and technical performance needed to
                      execute even the most ambitious design ideas—without
                      compromise.
                    </p>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className='our_solutions_block'>
                  <div className='why_chose_schon_icon'>
                    <img src='/images/solutionimg2.png' alt='' />
                  </div>
                  <div className='why_chose_schon_head'>
                    <h3>Builders & Developers</h3>
                  </div>
                  <div className='why_chose_schon_para'>
                    <p>
                      Schon Doorways delivers scalable, high-quality aluminium
                      door and window solutions that meet project timelines and
                      performance benchmarks. Our expert team ensures smooth
                      coordination from specification to installation—making us
                      a trusted partner for efficient and reliable execution.
                    </p>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className='our_solutions_block'>
                  <div className='why_chose_schon_icon'>
                    <img src='/images/solutionimg3.png' alt='' />
                  </div>
                  <div className='why_chose_schon_head'>
                    <h3>Homeowners</h3>
                  </div>
                  <div className='why_chose_schon_para'>
                    <p>
                      For homeowners seeking elegance, durability, and peace of
                      mind, our doors and windows bring in light, style, and
                      security. Whether you're building new or upgrading your
                      home, we offer customised solutions that blend seamlessly
                      with your lifestyle and aesthetics.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>

      <ProjectList2 />
      <TestiMonials />

      <ContactFormfaq />

      <ClientLogo />

      <FooterBar />
    </>
  );
};

export default Index;
