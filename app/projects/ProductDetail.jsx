import React from 'react';
import '../common/css/style.css';
import SideNav from '../common/SideNav';
import HomeBanner from './HomeBanner';
import arrow from '../../assets/images/arrow.png';
import ContactFormfaq from '../about/ContactFormfaq';
import FooterBar from '../common/FooterBar';
import white_bg from '../../assets/images/white_bg.jpg';
import OurJourneybg from '../../assets/images/OurJourneybg.jpg';
import populartypologyicon1 from '../../assets/images/populartypologyicon1.png';
import populartypologyicon2 from '../../assets/images/populartypologyicon2.png';
import populartypologyicon3 from '../../assets/images/populartypologyicon3.png';
import populartypologyimg1 from '../../assets/images/populartypologyimg1.png';
import prodectdetailab from '../../assets/images/prodectdetailab.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Mousewheel } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import TestiMonials from '../common/TestiMonials';
import PopularColours from './PopularColours';

function ProductDetail() {
  return (
    <>
      <SideNav />
      <HomeBanner />

      <section
        className='what-we-do product-specifications '
        style={{ backgroundImage: `url(${white_bg})` }}
      >
        <div className='container-fluid'>
          <div className='row row_justify'>
            <div className='col-xl-7 col-lg-5 col-md-12'>
              <div className='product-specifications-slider'>
                {/* Custom Navigation Buttons */}
                <div className='product_list_grid_block_nav'>
                  <div className='swiper-button-prev-custom'>
                    <img src={arrow} alt='' />
                  </div>
                  <div className='swiper-button-next-custom'>
                    <img src={arrow} alt='' />
                  </div>
                </div>
                <Swiper
                  modules={[Navigation]}
                  slidesPerView={1} // default for small screens
                  spaceBetween={10}
                  navigation={{
                    nextEl: '.swiper-button-next-custom',
                    prevEl: '.swiper-button-prev-custom',
                  }}
                  breakpoints={{
                    640: {
                      slidesPerView: 1,
                      spaceBetween: 20,
                    },
                    991: {
                      slidesPerView: 1,
                      spaceBetween: 20,
                    },
                    1366: {
                      slidesPerView: 1,
                      spaceBetween: 20,
                    },
                  }}
                >
                  <SwiperSlide>
                    <div className='product_specifications_block_sliderimg'>
                      <img src={prodectdetailab} alt='' />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className='product_specifications_block_sliderimg'>
                      <img src={prodectdetailab} alt='' />
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
            <div className='col-xl-5 col-lg-7 col-md-12'>
              <div className='product-specifications-content'>
                <div className='row row_justify'>
                  <div className='col-lg-12 col-md-12'>
                    <div className='main-heading'>
                      <h2 className='heading'>Product Specifications </h2>
                      <p className='para'>
                        Lift and Slide aluminium doors are designed and
                        engineered for effortless sliding, maximum safety, and
                        superior noise insulation.
                      </p>
                      <p className='smallpara'>
                        Experience elegance with our ultra-slim sliding windows,
                        designed for a clean, minimalist aesthetic. These
                        windows combine expansive views with effortless
                        operation, making them perfect for modern homes and
                        commercial spaces.
                      </p>
                    </div>
                    <div className='product-specifications-grid'>
                      <div className='product-specifications-gridinner'>
                        <div className='main-heading'>
                          <h2 className='heading text-center'>3500 mm</h2>
                          <p className='smallpara text-center'> Sash Height </p>
                        </div>
                      </div>
                      <div className='product-specifications-gridinner'>
                        <div className='main-heading'>
                          <h2 className='heading text-center'>3500 mm</h2>
                          <p className='smallpara text-center'> Sash Height </p>
                        </div>
                      </div>
                      <div className='product-specifications-gridinner'>
                        <div className='main-heading'>
                          <h2 className='heading text-center'>3500 mm</h2>
                          <p className='smallpara text-center'> Sash Height </p>
                        </div>
                      </div>
                      <div className='product-specifications-gridinner'>
                        <div className='main-heading'>
                          <h2 className='heading text-center'>3500 mm</h2>
                          <p className='smallpara text-center'> Sash Height </p>
                        </div>
                      </div>
                    </div>

                    <div className='product-specifications-gridcont'>
                      <div class='distinctive_Features_content'>
                        <h3>Smooth Operation</h3>
                        <ul className='listing'>
                          <li>
                            Frame Corner Joint: 45° connection with corner cleat
                          </li>
                          <li>Shutter Corner Joint: 90° connection</li>
                          <li>Flush Details: Flushed along button track</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className='distinctive_Features distinctive_Featurespt'>
        <div className='container-fluid'>
          <div className="row row_justify">
            <div className="col-lg-12 col-md-12">
              <div className="main-heading">
                <h2 className="heading text-center">Popular Typology</h2>
              </div>
            </div>
          </div>
          <div className='row row_distinctive_Features'>
            <div className='col-lg-3 col-md-6 col-sm-12'>
              <div className="distinctive_Features_block">
                <div className="distinctive_Features_icon distinctive_Features_popular_typology">
                  <img src={populartypologyimg1} alt="" />
                </div>
                <div className="distinctive_Features_content distinctive_Features_popular_typology">
                  <h3>2 Track 3 Shutter</h3>
                </div>
              </div>
            </div>
            <div className='col-lg-3 col-md-6 col-sm-12'>
              <div className="distinctive_Features_block">
                <div className="distinctive_Features_icon distinctive_Features_popular_typology">
                  <img src={populartypologyimg1} alt="" />
                </div>
                <div className="distinctive_Features_content distinctive_Features_popular_typology">
                  <h3>2 Track 4 Shutter</h3>
                </div>
              </div>
            </div>
            <div className='col-lg-3 col-md-6 col-sm-12'>
              <div className="distinctive_Features_block">
                <div className="distinctive_Features_icon distinctive_Features_popular_typology">
                  <img src={populartypologyimg1} alt="" />
                </div>
                <div className="distinctive_Features_content distinctive_Features_popular_typology">
                  <h3>3 Track 3 Shutter</h3>
                </div>
              </div>
            </div>
            <div className='col-lg-3 col-md-6 col-sm-12'>
              <div className="distinctive_Features_block">
                <div className="distinctive_Features_icon distinctive_Features_popular_typology">
                  <img src={populartypologyimg1} alt="" />
                </div>
                <div className="distinctive_Features_content distinctive_Features_popular_typology">
                  <h3>23Track 6Shutter</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section
        className='cuttingedge-page cuttingedge-page-we-offer'
        style={{ backgroundImage: `url(${OurJourneybg})` }}
      >
        <div className='container-fluid'>
          <div className='row row_justify'>
            <div className='col-lg-12 col-md-12'>
              <div className='main-heading'>
                <h2 className='heading text-center'>We Offer</h2>
              </div>
            </div>
          </div>
          <div className='row row_cuttingedge-page-we-offer'>
            <div className='col-xl-3 col-lg-4 col-md-12'>
              <div className='our_solutions_block'>
                <div className='why_chose_schon_icon'>
                  <img src={populartypologyicon1} alt='' />
                </div>
                <div className='why_chose_schon_head'>
                  <h3>Enhanced Security </h3>
                </div>
                <div className='why_chose_schon_para'>
                  <p>
                    Our windows offer unparalleled ease of use with a glide that
                    feels effortless, featuring innovative sliding mechanisms.
                  </p>
                </div>
              </div>
            </div>

            <div className='col-xl-3 col-lg-4 col-md-12'>
              <div className='our_solutions_block'>
                <div className='why_chose_schon_icon'>
                  <img src={populartypologyicon2} alt='' />
                </div>
                <div className='why_chose_schon_head'>
                  <h3>Seamless Operation </h3>
                </div>
                <div className='why_chose_schon_para'>
                  <p>
                    Our windows offer unparalleled ease of use with a glide that
                    feels effortless, featuring innovative sliding mechanisms.
                  </p>
                </div>
              </div>
            </div>

            <div className='col-xl-3 col-lg-4 col-md-12'>
              <div className='our_solutions_block'>
                <div className='why_chose_schon_icon'>
                  <img src={populartypologyicon3} alt='' />
                </div>
                <div className='why_chose_schon_head'>
                  <h3>Peaceful Indoors</h3>
                </div>
                <div className='why_chose_schon_para'>
                  <p>
                    Tailor your experience with our single or double track
                    options, providing flexibility to fit any design aesthetic.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PopularColours />

      <ContactFormfaq />

      <TestiMonials />

      <FooterBar />
    </>
  );
}

export default ProductDetail;
