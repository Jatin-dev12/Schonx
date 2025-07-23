'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import axios from 'axios';

function FooterBar() {
  const [categories, setCategory] = useState([]);

  useEffect(() => {
    const token = process.env.NEXT_PUBLIC_API_TOKEN;
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    async function fetchData() {
      const res = await axios.get(`${apiUrl}category`);
      console.log(res.data);
      setCategory(res.data.category);
    }

    fetchData();
  }, []);
  return (
    <>
      <section className='footer'>
        <div className='container'>
          <div className='row footer_row'>
            <div className='col-lg-3 col-md-6'>
              <div className='footer_1'>
                <div className='footer_logo'>
                  <Link href='/'>
                    <img src='/images/logo.png' alt='' />
                  </Link>
                </div>
                <div className='footer_content'>
                  <p>
                    India’s trusted name in premium aluminium doors and windows,
                    blending world-class German engineering with refined Indian
                    craftsmanship.
                  </p>
                </div>
                <div className='footer_social'>
                  <Link
                    target='_blank'
                    href='https://www.facebook.com/profile.php?id=100064649240458'
                  >
                    <img src='/images/ss1.png' alt='Facebook' />
                  </Link>
                  <Link
                    target='_blank'
                    href='https://www.instagram.com/schon_doorways/'
                  >
                    <img src='/images/ss5.png' alt='Instagram' />
                  </Link>
                  <Link
                    target='_blank'
                    href='https://in.pinterest.com/schon_doorways/'
                  >
                    <img src='/images/ss2.png' alt='Pinterest' />
                  </Link>
                  <Link
                    target='_blank'
                    href='https://www.linkedin.com/company/theschon/'
                  >
                    <img src='/images/ss4.png' alt='LinkedIn' />
                  </Link>
                </div>
              </div>
            </div>

            <div className='col-lg-3 col-md-6'>
              <div className='footer_2'>
                <h3>Our Existence</h3>
                <ul>
                  <li>
                    <a href='mailto:contact@theschon.com'>
                      contact@theschon.com
                    </a>
                  </li>
                  <li>
                    <a href='tel:+919535359481'>+91 9535359481</a>
                  </li>
                  <li>
                    <a href='tel:+917019209490'>+91 7019209490</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className='col-lg-2 col-md-6 col-sm-6 col-6'>
              <div className='footer_2'>
                <h3>Quick Links</h3>
                <ul>
                  <li>
                    <Link href='/blog'>Our Blogs</Link>
                  </li>
                  <li>
                    <Link href='/about'>About Us</Link>
                  </li>
                  <li>
                    <Link href='/news'>News</Link>
                  </li>
                  {/* <li>
                    <Link href='/faq'>FAQs</Link>
                  </li> */}
                  <li>
                    <Link href='/contact'>Contact Us</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className='col-lg-2 col-md-6 col-sm-6 col-6'>
              <div className='footer_2'>
                <h3>Products</h3>
                <ul>
                  {categories.map((key) => (
                    <li>
                      <a href={`/product?slug=${key.slug}`}>{key.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className='container'>
          <p className='lowfoot'>All Rights Reserved</p>
        </div>
      </section>
    </>
  );
}

export default FooterBar;
