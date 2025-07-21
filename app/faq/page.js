import React from 'react';
import '../common/css/style.css';
import SideNav from '../common/SideNav';
import HomeBanner from './HomeBanner';
import FooterBar from '../common/FooterBar';
import ScrollTabfaq from './ScrollTabfaq';
import ContactFormfaq from '../about/ContactFormfaq';
import TestiMonials from '../common/TestiMonials';
import 'bootstrap/dist/css/bootstrap.min.css';

function Index() {
  return (
    <>
      <SideNav />
      <HomeBanner />
      {/* <ScrollTabfaq /> */}
      <section
        className='what-we-do home-bar-cta'
        style={{ backgroundImage: `url('/images/OurJourneybg.jpg')` }}
      >
        <div className='container-fluid'>
          <div className='row row_justify'>
            <div className='col-lg-8 col-md-12'>
              <div className='main-heading'>
                <h2 className='heading'>Ready to upgrade your House?</h2>
                <p className='para'>we’re just a step away</p>
              </div>
            </div>
            <div className='col-lg-4 col-md-12'>
              <div className='what-we-do-bt'>
                <div className='header-inner-3'>
                  <a className='header-btn' href='/contact'>
                    Get in Touch <img src='/images/arrow.jpg' alt='' />{' '}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <TestiMonials />
      <ContactFormfaq />
      <FooterBar />
    </>
  );
}

export default Index;
