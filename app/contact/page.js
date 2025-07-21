'use client';
import React from 'react';
import '../common/css/style.css';
import SideNav from '../common/SideNav';
import HomeBanner from './HomeBanner';
import ContactFormfaq from '../about/ContactFormfaq';
import FooterBar from '../common/FooterBar';
import TestiMonials from '../common/TestiMonials';

import 'bootstrap/dist/css/bootstrap.min.css';
function Index() {
  return (
    <>
      <SideNav />
      <HomeBanner />

      <section
        className='what-we-do contactpage'
        style={{ backgroundImage: `url('/images/white_bg.jpg')` }}
      >
        <div className='container-fluid'>
          <div className='row row_justify row_justify_contactpage'>
            <div className='col-lg-12 col-md-12'>
              <div className='main-heading'>
                <h2 className='heading'>Let’s Connect</h2>
                <h3 className='para'>
                  Have a question, design brief, or project in mind? Our team is
                  here to help you every step of the way—from product selection
                  to final installation. Reach out to us and experience the
                  precision, support, and professionalism that define Schon
                  Doorways.
                </h3>
              </div>
            </div>
          </div>
          <div className='row row_justify'>
            <div className='col-xl-4 col-lg-5 col-md-12'>
              <div className='distinctive_Features_block'>
                <div className='distinctive_Features_icon'>
                  <img src='/images/contactimg1.png' alt='' />
                </div>
                <div className='distinctive_Features_content'>
                  <h3>Location</h3>
                  <p>
                    19 Sharp Building, Queens Road, Vasanth Nagar, Bengaluru,
                    Karnataka, India
                  </p>
                </div>
              </div>
            </div>
            <div className='col-xl-7 col-lg-7 col-md-12'>
              <div className='distinctive_Features_block-1'>
                <div className='distinctive_Features_content'>
                  <h3>Informations</h3>
                </div>
                <div className='contactpage_block'>
                  <div className='contactpage_blockimg'>
                    <img src='/images/contactimg2.png' alt='' />
                  </div>
                  <div className='contactpage_blockcontant'>
                    <span>
                      <a href='mailto:contact@theschon.com'>
                        contact@theschon.com
                      </a>
                    </span>
                  </div>
                </div>

                <div className='contactpage_block contactpage_block1'>
                  <div className='contactpage_blockimg'>
                    <img src='/images/contactimg3.png' alt='' />
                  </div>
                  <div className='contactpage_blockcontant'>
                    <div className='contactpage_blockcontantin'>
                      <span>
                        <a href='tel:+919535359481'>+91 9535359481</a>
                        <br />
                        <a href='tel:+917019209490'>+91 7019209490</a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactFormfaq />
      <TestiMonials />

      <FooterBar />
    </>
  );
}

export default Index;
