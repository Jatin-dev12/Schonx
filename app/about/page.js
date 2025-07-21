'use client'
import React from 'react';
import '../common/css/style.css';
import SideNav from '../common/SideNav';
import HomeBanner from './HomeBanner';
import CounterBar from './CounterBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import FooterBar from '../common/FooterBar';
import OurJourney from './OurJourney';
import ExperienceCentres from '../common/ExperienceCentres';
import ContactForm from '../common/ContactForm';




function Index() {
  return (
    <>
      <SideNav />
      <HomeBanner />

      <section
        className='what-we-do about-schon-we-do about-schon-we-dopage'
        style={{ backgroundImage: `url('/images/white_bg.jpg')` }}
      >
        <div className='container-fluid'>
          <div className='row row_justify'>
            <div className='col-lg-12 col-md-12'>
              <div className='main-heading'>
                <p className='para'>
                  Welcome to Schon Doorways- Where Precision Meets Sophistication
                </p>
              </div>
            </div>
          </div>
          <div className='row row_about_schon'>
            <div className='col-lg-12'>
              <div className='about-schon-we-do-img'>
                 <iframe src="https://www.youtube.com/embed/6xWIRLubPGc?playlist=6xWIRLubPGc&loop=1&autoplay=1&mute=1&loop=1"></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CounterBar />

      <section className='mision_vision'>
        <div className='conatiner-fluid'>
          <div className='row mision_vision_row1'>
            <div className='col-lg-6 col-md-12'>
              <div className='mision_vision_row2'>
                <div className='row mision_vision_row3'>
                  <div className='col-lg-3 col-md-12'>
                    <div className='mision_vision_img'>
                      <img src='/images/aboutpagebannericon2.png' alt='' />
                    </div>
                  </div>
                  <div className='col-lg-9 col-md-8'>
                    <div className='mision_vision_content'>
                      <div className='mision_vision_head'>
                        <h3>Our Mission</h3>
                      </div>
                      <div className='mision_vision_para'>
                        <p>
                          To empower architects, designers, and homeowners with world-class aluminium doors, windows, and interior systems — crafted with German precision, engineered for India, and delivered through seamless end-to-end service.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-6 col-md-12 mision_vision_rowcl'>
              <div className='mision_vision_row2'>
                <div className='row mision_vision_row3'>
                  <div className='col-lg-3 col-md-4'>
                    <div className='mision_vision_img'>
                      <img src='/images/aboutpagebannericon1.png' alt='' />
                    </div>
                  </div>
                  <div className='col-lg-9 col-md-8 '>
                    <div className='mision_vision_content'>
                      <div className='mision_vision_head'>
                        <h3>Our Vision</h3>
                      </div>
                      <div className='mision_vision_para'>
                        <p>
                          To become India’s most trusted name in architectural aluminium systems by shaping future-ready spaces with innovation, integrity, and design excellence—one doorway at a time.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <OurJourney />
      <ContactForm />
      <ExperienceCentres />
      <FooterBar />
    </>
  );
}

export default Index;
