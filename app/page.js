// app/page.js (or any component)

'use client';

import React, { useEffect, useState, useRef } from 'react';
import Head from 'next/head';
import Script from 'next/script';
import Link from 'next/link'; // Import Link component from next/link
import 'bootstrap/dist/css/bootstrap.min.css';
import './common/css/style.css';
import SideNav from './common/SideNav';
import ScrollTab from './common/ScrollTab';
import HomeBanner from './home/HomeBanner';
import CounterBar from './common/CounterBar';
import ProjectList from './common/ProjectList';
import ClientLogo from './common/ClientLogo';
import TestiMonials from './common/TestiMonials';
import ContactForm from './common/ContactForm';
import ExperienceCentres from './common/ExperienceCentres';
import FooterBar from './common/FooterBar';
import HowitWork from './common/HowitWork';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const HoverPlayYouTube = () => {
  const playerRef = useRef(null);
  const iframeRef = useRef(null);

  useEffect(() => {
    // Load YouTube IFrame Player API
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


    // Create the YouTube player once API is ready
    window.onYouTubeIframeAPIReady = () => {
      playerRef.current = new window.YT.Player(iframeRef.current, {
        videoId: 'xVcAiBF5Cwo',
        playerVars: {
          autoplay: 0,
          loop: 1,
          playlist: 'xVcAiBF5Cwo',
          mute: 0,
          controls: 0,
          showinfo: 0,
          modestbranding: 1,
        },
        events: {
          onReady: (event) => {
            event.target.pauseVideo(); // Ensure it's paused initially
          },
        },
      });
    };

    return () => {
        if (playerRef.current) {
            playerRef.current.destroy();
        }
    }
  }, []);

  // Handlers for hover
  const handleMouseEnter = () => {
    playerRef.current?.playVideo();
  };

  const handleMouseLeave = () => {
    playerRef.current?.pauseVideo();
  };

  return (
    <div
      className='about-schon-we-do-img'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div id='player-container'>
        <div
          ref={iframeRef}
          id='youtube-player'

        />
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <>
      {/* Use Head component to add meta tags */}
      <Head>
        <title>Schon</title> {/* Page Title */}
        <meta name='description' content='Schon' /> {/* Description */}
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1'
        />{' '}
        {/* Viewport meta tag for mobile responsiveness */}
        <link rel='icon' href='/images/favicon.png' type='image/x-icon'></link>
        {/* Open Graph meta tags for social media sharing */}
        <meta property='og:title' content='Schon' />
        <meta property='og:description' content='Schon' />
        <meta property='og:image' content='' />{' '}
        {/* URL to an image for social media previews */}
        {/* Twitter Card meta tags */}
        <meta name='twitter:card' content='Schon' />
        <meta name='twitter:title' content='Schon' />
        <meta name='twitter:description' content='Schon' />
        <meta name='twitter:image' content='' />{' '}
        <meta
          name='google-site-verification'
          content='bRuubl-OxeUa0tOSDrcDa4A24yDPdAoZBTyjMG1yEXY'
        />
        {/* URL to an image for Twitter previews */}
      </Head>


      <SideNav />
      <HomeBanner />
      <ScrollTab />

      <section className='what-we-do about-schon-we-do about-schon-we-doags'>
        <div className='container-fluid'>
          <div className='row row_justify'>
            <div className='col-lg-8 col-md-12'>
              <div className='main-heading'>
                <h2 className='heading'>Welcome to Schon Doorways</h2>
                <h3 className='para'>Where Precision Meets Sophistication</h3>
                <div className='small-para'>
                  <p className='small-inpara mt-3'>
                    India’s trusted name in premium aluminium doors and windows,
                    blending world-class German engineering with refined Indian
                    craftsmanship.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-12'>
              <div className='what-we-do-bt'>
                <div className='header-inner-3'>
                  <Link className='header-btn' href='/products'>
                    All Products <img src='/images/arrow.png' alt='' />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className='row row_about_schon'>
            <div className='col-lg-12'>
              <HoverPlayYouTube />
            </div>
          </div>
        </div>
      </section>

      <section
        className='what-we-do home-bar-cta'
        style={{ backgroundImage: `url('/images/CTA.jpg')` }}
      >
        <div className='container-fluid'>
          <div className='row row_justify'>
            <div className='col-lg-6 col-md-12'>
              <div className='main-heading'>
                <h2 className='heading'>
                  Start your next project with <span> Schon</span>
                </h2>
                <p className='para'>we’re just a step away</p>
              </div>
            </div>
            <div className='col-lg-4 col-md-12'>
              <div className='what-we-do-bt'>
                <div className='header-inner-3'>
                  <Link className='header-btn' href='/contact'>
                    Get in Touch <img src='/images/arrow.png' alt='' />{' '}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <HowitWork />

      <ProjectList />

      <section className='why_chose_schon'>
        <div className='container-fluid'>
          <div className='row row_justify'>
            <div className='col-lg-12 col-md-12'>
              <div className='main-heading'>
                <h2 className='heading'>Why Choose Schon?</h2>
                <div className='small-para'>
                  <p className='small-inpara'>
                    At Schon Doorways, we don’t just build doors and windows—we
                    craft architectural experiences. With a foundation in
                    German-engineered systems and a passion for precision, our
                    solutions are designed to meet the highest standards of
                    performance, aesthetics, and durability. From ultra-slim
                    profiles to thermally efficient systems, every product
                    reflects our commitment to quality and innovation. Whether
                    you're an architect, builder, or homeowner, choosing Schon
                    means choosing personalised service, expert guidance, and
                    flawless execution—every step of the way.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='row why_chose_schon_row'>
            <div className='col-lg-4 col-md-6 col-sm-12'>
              <div className='why_chose_schon_block'>
                <div className='why_chose_schon_icon'>
                  <img src='/images/chooseicon1.png' alt='' />
                </div>
                <div className='why_chose_schon_head'>
                  <h3>Service with a Smile</h3>
                </div>
                <div className='why_chose_schon_para'>
                  <p>
                    Approachable and always available, our team treats your
                    concerns with utmost respect. We’re here for you, during and
                    after your journey with us.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-12'>
              <div className='why_chose_schon_block'>
                <div className='why_chose_schon_icon'>
                  <img src='/images/chooseicon2.png' alt='' />
                </div>
                <div className='why_chose_schon_head'>
                  <h3>Safety & Style Combined</h3>
                </div>
                <div className='why_chose_schon_para'>
                  <p>
                    Strong materials, flawless locks — our products keep you
                    safe without compromising on style.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-12'>
              <div className='why_chose_schon_block'>
                <div className='why_chose_schon_icon'>
                  <img src='/images/chooseicon3.png' alt='' />
                </div>
                <div className='why_chose_schon_head'>
                  <h3>Effortless Upgrades</h3>
                </div>
                <div className='why_chose_schon_para'>
                  <p>
                    Embrace the future with our stylish, cutting-edge designs.
                    We handle it all, from concept to installation, ensuring a
                    hassle-free experience for you.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-12'>
              <div className='why_chose_schon_block'>
                <div className='why_chose_schon_icon'>
                  <img src='/images/chooseicon4.png' alt='' />
                </div>
                <div className='why_chose_schon_head'>
                  <h3>Dream Designs Made Real</h3>
                </div>
                <div className='why_chose_schon_para'>
                  <p>
                    Your vision is our blueprint. Our designs are tailored to
                    bring your dream home to life with a touch of elegance and
                    comfort.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-12'>
              <div className='why_chose_schon_block'>
                <div className='why_chose_schon_icon'>
                  <img src='/images/chooseicon5.png' alt='' />
                </div>
                <div className='why_chose_schon_head'>
                  <h3>Unwavering Quality</h3>
                </div>
                <div className='why_chose_schon_para'>
                  <p>
                    Our commitment to quality means products designed for
                    innovation, outfitted with the latest features for modern
                    living.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-12'>
              <div className='why_chose_schon_block'>
                <div className='why_chose_schon_icon'>
                  <img src='/images/chooseicon6.png' alt='' />
                </div>
                <div className='why_chose_schon_head'>
                  <h3>Weather the World</h3>
                </div>
                <div className='why_chose_schon_para'>
                  <p>
                    Be it rain, shine, or anything in between, our products
                    stand resilient, promising long-lasting quality.
                  </p>
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

      <ClientLogo />
      <TestiMonials />
      <ContactForm />
      <ExperienceCentres />

      <FooterBar />
    </>
  );
}
