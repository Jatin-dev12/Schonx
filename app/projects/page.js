'use client';
import React from 'react';
import '../common/css/style.css';
import SideNav from '../common/SideNav';
import HomeBanner from './HomeBanner';
import ContactFormfaq from '../about/ContactFormfaq';
import FooterBar from '../common/FooterBar';
import 'swiper/css';
import 'swiper/css/navigation';
import ProjectListing from './ProjectListing';
import TestiMonials from '../common/TestiMonials';
import 'bootstrap/dist/css/bootstrap.min.css';
function Index() {
  return (
    <>
      <SideNav />
      <HomeBanner />
      <ProjectListing />
      <ContactFormfaq />
      <TestiMonials />
      <FooterBar />
    </>
  );
}

export default Index;
