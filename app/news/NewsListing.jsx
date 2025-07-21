'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';

function NewsListing() {

  return (

    <section className='blog_listing' style={{ backgroundImage: `url('/images/white_bg.jpg')` }}>
        <div className='container-fluid'>
          <div className="row row_justify row_justify_blog">
          <div className="col-lg-12 col-md-12">
            <div className="main-heading">
              <h2 className="heading">Latest Blogs & News</h2>
            </div>
          </div>

          <div className="col-lg-8 col-md-12">
            <div className="faqsearch">
              <form action="/action_page.php">
                <input type="text" placeholder="Search by Functionality" name="search" />
                <button type="submit">Submit</button>
              </form>
            </div>
          </div>
        </div>
          <div className='row blog_listing_row'>
            <div className='col-lg-6 col-md-6 col-sm-12'>
              <div className='bloglisting listingbar'>
                <div className='bloglisting_img'>
                  <img src='/images/newimg1.png' alt="" />
                </div>
                <div className='bloglistingcontentaa'>
                  <div className='bloglistingdate'>
                    <img src='/images/bloglistimgicon.png' alt="" /><span>October 29, 2021</span>
                  </div>
                  <div className='bloglistingcontent'>
                    <h3>Context And Variables In Hugo Site Generator.</h3>
                    <p>Sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore…</p>
                    <a href='#'><p>Read More <img src='/images/arrow.png' alt='arrow' /></p></a>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-6 col-md-6 col-sm-12'>
              <div className='bloglisting listingbar'>
                <div className='bloglisting_img'>
                  <img src='/images/newimg2.png' alt="" />
                </div>
                <div className='bloglistingcontentaa'>
                  <div className='bloglistingdate'>
                    <img src='/images/bloglistimgicon.png' alt="" /><span>October 29, 2021</span>
                  </div>
                  <div className='bloglistingcontent'>
                    <h3>Context And Variables In Hugo Site Generator.</h3>
                    <p>Sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore…</p>
                    <a href='#'><p>Read More <img src='/images/arrow.png' alt='arrow' /></p></a>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-6 col-md-6 col-sm-12'>
              <div className='bloglisting listingbar'>
                <div className='bloglisting_img'>
                  <img src='/images/newimg3.png' alt="" />
                </div>
                <div className='bloglistingcontentaa'>
                  <div className='bloglistingdate'>
                    <img src='/images/bloglistimgicon.png' alt="" /><span>October 29, 2021</span>
                  </div>
                  <div className='bloglistingcontent'>
                    <h3>Context And Variables In Hugo Site Generator.</h3>
                    <p>Sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore…</p>
                    <a href='#'><p>Read More <img src='/images/arrow.png' alt='arrow' /></p></a>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-6 col-md-6 col-sm-12'>
              <div className='bloglisting listingbar'>
                <div className='bloglisting_img'>
                  <img src='/images/newimg4.png' alt="" />
                </div>
                <div className='bloglistingcontentaa'>
                  <div className='bloglistingdate'>
                    <img src='/images/bloglistimgicon.png' alt="" /><span>October 29, 2021</span>
                  </div>
                  <div className='bloglistingcontent'>
                    <h3>Context And Variables In Hugo Site Generator.</h3>
                    <p>Sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore…</p>
                    <a href='#'><p>Read More <img src='/images/arrow.png' alt='arrow' /></p></a>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-6 col-md-6 col-sm-12'>
              <div className='bloglisting listingbar'>
                <div className='bloglisting_img'>
                  <img src='/images/newimg5.png' alt="" />
                </div>
                <div className='bloglistingcontentaa'>
                  <div className='bloglistingdate'>
                    <img src='/images/bloglistimgicon.png' alt="" /><span>October 29, 2021</span>
                  </div>
                  <div className='bloglistingcontent'>
                    <h3>Context And Variables In Hugo Site Generator.</h3>
                    <p>Sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore…</p>
                    <a href='#'><p>Read More <img src='/images/arrow.png' alt='arrow' /></p></a>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-6 col-md-6 col-sm-12'>
              <div className='bloglisting listingbar'>
                <div className='bloglisting_img'>
                  <img src='/images/newimg6.png' alt="" />
                </div>
                <div className='bloglistingcontentaa'>
                  <div className='bloglistingdate'>
                    <img src='/images/bloglistimgicon.png' alt="" /><span>October 29, 2021</span>
                  </div>
                  <div className='bloglistingcontent'>
                    <h3>Context And Variables In Hugo Site Generator.</h3>
                    <p>Sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore…</p>
                    <a href='#'><p>Read More <img src='/images/arrow.png' alt='arrow' /></p></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='row row_pagination'>
            <div className='pagination'>
              <div className='page-left'>
                <span><a href="#"><img src='/images/pageleft.png' alt="" /></a></span>
              </div>
              <div className='page-mide'>
                <span><a className='active' href="#">1</a></span>
                <span><a href="#">2</a></span>
                <span><a href="#">3</a></span>
                <span><a href="#">4</a></span>
                <span><a href="#">5</a></span>
              </div>
              <div className='page-right'>
                <span><a href="#"><img src='/images/pageright.png' alt="" /></a></span>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}

export default NewsListing;
