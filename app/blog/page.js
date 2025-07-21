'use client';
import React from 'react';
import '../common/css/style.css';
import SideNav from '../common/SideNav';
import HomeBanner from './HomeBanner';
import ContactFormfaq from '../about/ContactFormfaq';
import FooterBar from '../common/FooterBar';

import 'bootstrap/dist/css/bootstrap.min.css';

import 'swiper/css';
import 'swiper/css/navigation';
import TestiMonials from '../common/TestiMonials';
import BlogListing from './BlogListing';

function Index() {
  return (
    <>
      <SideNav />
      <HomeBanner />

      <BlogListing />

      <ContactFormfaq />
      <TestiMonials />

      <FooterBar />
    </>
  );
}

export default Index;
