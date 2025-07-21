'use client'
import { useEffect, useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Mousewheel } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

function TeamMamber() {
  return (
    <>
      <section
        className='team_members'
        style={{ backgroundImage: `url('/images/white_bg.jpg')` }}
      >
        <div className='container-fluid'>
          <div className='row row_justify'>
            <div className='col-lg-12 col-md-12'>
              <div className='main-heading'>
                <h2 className='heading'>Meet the Team</h2>
                <p className='para'>Crafted by Passion, Powered by People</p>
              </div>
            </div>
          </div>
          <div className='row team_members_row'>
            <div className='col-lg-4 col-md-4 col-ms-12'>
              <div className='team_members_main'>
                <div className='team_members_img'>
                  <img src='/images/aboutteam1.jpg' alt='' />
                </div>
                <div className='team_members_content'>
                  <h3>Rahul Reghunath </h3>
                  <p>
                    Schon transformed our house into a masterpiece! The
                    attention to detail in every custom-designed window and door
                    is unmatched. Our home now exudes both luxury and
                    practicality—exactly what we were looking for. Thank you,
                    Schon, for making our dream home a reality!
                  </p>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-4 col-ms-12'>
              <div className='team_members_main'>
                <div className='team_members_img'>
                  <img src='/images/aboutteam2.jpg' alt='' />
                </div>
                <div className='team_members_content'>
                  <h3>Swati Iyer </h3>
                  <p>
                    Choosing Schon was the best decision we made for our home.
                    The personalized, engineered solutions they provided for our
                    kitchen and wardrobe exceeded our expectations. The team
                    worked closely with us, ensuring that every aspect reflected
                    our style. Our space is now a true reflection of us, thanks
                    to Schon!
                  </p>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-4 col-ms-12'>
              <div className='team_members_main'>
                <div className='team_members_img'>
                  <img src='/images/aboutteam3.png' alt='' />
                </div>
                <div className='team_members_content'>
                  <h3>Rahul Reghunath </h3>
                  <p>
                    Schon transformed our house into a masterpiece! The
                    attention to detail in every custom-designed window and door
                    is unmatched. Our home now exudes both luxury and
                    practicality—exactly what we were looking for. Thank you,
                    Schon, for making our dream home a reality!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default TeamMamber;
