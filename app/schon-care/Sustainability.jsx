import React, { useEffect, useRef, useState } from 'react';
import '../common/css/style.css';
import SideNav from '../common/SideNav';
import TeamMamber from '../about/TeamMamber';
import HomeBanner from './HomeBanner';
import arrow from '../../assets/images/arrow.png';
import bg_img from '../../assets/images/bg-img.mp4';
import CounterBar from '../about/CounterBar';
import ContactFormfaq from '../about/ContactFormfaq';
import existenceimgbg from '../../assets/images/existenceimgbg.png';
import existenceimg1 from '../../assets/images/existenceimg1.png';
import existenceimg2 from '../../assets/images/existenceimg2.png';
import existenceimg3 from '../../assets/images/existenceimg3.png';
import FooterBar from '../common/FooterBar';
import white_bg from '../../assets/images/white_bg.jpg'
import OurJourneybg from '../../assets/images/OurJourneybg.jpg';
import aboutpagebannericon1 from '../../assets/images/aboutpagebannericon1.png';
import aboutpagebannericon2 from '../../assets/images/aboutpagebannericon2.png';
import housing_solutionimg from '../../assets/images/one-stop-housing-solutionimg.jpg';
import OurJourney from '../about/OurJourney';
import chooseicon1 from '../../assets/images/chooseicon1.png';
import chooseicon2 from '../../assets/images/chooseicon2.png';
import chooseicon3 from '../../assets/images/chooseicon3.png';
import chooseicon4 from '../../assets/images/chooseicon4.png';
import chooseicon5 from '../../assets/images/chooseicon5.png';
import chooseicon6 from '../../assets/images/chooseicon6.png';
import ExperienceCentres from '../common/ExperienceCentres';
import Sustainabilityimg1 from '../../assets/images/Sustainabilityimg1.jpg';
import Sustainabilityicon1 from '../../assets/images/Sustainabilityicon1.png';
import Sustainabilityicon2 from '../../assets/images/Sustainabilityicon2.png';
import Sustainabilityicon3 from '../../assets/images/Sustainabilityicon3.png';
import Sustainabilitybanner from  '../../assets/images/Sustainabilitybanner.jpg'
import EnergyEfficient from  '../../assets/images/EnergyEfficient.png'
import EcoFriendly from  '../../assets/images/EcoFriendly.png'
import Sustainabilityicon4 from '../../assets/images/Sustainabilityicon4.png';
import Sustainabilityicon5 from '../../assets/images/Sustainabilityicon5.png';
import Sustainabilityicon6 from '../../assets/images/Sustainabilityicon6.png';
import Sustainabilityicon7 from '../../assets/images/Sustainabilityicon7.png';
import Sustainabilityicon8 from '../../assets/images/Sustainabilityicon8.png';
import Sustainabilityicon9 from '../../assets/images/Sustainabilityicon9.png';
import Sustainabilityicon10 from '../../assets/images/Sustainabilityicon10.png';
import Sustainabilityicon11 from '../../assets/images/Sustainabilityicon11.png';
import Sustainabilityicon12 from '../../assets/images/Sustainabilityicon12.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Mousewheel } from 'swiper/modules';
import { Link } from 'react-router-dom';

import 'swiper/css';
import 'swiper/css/navigation';
import ClientLogo from '../common/ClientLogo';
import TestiMonials from '../common/TestiMonials';
const banners = [
  `url(${Sustainabilitybanner})`,
  `url(${Sustainabilitybanner})`, // Add more images if desired
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
        <div className="banner active" style={{ backgroundImage: `url(${Sustainabilitybanner})` }}>
          <div className='banner-content'>
            <div className='banner-content-left'>
              <h1 className='banner-heading'>Sustainability at Schon</h1>
              <p className='banner-para'>Building a Greener Future</p>
              <div className="header-inner-3">
                <a className="header-btn" href="#"> Get Free Consultation <img src={arrow} alt="" /> </a>
              </div>
            </div>
          </div>
        </div>
        <div className="banner" style={{ backgroundImage: `url(${Sustainabilitybanner})` }}>
          <div className='banner-content'>
            <div className='banner-content-left'>
              <h1 className='banner-heading'>Sustainability at Schon</h1>
              <p className='banner-para'>Building a Greener Future</p>
              <div className="header-inner-3">
                <a className="header-btn" href="#"> Get Free Consultation <img src={arrow} alt="" /> </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="what-we-do about-schon-we-do about-schon-we-dopage" style={{ backgroundImage: `url(${white_bg})` }}>
        <div className="container-fluid">
          <div className="row row_justify">
            <div className="col-lg-9 col-md-12">
              <div className="main-heading">
                <p className="para">At Schon, sustainability is more than a commitment—it's the foundation of our innovation. As leaders in premium aluminum systems, we design products that not only transform spaces but also contribute to a sustainable future. From material selection to manufacturing practices, our focus is on reducing environmental impact while maintaining exceptional quality and performance.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-12">
              <div className="what-we-do-bt">
                <div className="header-inner-3">
                  <a className="header-btn" href="#">Read More <img src={arrow} alt="" /> </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="what-we-do housing_solution">
        <div className="container-fluid">
          <div className="row row_justify">
            <div className="col-lg-7 col-md-12">
              <div className='onestop'>
                <img src={Sustainabilityimg1} alt="" />
              </div>
            </div>
            <div className="col-lg-5 col-md-12">
              <div class="main-heading"><h2 class="heading">Sustainable Materials for a Sustainable Future</h2></div>
              <div class="small-para"><p class="small-inpara">Aluminum is a metal that truly builds the future. It is lightweight, durable, and infinitely recyclable. At Schon, we exclusively use high-grade aluminum alloys that are sourced and processed responsibly. This ensures:</p></div>
              
              <div className='why_chose_schon_block_sust'>
                <div className='why_chose_schon_block why_chose_schon_block_sus'>
                  <div className='why_chose_schon_icon_1'>
                    <img src={Sustainabilityicon1} alt="" />
                  </div>
                  <div className='why_chose_schon_icon_1'>
                    <div className='why_chose_schon_head'>
                      <h3>Minimal Waste</h3>
                    </div>
                    <div className='why_chose_schon_para'>
                      <p>Our manufacturing processes optimize material usage to reduce waste.</p>
                    </div>
                  </div>
                </div>
                <div className='why_chose_schon_block why_chose_schon_block_sus'>
                  <div className='why_chose_schon_icon_1'>
                    <img src={Sustainabilityicon2} alt="" />
                  </div>
                  <div className='why_chose_schon_icon_1'>
                    <div className='why_chose_schon_head'>
                      <h3>Recyclability</h3>
                    </div>
                    <div className='why_chose_schon_para'>
                      <p>Aluminum is 100% recyclable, allowing us to repurpose offcuts and contribute to the circular economy.</p>
                    </div>
                  </div>
                </div>
                <div className='why_chose_schon_block why_chose_schon_block_sus'>
                  <div className='why_chose_schon_icon_1'>
                    <img src={Sustainabilityicon3} alt="" />
                  </div>
                  <div className='why_chose_schon_icon_1'>
                    <div className='why_chose_schon_head'>
                      <h3>Longevity</h3>
                    </div>
                    <div className='why_chose_schon_para'>
                      <p>Durable materials mean our products stand the test of time, reducing the need for frequent replacements.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="what-we-do housing_solution Energy_Efficient" style={{ backgroundImage: `url(${OurJourneybg})` }}>
        <div className="container-fluid">
          <div className="row row_justify">
            <div className="col-lg-5 col-md-12">
              <div class="main-heading"><h2 class="heading text-white">Energy-Efficient Solutions</h2></div>
              <div class="small-para"><p class="small-inpara text-white">Our aluminum systems are engineered to enhance energy efficiency in buildings, reducing their carbon footprint. Key features include:</p></div>
              
              <div className='why_chose_schon_block_sust'>
                <div className='why_chose_schon_block why_chose_schon_block_sus'>
                  <div className='why_chose_schon_icon_1'>
                    <img src={Sustainabilityicon4} alt="" />
                  </div>
                  <div className='why_chose_schon_icon_1'>
                    <div className='why_chose_schon_head'>
                      <h3 className='text-white'>Thermal Break Technology</h3>
                    </div>
                    <div className='why_chose_schon_para'>
                      <p className='text-white'>Advanced thermal breaks minimize heat transfer, improving insulation and reducing energy consumption.</p>
                    </div>
                  </div>
                </div>
                <div className='why_chose_schon_block why_chose_schon_block_sus'>
                  <div className='why_chose_schon_icon_1'>
                    <img src={Sustainabilityicon5} alt="" />
                  </div>
                  <div className='why_chose_schon_icon_1'>
                    <div className='why_chose_schon_head'>
                      <h3 className='text-white'>Double and Triple Glazing Options</h3>
                    </div>
                    <div className='why_chose_schon_para'>
                      <p className='text-white'>High-performance glass improves thermal efficiency, cutting down heating and cooling needs.</p>
                    </div>
                  </div>
                </div>
                <div className='why_chose_schon_block why_chose_schon_block_sus'>
                  <div className='why_chose_schon_icon_1'>
                    <img src={Sustainabilityicon6} alt="" />
                  </div>
                  <div className='why_chose_schon_icon_1'>
                    <div className='why_chose_schon_head'>
                      <h3 className='text-white'>Precision Seals</h3>
                    </div>
                    <div className='why_chose_schon_para'>
                      <p className='text-white'>Airtight designs prevent energy loss, enhancing the overall efficiency of spaces.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-7 col-md-12">
              <div className='onestop'>
                <img src={EnergyEfficient} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="what-we-do housing_solution Energy_Efficient">
        <div className="container-fluid">
          <div className="row row_justify">
            <div className="col-lg-7 col-md-12">
              <div className='onestop'>
                <img src={EcoFriendly} alt="" />
              </div>
            </div>
            <div className="col-lg-5 col-md-12">
              <div class="main-heading"><h2 class="heading">Eco-Friendly Manufacturing</h2></div>
              <div class="small-para"><p class="small-inpara">Schon's manufacturing processes are designed to prioritize sustainability at every step. Our facilities adhere to strict environmental standards, focusing on:</p></div>
              
              <div className='why_chose_schon_block_sust'>
                <div className='why_chose_schon_block why_chose_schon_block_sus'>
                  <div className='why_chose_schon_icon_1'>
                    <img src={Sustainabilityicon7} alt="" />
                  </div>
                  <div className='why_chose_schon_icon_1'>
                    <div className='why_chose_schon_head'>
                      <h3>Reduced Emissions</h3>
                    </div>
                    <div className='why_chose_schon_para'>
                      <p>Utilizing energy-efficient machinery and clean energy sources to minimize emissions.</p>
                    </div>
                  </div>
                </div>
                <div className='why_chose_schon_block why_chose_schon_block_sus'>
                  <div className='why_chose_schon_icon_1'>
                    <img src={Sustainabilityicon8} alt="" />
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
                    <img src={Sustainabilityicon9} alt="" />
                  </div>
                  <div className='why_chose_schon_icon_1'>
                    <div className='why_chose_schon_head'>
                      <h3>Waste Management</h3>
                    </div>
                    <div className='why_chose_schon_para'>
                      <p>Implementing robust recycling programs to repurpose aluminum and other materials.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="what-we-do housing_solution Energy_Efficient Sustainable-Design" style={{ backgroundImage: `url(${OurJourneybg})` }}>
        <div className="container-fluid">
          <div className="row row_justify">
            <div className="col-lg-12 col-md-12">
              <div class="main-heading"><h2 class="heading text-white text-center">Sustainable Design, Endless Possibilities</h2></div>
              <p className="para text-white text-center">We believe sustainability goes hand-in-hand with innovation. Our minimalist designs maximize natural light, reducing the need for artificial lighting and creating healthier, more sustainable living spaces. By bringing nature closer to people, we redefine modern architecture with a green perspective.</p>
            </div>
          </div>
        </div>
      </section>

            <section className='what-we-do housing_solution'>
              <div className='container-fluid'>
                <div className='row row_justify'>
                  <div className='col-lg-6 col-md-12'>
                    <div className='onestop'>
                      <img src={housing_solutionimg} alt='' />
                    </div>
                  </div>
                  <div className='col-lg-6 col-md-12'>
                    <div className='main-heading'>
                      <div class="main-heading"><h2 class="heading">Empowering Green Partnerships</h2></div>
                      <div class="small-para"><p class="small-inpara">We collaborate with architects, designers, and developers who share our passion for sustainability. Together, we create iconic structures that exemplify energy efficiency and environmental responsibility.</p></div>
                    </div>
                    <div className='what-we-do-bt'>
                      <div className='header-inner-3'>
                        <a className='header-btn' href='#'>
                          Read More <img src={arrow} alt='' />{' '}
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
                   Every Schon product is a testament to our dedication to environmental stewardship. By choosing Schon, you are investing in:
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='row our_solutions_row'>
            <div className='col-lg-4 col-md-6 col-sm-12'>
              <div className='our_solutions_block'>
                <div className='why_chose_schon_icon'>
                  <img src={Sustainabilityicon10} alt='' />
                </div>
                <div className='why_chose_schon_head'>
                  <h3>Sustainable Living</h3>
                </div>
                <div className='why_chose_schon_para'>
                  <p>
                    Products that reduce your environmental footprint.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-12'>
              <div className='our_solutions_block'>
                <div className='why_chose_schon_icon'>
                  <img src={Sustainabilityicon11} alt='' />
                </div>
                <div className='why_chose_schon_head'>
                  <h3>Future-Proof Innovation</h3>
                </div>
                <div className='why_chose_schon_para'>
                  <p>
                    Designs that meet global sustainability standards.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-12'>
              <div className='our_solutions_block'>
                <div className='why_chose_schon_icon'>
                  <img src={Sustainabilityicon12} alt='' />
                </div>
                <div className='why_chose_schon_head'>
                  <h3>A Greener Tomorrow</h3>
                </div>
                <div className='why_chose_schon_para'>
                  <p>
                    Supporting a brand committed to driving eco-conscious change.
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
                    <img src={Sustainabilityicon10} alt='' />
                  </div>
                  <div className='why_chose_schon_head'>
                    <h3>Sustainable Living</h3>
                  </div>
                  <div className='why_chose_schon_para'>
                    <p>
                      Products that reduce your environmental footprint.
                    </p>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className='our_solutions_block'>
                  <div className='why_chose_schon_icon'>
                    <img src={Sustainabilityicon11} alt='' />
                  </div>
                  <div className='why_chose_schon_head'>
                    <h3>Future-Proof Innovation</h3>
                  </div>
                  <div className='why_chose_schon_para'>
                    <p>
                      Designs that meet global sustainability standards.
                    </p>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className='our_solutions_block'>
                  <div className='why_chose_schon_icon'>
                    <img src={Sustainabilityicon12} alt='' />
                  </div>
                  <div className='why_chose_schon_head'>
                    <h3>A Greener Tomorrow</h3>
                  </div>
                  <div className='why_chose_schon_para'>
                    <p>
                      Supporting a brand committed to driving eco-conscious change.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
      <ClientLogo />

      <ContactFormfaq />
      <TestiMonials />
      <FooterBar />
    </>
  );
}

export default Sustainability;
