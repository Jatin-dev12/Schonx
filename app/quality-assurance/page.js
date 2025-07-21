'use client'
import React, { useEffect, useRef, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import '../common/css/style.css';
import SideNav from '../common/SideNav';
import ContactFormfaq from '../about/ContactFormfaq';
import FooterBar from '../common/FooterBar';
import ExperienceCentres from '../common/ExperienceCentres';
import HowItWorks from './HowitWork';
import ClientLogo from '../common/ClientLogo';
import TestiMonials from '../common/TestiMonials';
import ContactForm from '../common/ContactForm';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import ProjectList from '../common/ProjectList';
const banners = [
  'url(/images/qualityaboutpagebanner.jpg)',  
  'url(/images/qualityaboutpagebanner.jpg)', 
];

const cols = 12;
const rows = 10;
const duration = 7000;

  const OneStopHousingSolutions = () => {
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
        cubes.forEach(cube => cube.remove());
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
      <div className="banner-container" ref={containerRef}>
      {/* Static banners */}
      <div className="banner active"       style={{ backgroundImage: `url('/images/qualityaboutpagebanner.jpg')` }}>
        <div className='banner-content'>
          <div className='banner-content-left'>
            <h1 className='banner-heading'>Quality Assurance</h1>
            <p className='banner-para'>Precision You Can See. Durability You Can Trust. Performance That Lasts.</p>
              <div className="header-inner-3">
                <a className="header-btn" href="/contact"> Get Free Consultation <img src='/images/arrow.png' alt="" /> </a>
              </div>
          </div>
        </div>
      </div>
      <div className="banner" style={{ backgroundImage: `url('/images/qualityaboutpagebanner.jpg')` }}>
        <div className='banner-content'>
          <div className='banner-content-left'>
            <h1 className='banner-heading'>Quality Assurance</h1>
            <p className='banner-para'>Precision You Can See. Durability You Can Trust. Performance That Lasts.</p>
              <div className="header-inner-3">
                <a className="header-btn" href="/contact"> Get Free Consultation <img src='/images/arrow.png' alt="" /> </a>
              </div>
          </div>
        </div>
      </div>
    </div>


      <section className='why_chose_schon why_chose_schononestep why_chose_schononestep_quality' style={{ backgroundImage: `url('/images/white_bg.jpg')` }}>
        <div className='container-fluid'>
          <div className='main-heading'>
            <h2 className='heading text-center'>Distinctive Features</h2>
            <p className='para text-center'>The Schon Window Advantage</p>
          </div>
          <div className='row why_chose_schon_row'>
            <div className='col-lg-4 col-md-6 col-sm-12'>
              <div className='why_chose_schon_block'>
                <div className='why_chose_schon_icon'>
                  <img src='/images/productlisticon1.png' alt='' />
                </div>
                <div className='why_chose_schon_head'>
                  <h3>Smooth Operation</h3>
                </div>
                <div className='why_chose_schon_para'>
                  <p>
                    Our windows offer unparalleled ease of use with a glide that feels effortless, featuring innovative sliding mechanisms.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-12'>
              <div className='why_chose_schon_block'>
                <div className='why_chose_schon_icon'>
                  <img src='/images/productlisticon2.png' alt='' />
                </div>
                <div className='why_chose_schon_head'>
                  <h3>Robust Build</h3>
                </div>
                <div className='why_chose_schon_para'>
                  <p>
                    Each aluminium glass window boasts a substantial 1.6 mm thickness, ensuring a solid, sturdy construction.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-12'>
              <div className='why_chose_schon_block'>
                <div className='why_chose_schon_icon'>
                  <img src='/images/productlisticon3.png' alt='' />
                </div>
                <div className='why_chose_schon_head'>
                  <h3>Versatile Designs</h3>
                </div>
                <div className='why_chose_schon_para'>
                  <p>
                   Tailor your experience with our single or double track options, providing flexibility to fit any design aesthetic.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-12'>
              <div className='why_chose_schon_block'>
                <div className='why_chose_schon_icon'>
                  <img src='/images/productlisticon4.png' alt='' />
                </div>
                <div className='why_chose_schon_head'>
                  <h3>Durability</h3>
                </div>
                <div className='why_chose_schon_para'>
                  <p>
                    Engineered for endurance, our windows are designed with superior load-bearing capacity to withstand the test of time.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-12'>
              <div className='why_chose_schon_block'>
                <div className='why_chose_schon_icon'>
                  <img src='/images/productlisticon5.png' alt='' />
                </div>
                <div className='why_chose_schon_head'>
                  <h3>Custom Aesthetics</h3>
                </div>
                <div className='why_chose_schon_para'>
                  <p>
                    Choose from a diverse palette of colours with our powder-coated aluminium windows, crafted to complement your home's unique style.
                  </p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      <section className='our_solutions our_solutions_certifications why_chose_schon_para11'>
        <div className='container-fluid'>
          <div className="row row_justify">
            <div className="col-lg-12 col-md-12">
              <div className="main-heading">
                <h2 className="heading text-center">Certifications & Processes</h2>
                <p className="para text-center">We adhere to the highest industry standards to ensure that every product and service meets global benchmarks.</p>
              </div>
            </div>
          </div>
          <div className='row our_solutions_row'>

            
            <div className='col-lg-3 col-md-6 col-sm-12'>
                <div className="our_solutions_block">
                  <div className='why_chose_schon_icon'>
                  <img src='/images/qualityassuranceicon1.png' alt="" />
                </div>
                <div className='why_chose_schon_para'>
                  <p>German Manufacturing Process</p>
                </div>
              </div>
            </div>
            <div className='col-lg-3 col-md-6 col-sm-12'>
                <div className="our_solutions_block">
                  <div className='why_chose_schon_icon'>
                  <img src='/images/qualityassuranceicon2.png' alt="" />
                </div>
                <div className='why_chose_schon_para'>
                  <p>Green Manufacturing</p>
                </div>
              </div>
            </div>
            <div className='col-lg-3 col-md-6 col-sm-12'>
                <div className="our_solutions_block">
                  <div className='why_chose_schon_icon'>
                  <img src='/images/qualityassuranceicon3.png' alt="" />
                </div>
                <div className='why_chose_schon_para'>
                  <p>Compliance with national and international building codes</p>
                </div>
              </div>
            </div>
            <div className='col-lg-3 col-md-6 col-sm-12'>
                <div className="our_solutions_block">
                  <div className='why_chose_schon_icon'>
                  <img src='/images/qualityassuranceicon4.png' alt="" />
                </div>
                <div className='why_chose_schon_para'>
                  <p>Routine third-party audits and inspections</p>
                </div>
              </div>
            </div>
            
            
          </div>

          <div className='row row_product_space row_product_space-mobile'>
            <Swiper
              modules={[Navigation, Mousewheel]}
              direction="horizontal"
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
                <div className="our_solutions_block">
                  <div className='why_chose_schon_icon'>
                  <img src='/images/qualityassuranceicon1.png' alt="" />
                </div>
                
                <div className='why_chose_schon_para'>
                  <p>German Manufacturing Process</p>
                </div>
              </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="our_solutions_block">
                  <div className='why_chose_schon_icon'>
                  <img src='/images/qualityassuranceicon2.png' alt="" />
                </div>
                <div className='why_chose_schon_para'>
                  <p>German Manufacturing</p>
                </div>
              </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="our_solutions_block">
                  <div className='why_chose_schon_icon'>
                  <img src='/images/qualityassuranceicon3.png' alt="" />
                </div>
                <div className='why_chose_schon_para'>
                  <p>Compliance with national and international building codes</p>
                </div>
              </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="our_solutions_block">
                  <div className='why_chose_schon_icon'>
                  <img src='/images/qualityassuranceicon4.png' alt="" />
                </div>
                <div className='why_chose_schon_para'>
                  <p>Routine third-party audits and inspections</p>
                </div>
              </div>
              </SwiperSlide>
            
            </Swiper>
          </div>
        </div>
      </section>

      <ProjectList />

      

      <ContactForm />

      <TestiMonials />

      <FooterBar />
    </>
  );
}

export default OneStopHousingSolutions;
