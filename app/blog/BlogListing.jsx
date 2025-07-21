'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';

function BlogListing() {
  const [blog, setBlog] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const token = process.env.NEXT_PUBLIC_API_TOKEN;

    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}post`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.data?.status && Array.isArray(res.data.post)) {
          setBlog(res.data.post);
        } else {
          setError('Invalid data format received from server');
        }
      })
      .catch((err) => {
        console.error('Failed to fetch blog:', err);
        setError('Failed to load blogs');
      });
  }, []);

  const formatDate = () => {
    const date = new Date();
    return date.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });
  };

  return (
    <section
      className='blog_listing'
      style={{ backgroundImage: `url('/images/white_bg.jpg')` }}
    >
      <div className='container-fluid'>
        <div className='row row_justify'>
          <div className='col-lg-12 col-md-12'>
            <div className='contact_formfaq_main'>
              <div className='main-heading'>
                <h2 className='heading text-center'>Latest Blogs & News</h2>
              </div>
            </div>
          </div>
        </div>
        <div className='row blog_listing_row'>
          {blog.length === 0 && !error && (
            <div className='col-12'>
              <p>No blogs found.</p>
            </div>
          )}
          {blog.map((post) => (
            <div className='col-lg-6 col-md-6 col-sm-12' key={post.id}>
              <Link
                href={`/blog/${post.slug}`}
                style={{ textDecoration: 'none' }}
              >
                <div className='bloglisting'>
                  <div className='bloglisting_img'>
                    <img src={post.logo} alt={post.title} />
                  </div>
                  <div className='bloglistingdate'>
                    <img src='/images/bloglistimgicon.png' alt='Date icon' />
                    <span>
                      {post.created_at
                        ? new Date(post.created_at).toLocaleDateString(
                            'en-US',
                            {
                              month: 'long',
                              day: 'numeric',
                              year: 'numeric',
                            }
                          )
                        : formatDate()}
                    </span>
                  </div>
                  <div className='bloglistingcontent'>
                    <h3>
                      {post.title
                        ? `${post.title.slice(0, 55)}${
                            post.title.length > 55 ? '...' : ''
                          }`
                        : 'No description available.'}
                    </h3>
                    <p>
                      {post.short_description
                        ? `${post.short_description.slice(0, 200)}${
                            post.short_description.length > 200 ? '...' : ''
                          }`
                        : 'No description available.'}
                    </p>

                    <div className='blog-listingbtngg'>
                      <Link
                        className='blog-listingbtn'
                        href={`/blog/${post.slug}`}
                        style={{ textDecoration: 'none' }}
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
        {/* Pagination (commented out as in original) */}
        {/* <div className='row row_pagination'>
          <div className='pagination'>
            <div className='page-left'>
              <span>
                <a href='#'>
                  <img src={pageleft} alt='' />
                </a>
              </span>
            </div>
            <div className='page-mide'>
              <span>
                <a className='active' href='#'>
                  1
                </a>
              </span>
              <span>
                <a href='#'>2</a>
              </span>
              <span>
                <a href='#'>3</a>
              </span>
              <span>
                <a href='#'>4</a>
              </span>
              <span>
                <a href='#'>5</a>
              </span>
            </div>
            <div className='page-right'>
              <span>
                <a href='#'>
                  <img src={pageright} alt='' />
                </a>
              </span>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}

export default BlogListing;
