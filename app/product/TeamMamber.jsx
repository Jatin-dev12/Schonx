
import arrow from '../../assets/images/arrow.png'
import window1 from '../../assets/images/window1.png'
import aboutteam1 from '../../assets/images/aboutteam1.jpg'
import aboutteam2 from '../../assets/images/aboutteam2.jpg'
import aboutteam3 from '../../assets/images/aboutteam3.png'
import white_bg from '../../assets/images/white_bg.jpg'
import { useEffect, useRef, useState } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Mousewheel } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

function TeamMamber() {

  return (
    <>
      <section className='team_members' style={{ backgroundImage: `url(${white_bg})` }}>
        <div className='container-fluid'>
          <div className="row row_justify">
            <div className="col-lg-12 col-md-12">
              <div className="main-heading">
                <h2 className="heading">Meet the Team</h2>
                <p className="para">Crafted by Passion, Powered by People</p>
              </div>
            </div>
          </div>
            <div className='row team_members_row'> 
              <div className='col-lg-4 col-md-4 col-ms-12'> 
                <div className='team_members_img'>
                  <img src={aboutteam1} alt="" />
                </div>
              </div>
              <div className='col-lg-4 col-md-4 col-ms-12'> 
                <div className='team_members_img'>
                  <img src={aboutteam2} alt="" />
                </div>
              </div>
              <div className='col-lg-4 col-md-4 col-ms-12'> 
                <div className='team_members_img'>
                  <img src={aboutteam3} alt="" />
                </div>
              </div>
            </div>
        </div>
      </section>
    </>
  );
}

export default TeamMamber;
