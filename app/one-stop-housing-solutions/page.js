'use client';
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
  'url(/images/oneaboutpagebanner.jpg)',
  'url(/images/oneaboutpagebanner.jpg)',
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
          style={{ backgroundImage: `url('/images/oneaboutpagebanner.jpg')` }}
        >
          <div className='banner-content'>
            <div className='banner-content-left'>
              <h1 className='banner-heading'>
                One-Stop Housing Solutions by Schon Doorways
              </h1>
              <p className='banner-para'>
                Comprehensive Aluminium Systems – From Concept to Completion
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
          style={{ backgroundImage: `url('/images/oneaboutpagebanner.jpg')` }}
        >
          <div className='banner-content'>
            <div className='banner-content-left'>
              <h1 className='banner-heading'>
                One-Stop Housing Solutions by Schon Doorways
              </h1>
              <p className='banner-para'>
                Comprehensive Aluminium Systems – From Concept to Completion
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
        className='what-we-do housing_solution'
        style={{ backgroundImage: `url('/images/white_bg.jpg')` }}
      >
        <div className='container-fluid'>
          <div className='row row_justify'>
            <div className='col-lg-6 col-md-12'>
              <div className='onestop'>
                <iframe src='https://www.youtube.com/embed/xVcAiBF5Cwo?playlist=xVcAiBF5Cwo&loop=1&autoplay=1&mute=1&loop=1'></iframe>
              </div>
            </div>
            <div className='col-lg-6 col-md-12'>
              <div className='main-heading'>
                <h2 className='heading'>One-Stop Housing Solutions by</h2>
                <h3 className='heading'>Schon Doorways</h3>
                <p className='para'>
                  Comprehensive Aluminium Systems – From Concept to Completion
                </p>
              </div>
              <div className='small-para'>
                <p className='small-inpara'>
                  When it comes to building exceptional homes and spaces, every
                  detail matters — from the structural performance of your doors
                  and windows to the elegance of a bathroom enclosure or the
                  visual appeal of a partition wall. At Schon Doorways, we
                  understand that great design doesn’t stop with product
                  selection — it starts with a unified, end-to-end approach.
                </p>
                <p className='small-inpara'>
                  That’s why we offer a complete suite of housing solutions
                  under one roof, bringing together premium aluminium doors,
                  windows, railings, partitions, shower cubicles, and wall décor
                  – all custom-crafted, German-engineered, and seamlessly
                  delivered from concept to execution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='why_chose_schon why_chose_schononestep'>
        <div className='container-fluid'>
          <div className='main-heading'>
            <h2 className='heading text-center'>Our Range of Solutions</h2>
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

      <section
        className='OurJourneymain OurJourneymainnew'
        style={{ backgroundImage: `url('/images/OurJourneybg.jpg')` }}
      >
        <div className='container-fluid'>
          <div className='row row_justify'>
            <div className='col-lg-12 col-md-12'>
              <div className='main-heading'>
                <h2 className='heading text-center'>
                  What Makes Us a One-Stop Solution?
                </h2>
                <p className='para text-center'>
                  Unlike traditional vendors, Schon doesn’t just sell products —
                  we partner with you to deliver a full solution tailored to
                  your project’s unique style, function, and goals. Whether
                  you're an architect crafting a statement home or a builder
                  delivering a premium project, we ensure every element is
                  planned, manufactured, and installed with precision.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <HowItWorks />

      <section
        className='cuttingedge-page cuttingedge-page-we-offer'
        style={{ backgroundImage: `url('/images/OurJourneybg.jpg')` }}
      >
        <div className='container-fluid'>
          <div className='row row_justify'>
            <div className='col-lg-12 col-md-12'>
              <div className='main-heading'>
                <h2 className='heading text-center'>
                  Why Choose Schon as Your End-to-End Aluminium Partner?
                </h2>
              </div>
            </div>
          </div>
          <div className='row row_cuttingedge-page-we-offer row_cuttingedge-page-we-offersgd'>
            <div className='col-xl-4 col-lg-4 col-md-12'>
              <div className='our_solutions_block'>
                <div className='why_chose_schon_icon'>
                  <img src='/images/productlisticon10.png' alt='' />
                </div>
                <div className='why_chose_schon_head'>
                  <h3>Everything in One Place</h3>
                </div>
                <div className='why_chose_schon_para'>
                  <p>No more managing multiple vendors or chasing timelines</p>
                </div>
              </div>
            </div>

            <div className='col-xl-4 col-lg-4 col-md-12'>
              <div className='our_solutions_block'>
                <div className='why_chose_schon_icon'>
                  <img src='/images/productlisticon11.png' alt='' />
                </div>
                <div className='why_chose_schon_head'>
                  <h3>German Precision, Indian Scal</h3>
                </div>
                <div className='why_chose_schon_para'>
                  <p>Advanced technology meets local execution</p>
                </div>
              </div>
            </div>

            <div className='col-xl-4 col-lg-4 col-md-12'>
              <div className='our_solutions_block'>
                <div className='why_chose_schon_icon'>
                  <img src='/images/productlisticon12.png' alt='' />
                </div>
                <div className='why_chose_schon_head'>
                  <h3>Customization Without Limits</h3>
                </div>
                <div className='why_chose_schon_para'>
                  <p>Designs tailored to your space, needs & finishes</p>
                </div>
              </div>
            </div>

            <div className='col-xl-4 col-lg-4 col-md-12'>
              <div className='our_solutions_block'>
                <div className='why_chose_schon_icon'>
                  <img src='/images/productlisticon13.png' alt='' />
                </div>
                <div className='why_chose_schon_head'>
                  <h3>Unmatched Quality</h3>
                </div>
                <div className='why_chose_schon_para'>
                  <p>
                    Weatherproof, rust-proof, thermally efficient,
                    low-maintenance
                  </p>
                </div>
              </div>
            </div>

            <div className='col-xl-4 col-lg-4 col-md-12'>
              <div className='our_solutions_block'>
                <div className='why_chose_schon_icon'>
                  <img src='/images/productlisticon14.png' alt='' />
                </div>
                <div className='why_chose_schon_head'>
                  <h3>Trusted by Experts</h3>
                </div>
                <div className='why_chose_schon_para'>
                  <p>
                    5000+ architects & 250,000+ homeowners across 200+ cities
                  </p>
                </div>
              </div>
            </div>
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

export default OneStopHousingSolutions;
