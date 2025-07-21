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
const banners = [
  'url(/images/oneaboutpagebannerschon.jpg)',  
  'url(/images/oneaboutpagebannerschon.jpg)', 
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
      <div className="banner active"       style={{ backgroundImage: `url('/images/oneaboutpagebannerschon.jpg')` }}>
        <div className='banner-content'>
          <div className='banner-content-left'>
            <h1 className='banner-heading'>Schon Care</h1>
            <p className='banner-para'>We’re With You—Every Step of the Way.</p>
              <div className="header-inner-3">
                <a className="header-btn" href="/contact"> Get Free Consultation <img src='/images/arrow.png' alt="" /> </a>
              </div>
          </div>
        </div>
      </div>
      <div className="banner" style={{ backgroundImage: `url('/images/oneaboutpagebannerschon.jpg')` }}>
        <div className='banner-content'>
          <div className='banner-content-left'>
            <h1 className='banner-heading'>Schon Care</h1>
            <p className='banner-para'>We’re With You—Every Step of the Way.</p>
              <div className="header-inner-3">
                <a className="header-btn" href="/contact"> Get Free Consultation <img src='/images/arrow.png' alt="" /> </a>
              </div>
          </div>
        </div>
      </div>
      </div>

      <section
        className='what-we-do housing_solution'
        style={{ backgroundImage: `url('/images/white_bg.jpg')` }}
      >
        <div className='container-fluid'>
          <div className='row row_justify'>
            <div className='col-lg-7 col-md-12'>
              <div className='onestop'>
                 <img src='/images/schoncareimg.png' alt="" />
              </div>
            </div>
            <div className='col-lg-5 col-md-12'>
              <div className='main-heading'>
                <h2 className='heading'>At Schon Doorways,</h2>
              </div>
              <div className="small-para">
                <p className="small-inpara">we understand that building a dream home or executing a landmark project is filled with decisions, questions, and milestones. That’s why we’ve created Schon Care—our dedicated customer support initiative focused on making your journey smooth, transparent, and stress-free.</p>
                <p className="small-inpara">Whether it’s a design doubt, installation query, product clarification, or post-sale service request, our team of trained professionals is here to help—with empathy, expertise, and urgency.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className='cuttingedge-page cuttingedge-page-we-offer cuttingedge-page-we-offer1'
        style={{ backgroundImage: `url('/images/OurJourneybg.jpg')` }}
      >
        <div className='container-fluid'>
          <div className='row row_justify'>
            <div className='col-lg-12 col-md-12'>
              <div className='main-heading'>
                <h2 className='heading text-center'>Need Assistance? We’re Listening.</h2>
              </div>
            </div>
          </div>
          <div className='row row_cuttingedge-page-we-offer row_cuttingedge-page-we-offersgd row_cuttingedge-page-we-offersgddd'>
            <div className='col-xl-12 col-lg-12 col-md-12'>
              <div className='why_chose_schon_block_sust'>
                <div className='why_chose_schon_block why_chose_schon_block_sus'>
                  <div className='why_chose_schon_icon_1'>
                    <img src='/images/schoncareimg1.png' alt="" />
                  </div>
                  <div className='why_chose_schon_icon_1'>
                    <div className='why_chose_schon_head'>
                      <h3 className='text-white'>Email:</h3>
                    </div>
                    <div className='why_chose_schon_para'>
                      <p className='text-white'><a href='#'>SchonCare@theschon.com</a></p>
                    </div>
                  </div>
                </div>
                <div className='why_chose_schon_block why_chose_schon_block_sus'>
                  <div className='why_chose_schon_icon_1'>
                    <img src='/images/schoncareimg2.png' alt="" />
                  </div>
                  <div className='why_chose_schon_icon_1'>
                    <div className='why_chose_schon_head'>
                      <h3 className='text-white'>Support Hours:</h3>
                    </div>
                    <div className='why_chose_schon_para'>
                      <p className='text-white'>Monday to Saturday, 10 AM to 6 PM</p>
                    </div>
                  </div>
                </div>
                <div className='why_chose_schon_block why_chose_schon_block_sus'>
                  <div className='why_chose_schon_icon_1'>
                    <img src='/images/schoncareimg3.png' alt="" />
                  </div>
                  <div className='why_chose_schon_icon_1'>
                    <div className='why_chose_schon_head'>
                      <h3 className='text-white'>Available Across:</h3>
                    </div>
                    <div className='why_chose_schon_para'>
                      <p className='text-white'>Bangalore | Hyderabad | Chennai</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='row row_cuttingaaaz'>
            <div className='why_chose_schon_block'>
                <div className='why_chose_schon_head'>
                  <h3>Your Vision. Our Responsibility.</h3>
                </div>
                <div className='why_chose_schon_para'>
                  <p>
                   Whether you’re selecting your first aluminium window or managing a large-scale site, Schon Care is here to answer every question—big or small—so you can move forward with clarity and confidence.
                  </p>
                </div>
              </div>
          </div>
        </div>
      </section>

      <section className='why_chose_schon'>
        <div className='container-fluid'>
        <div className='main-heading'>
          <h2 className='heading text-center'>What Schon Care Offers:</h2>
        </div>
          <div className='row why_chose_schon_row why_chose_schon_row_ad hy_chose_schon_row_ad-new'>
            <div className='col-lg-4 col-md-6 col-sm-12'>
              <div className='why_chose_schon_block'>
                <div className='why_chose_schon_icon'>
                  <img src='/images/schoncareimg4.png' alt='' />
                </div>
                <div className='why_chose_schon_head'>
                  <h3>Personalised Support</h3>
                </div>
                <div className='why_chose_schon_para'>
                  <p>
                   One-on-one guidance from design to installation
                  </p>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-12'>
              <div className='why_chose_schon_block'>
                <div className='why_chose_schon_icon'>
                  <img src='/images/schoncareimg5.png' alt='' />
                </div>
                <div className='why_chose_schon_head'>
                  <h3>Technical Assistance </h3>
                </div>
                <div className='why_chose_schon_para'>
                  <p>
                    Clarifying specs, compatibility, or site-related queries
                  </p>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-12'>
              <div className='why_chose_schon_block'>
                <div className='why_chose_schon_icon'>
                  <img src='/images/schoncareimg6.png' alt='' />
                </div>
                <div className='why_chose_schon_head'>
                  <h3>Order Updates</h3>
                </div>
                <div className='why_chose_schon_para'>
                  <p>
                    Stay informed on production and delivery timelines
                  </p>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-12'>
              <div className='why_chose_schon_block'>
                <div className='why_chose_schon_icon'>
                  <img src='/images/schoncareimg7.png' alt='' />
                </div>
                <div className='why_chose_schon_head'>
                  <h3>After-Sales Service</h3>
                </div>
                <div className='why_chose_schon_para'>
                  <p>
                    Warranty info, maintenance tips, and issue resolution
                  </p>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-12'>
              <div className='why_chose_schon_block'>
                <div className='why_chose_schon_icon'>
                  <img src='/images/schoncareimg8.png' alt='' />
                </div>
                <div className='why_chose_schon_head'>
                  <h3>Architect & Builder Coordination</h3>
                </div>
                <div className='why_chose_schon_para'>
                  <p>
                    Smooth communication to avoid delays or confusion
                  </p>
                </div>
              </div>
            </div>
            
            
          </div>
          <div className="small-para smalllahh">
            <p className="small-inpara">We believe customer care isn’t just a department—it’s a promise we stand by. With Schon Care, you’re never left wondering who to ask or what comes next. We’re just a message away.</p>
          </div>
        </div>
      </section>

      <ContactForm />

      <TestiMonials />

      <FooterBar />
    </>
  );
}

export default OneStopHousingSolutions;
