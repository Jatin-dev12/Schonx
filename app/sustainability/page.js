'use client';
import React, { useEffect, useRef, useState } from 'react';
import '../common/css/style.css';
import SideNav from '../common/SideNav';
import ContactFormfaq from '../about/ContactFormfaq';
import FooterBar from '../common/FooterBar';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Mousewheel } from 'swiper/modules';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'swiper/css';
import 'swiper/css/navigation';
import ClientLogo from '../common/ClientLogo';
import TestiMonials from '../common/TestiMonials';
import ContactForm from '../common/ContactForm';

const banners = [
  'url(/images/Sustainabilitybanner.jpg)',
  'url(/images/Sustainabilitybanner.jpg)',
];

const cols = 12;
const rows = 10;
const duration = 7000;

const Sustainability = () => {
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
      <div className='banner-container' ref={containerRef}>
        {/* Static banners */}
        <div
          className='banner active'
          style={{ backgroundImage: `url('/images/Sustainabilitybanner.jpg')` }}
        >
          <div className='banner-content'>
            <div className='banner-content-left'>
              <h1 className='banner-heading'>Sustainability</h1>
              <p className='banner-para'>
                Building a Greener Tomorrow with Smarter, Responsible Choices.
              </p>
              <div className='header-inner-3'>
                <a className='header-btn' href='/contact'>
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
          style={{ backgroundImage: `url('/images/Sustainabilitybanner.jpg')` }}
        >
          <div className='banner-content'>
            <div className='banner-content-left'>
              <h1 className='banner-heading'>Sustainability</h1>
              <p className='banner-para'>
                Building a Greener Tomorrow with Smarter, Responsible Choices.
              </p>
              <div className='header-inner-3'>
                <a className='header-btn' href='/contact'>
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
        className='what-we-do about-schon-we-do about-schon-we-dopage'
        style={{ backgroundImage: `url('/images/white_bg.jpg')` }}
      >
        <div className='container-fluid'>
          <div className='row row_justify'>
            <div className='col-lg-12 col-md-12'>
              <div className='main-heading'>
                <p className='para'>
                  At Schon, sustainability is more than a commitment—it’s the
                  foundation of our innovation. As leaders in premium aluminum
                  systems, we design products that not only transform spaces but
                  also contribute to a sustainable future. From material
                  selection to manufacturing practices, our focus is on reducing
                  environmental impact while maintaining exceptional quality and
                  performance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='what-we-do housing_solution'>
        <div className='container-fluid'>
          <div className='row row_justify'>
            <div className='col-lg-7 col-md-12'>
              <div className='onestop'>
                <img src='/images/Sustainabilityimg1.jpg' alt='' />
              </div>
            </div>
            <div className='col-lg-5 col-md-12'>
              <div className='main-heading'>
                <h2 className='heading'>
                  Sustainable Materials for a Sustainable Future
                </h2>
              </div>
              <div className='small-para'>
                <p className='small-inpara'>
                  Aluminum is a metal that truly builds the future. It is
                  lightweight, durable, and infinitely recyclable. At Schon, we
                  exclusively use high-grade aluminum alloys that are sourced
                  and processed responsibly. This ensures:
                </p>
              </div>

              <div className='why_chose_schon_block_sust'>
                <div className='why_chose_schon_block why_chose_schon_block_sus'>
                  <div className='why_chose_schon_icon_1'>
                    <img src='/images/Sustainabilityicon1.png' alt='' />
                  </div>
                  <div className='why_chose_schon_icon_1'>
                    <div className='why_chose_schon_head'>
                      <h3>Minimal Waste</h3>
                    </div>
                    <div className='why_chose_schon_para'>
                      <p>
                        Our manufacturing processes optimize material usage to
                        reduce waste.
                      </p>
                    </div>
                  </div>
                </div>
                <div className='why_chose_schon_block why_chose_schon_block_sus'>
                  <div className='why_chose_schon_icon_1'>
                    <img src='/images/Sustainabilityicon2.png' alt='' />
                  </div>
                  <div className='why_chose_schon_icon_1'>
                    <div className='why_chose_schon_head'>
                      <h3>Recyclability</h3>
                    </div>
                    <div className='why_chose_schon_para'>
                      <p>
                        Aluminum is 100% recyclable, allowing us to repurpose
                        offcuts and contribute to the circular economy.
                      </p>
                    </div>
                  </div>
                </div>
                <div className='why_chose_schon_block why_chose_schon_block_sus'>
                  <div className='why_chose_schon_icon_1'>
                    <img src='/images/Sustainabilityicon3.png' alt='' />
                  </div>
                  <div className='why_chose_schon_icon_1'>
                    <div className='why_chose_schon_head'>
                      <h3>Longevity</h3>
                    </div>
                    <div className='why_chose_schon_para'>
                      <p>
                        Durable materials mean our products stand the test of
                        time, reducing the need for frequent replacements.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className='what-we-do housing_solution Energy_Efficient'
        style={{ backgroundImage: `url('/images/OurJourneybg.jpg')` }}
      >
        <div className='container-fluid'>
          <div className='row row_justify'>
            <div className='col-lg-5 col-md-12'>
              <div className='main-heading'>
                <h2 className='heading text-white'>
                  Energy-Efficient Solutions
                </h2>
              </div>
              <div className='small-para'>
                <p className='small-inpara text-white'>
                  Our aluminum systems are engineered to enhance energy
                  efficiency in buildings, reducing their carbon footprint. Key
                  features include:
                </p>
              </div>

              <div className='why_chose_schon_block_sust'>
                <div className='why_chose_schon_block why_chose_schon_block_sus'>
                  <div className='why_chose_schon_icon_1'>
                    <img src='/images/Sustainabilityicon4.png' alt='' />
                  </div>
                  <div className='why_chose_schon_icon_1'>
                    <div className='why_chose_schon_head'>
                      <h3 className='text-white'>Thermal Break Technology</h3>
                    </div>
                    <div className='why_chose_schon_para'>
                      <p className='text-white'>
                        Advanced thermal breaks minimize heat transfer,
                        improving insulation and reducing energy consumption.
                      </p>
                    </div>
                  </div>
                </div>
                <div className='why_chose_schon_block why_chose_schon_block_sus'>
                  <div className='why_chose_schon_icon_1'>
                    <img src='/images/Sustainabilityicon5.png' alt='' />
                  </div>
                  <div className='why_chose_schon_icon_1'>
                    <div className='why_chose_schon_head'>
                      <h3 className='text-white'>
                        Double and Triple Glazing Options
                      </h3>
                    </div>
                    <div className='why_chose_schon_para'>
                      <p className='text-white'>
                        High-performance glass improves thermal efficiency,
                        cutting down heating and cooling needs.
                      </p>
                    </div>
                  </div>
                </div>
                <div className='why_chose_schon_block why_chose_schon_block_sus'>
                  <div className='why_chose_schon_icon_1'>
                    <img src='/images/Sustainabilityicon6.png' alt='' />
                  </div>
                  <div className='why_chose_schon_icon_1'>
                    <div className='why_chose_schon_head'>
                      <h3 className='text-white'>Precision Seals</h3>
                    </div>
                    <div className='why_chose_schon_para'>
                      <p className='text-white'>
                        Airtight designs prevent energy loss, enhancing the
                        overall efficiency of spaces.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-7 col-md-12'>
              <div className='onestop'>
                <img src='/images/EnergyEfficient.png' alt='' />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='what-we-do housing_solution Energy_Efficient'>
        <div className='container-fluid'>
          <div className='row row_justify'>
            <div className='col-lg-7 col-md-12'>
              <div className='onestop'>
                <img src='/images/EcoFriendly.png' alt='' />
              </div>
            </div>
            <div className='col-lg-5 col-md-12'>
              <div className='main-heading'>
                <h2 className='heading'>Eco-Friendly Manufacturing</h2>
              </div>
              <div className='small-para'>
                <p className='small-inpara'>
                  Schon’s manufacturing processes are designed to prioritize
                  sustainability at every step. Our facilities adhere to strict
                  environmental standards, focusing on:
                </p>
              </div>

              <div className='why_chose_schon_block_sust'>
                <div className='why_chose_schon_block why_chose_schon_block_sus'>
                  <div className='why_chose_schon_icon_1'>
                    <img src='/images/Sustainabilityicon7.png' alt='' />
                  </div>
                  <div className='why_chose_schon_icon_1'>
                    <div className='why_chose_schon_head'>
                      <h3>Reduced Emissions</h3>
                    </div>
                    <div className='why_chose_schon_para'>
                      <p>
                        Utilizing energy-efficient machinery and clean energy
                        sources to minimize emissions.
                      </p>
                    </div>
                  </div>
                </div>
                <div className='why_chose_schon_block why_chose_schon_block_sus'>
                  <div className='why_chose_schon_icon_1'>
                    <img src='/images/Sustainabilityicon8.png' alt='' />
                  </div>
                  <div className='why_chose_schon_icon_1'>
                    <div className='why_chose_schon_head'>
                      <h3>Water Conservation</h3>
                    </div>
                    <div className='why_chose_schon_para'>
                      <p>Recycling water used in production processes.</p>
                    </div>
                  </div>
                </div>
                <div className='why_chose_schon_block why_chose_schon_block_sus'>
                  <div className='why_chose_schon_icon_1'>
                    <img src='/images/Sustainabilityicon9.png' alt='' />
                  </div>
                  <div className='why_chose_schon_icon_1'>
                    <div className='why_chose_schon_head'>
                      <h3>Waste Management</h3>
                    </div>
                    <div className='why_chose_schon_para'>
                      <p>
                        Implementing robust recycling programs to repurpose
                        aluminum and other materials.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className='what-we-do housing_solution Energy_Efficient Sustainable-Design'
        style={{ backgroundImage: `url('/images/OurJourneybg.jpg')` }}
      >
        <div className='container-fluid'>
          <div className='row row_justify'>
            <div className='col-lg-12 col-md-12'>
              <div className='main-heading'>
                <h2 className='heading text-white text-center'>
                  Sustainable Design, Endless Possibilities
                </h2>
              </div>
              <p className='para text-white text-center'>
                We believe sustainability goes hand-in-hand with innovation. Our
                minimalist designs maximize natural light, reducing the need for
                artificial lighting and creating healthier, more sustainable
                living spaces. By bringing nature closer to people, we redefine
                modern architecture with a green perspective.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className='what-we-do housing_solution'>
        <div className='container-fluid'>
          <div className='row row_justify'>
            <div className='col-lg-6 col-md-12'>
              <div className='onestop'>
                <img src='/images/eco.jpg' alt='' />
              </div>
            </div>
            <div className='col-lg-6 col-md-12'>
              <div className='main-heading'>
                <div className='main-heading'>
                  <h2 className='heading'>Empowering Green Partnerships</h2>
                </div>
                <div className='small-para'>
                  <p className='small-inpara'>
                    At Schon Doorways, sustainability isn’t just a promise—it’s
                    built into every profile we craft. From eco-friendly raw
                    materials to energy-efficient processes and waste reduction,
                    we’re committed to creating aluminium systems that respect
                    your space and our planet. Join us in shaping a greener
                    tomorrow.
                  </p>
                </div>
              </div>
              <div className='what-we-do-bt'>
                <div className='header-inner-3'>
                  <a className='header-btn' href='/contact'>
                    Ready to build responsibly?{' '}
                    <img src='/images/arrow.png' alt='' />{' '}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='our_solutions'>
        <div className='container-fluid'>
          <div className='row row_justify'>
            <div className='col-lg-12 col-md-12'>
              <div className='main-heading'>
                <h2 className='heading'>Commitment to the Environment</h2>
                <div className='small-para'>
                  <p className='small-inpara'>
                    Every Schon product is a testament to our dedication to
                    environmental stewardship. By choosing Schon, you are
                    investing in:
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='row our_solutions_row'>
            <div className='col-lg-4 col-md-6 col-sm-12'>
              <div className='our_solutions_block'>
                <div className='why_chose_schon_icon'>
                  <img src='/images/Sustainabilityicon10.png' alt='' />
                </div>
                <div className='why_chose_schon_head'>
                  <h3>Sustainable Living</h3>
                </div>
                <div className='why_chose_schon_para'>
                  <p>Products that reduce your environmental footprint.</p>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-12'>
              <div className='our_solutions_block'>
                <div className='why_chose_schon_icon'>
                  <img src='/images/Sustainabilityicon11.png' alt='' />
                </div>
                <div className='why_chose_schon_head'>
                  <h3>Future-Proof Innovation</h3>
                </div>
                <div className='why_chose_schon_para'>
                  <p>Designs that meet global sustainability standards.</p>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-12'>
              <div className='our_solutions_block'>
                <div className='why_chose_schon_icon'>
                  <img src='/images/Sustainabilityicon12.png' alt='' />
                </div>
                <div className='why_chose_schon_head'>
                  <h3>A Greener Tomorrow</h3>
                </div>
                <div className='why_chose_schon_para'>
                  <p>
                    Supporting a brand committed to driving eco-conscious
                    change.
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
                    <img src='/images/Sustainabilityicon10.png' alt='' />
                  </div>
                  <div className='why_chose_schon_head'>
                    <h3>Sustainable Living</h3>
                  </div>
                  <div className='why_chose_schon_para'>
                    <p>Products that reduce your environmental footprint.</p>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className='our_solutions_block'>
                  <div className='why_chose_schon_icon'>
                    <img src='/images/Sustainabilityicon11.png' alt='' />
                  </div>
                  <div className='why_chose_schon_head'>
                    <h3>Future-Proof Innovation</h3>
                  </div>
                  <div className='why_chose_schon_para'>
                    <p>Designs that meet global sustainability standards.</p>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className='our_solutions_block'>
                  <div className='why_chose_schon_icon'>
                    <img src='/images/Sustainabilityicon12.png' alt='' />
                  </div>
                  <div className='why_chose_schon_head'>
                    <h3>A Greener Tomorrow</h3>
                  </div>
                  <div className='why_chose_schon_para'>
                    <p>
                      Supporting a brand committed to driving eco-conscious
                      change.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
      <ClientLogo />

      <ContactForm />
      <TestiMonials />
      <FooterBar />
    </>
  );
};

export default Sustainability;
