import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { Link, useLocation } from 'react-router-dom';
import arrow from '../../assets/images/arrow.png';
import blogdetail from '../../assets/images/blogdetail.jpg';
import white_bg from '../../assets/images/white_bg.jpg';
import bloglistimg1 from '../../assets/images/bloglistimg1.jpg';
import SideNav from '../common/SideNav';
import FooterBar from '../common/FooterBar';

const cols = 12;
const rows = 10;
const duration = 7000;

const BlogDetail = () => {
  const containerRef = useRef(null);
  const isAnimatingRef = useRef(false);
  const [post, setPost] = useState({});
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [recentPosts, setRecentPosts] = useState([]);
  const [error, setError] = useState('');
  const location = useLocation();

  // Parse query parameters
  const searchParams = new URLSearchParams(location.search);
  const slug = searchParams.get('slug');

  // Banner animation logic
  const createCubes = (imageUrl) => {
    const container = containerRef.current;
    if (!container) {
      console.warn('createCubes: containerRef is null');
      return [];
    }

    const cubes = [];
    const w = window.innerWidth / cols;
    const h = window.innerHeight / rows;

    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        const cube = document.createElement('div');
        cube.classList.add('cube');
        cube.style.width = `${w}px`;
        cube.style.height = `${h}px`;
        cube.style.left = `${x * w}px`;
        cube.style.top = `${y * h}px`;
        cube.style.backgroundImage = imageUrl;
        cube.style.backgroundSize = `${window.innerWidth}px ${window.innerHeight}px`;
        cube.style.backgroundPosition = `-${x * w}px -${y * h}px`;
        cube.style.animationDelay = `${(x + y) * 70}ms`;
        container.appendChild(cube);
        cubes.push(cube);
      }
    }
    return cubes;
  };

  const animateTransition = () => {
    if (isAnimatingRef.current || !containerRef.current) {
      console.warn(
        'Animation skipped: container not ready or already animating'
      );
      return;
    }
    isAnimatingRef.current = true;

    const container = containerRef.current;
    const bannerEl = container.querySelector('.banner');
    if (!bannerEl) {
      console.warn('No banner element found');
      isAnimatingRef.current = false;
      return;
    }

    const imageUrl = `url(${post.banner || blogdetail})`;
    const cubes = createCubes(imageUrl);

    bannerEl.style.opacity = 0;

    setTimeout(() => {
      cubes.forEach((cube) => cube.remove());
      bannerEl.style.opacity = 1;
      isAnimatingRef.current = false;
    }, (cols + rows) * 70 + 1300);
  };

  useEffect(() => {
    // Start animation after DOM is mounted
    if (error || !post.title) return; // Skip animation if error or no post
    const timer = setTimeout(() => {
      animateTransition();
      const interval = setInterval(animateTransition, duration);
      return () => clearInterval(interval);
    }, 100);

    return () => clearTimeout(timer);
  }, [post.banner, error, post.title]);

  // Fetch blog details
  useEffect(() => {
    if (!slug) {
      setError('No slug provided');
      return;
    }

    const token = import.meta.env.VITE_API_TOKEN;
    axios
      .get(`${import.meta.env.VITE_API_URL}post-detail`, {
        headers: { Authorization: `Bearer ${token}` },
        params: { slug },
      })
      .then((res) => {
        console.log('post-detail response:', res.data);
        if (
          res.data?.status &&
          res.data.post &&
          typeof res.data.post === 'object' &&
          !Array.isArray(res.data.post)
        ) {
          setPost(res.data.post);
        } else {
          console.warn('Invalid post-detail format:', res.data);
          setError('Invalid data format received from server');
        }
      })
      .catch((err) => {
        console.error('Failed to fetch blog:', err.message);
        setError('Failed to load blog');
      });
  }, [slug]);

  // Fetch recent and related posts
  useEffect(() => {
    const token = import.meta.env.VITE_API_TOKEN;
    axios
      .get(`${import.meta.env.VITE_API_URL}post`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        console.log('post response:', res.data);
        if (res.data?.status && Array.isArray(res.data.post)) {
          // Recent posts (exclude current post, limit to 3)
          const recent = res.data.post
            .filter((p) => p.slug !== slug)
            .slice(0, 3);
          setRecentPosts(recent);

          // Related posts (same category, exclude current post, limit to 3)
          if (post.category?.name) {
            const related = res.data.post
              .filter(
                (p) =>
                  p.category?.name === post.category?.name && p.slug !== slug
              )
              .slice(0, 3);
            setRelatedPosts(related.length > 0 ? related : recent);
          } else {
            setRelatedPosts(recent);
          }
        } else {
          console.warn('Invalid post format:', res.data);
          setError('Invalid data format for related posts');
        }
      })
      .catch((err) => {
        console.error('Failed to fetch posts:', err.message);
        setError('Failed to load related posts');
      });
  }, [slug, post.category]);

  // Format date
  const formatDate = (date) => {
    return date
      ? new Date(date).toLocaleDateString('en-US', {
          month: 'long',
          day: 'numeric',
          year: 'numeric',
        })
      : new Date().toLocaleDateString('en-US', {
          month: 'long',
          day: 'numeric',
          year: 'numeric',
        });
  };

  if (error) {
    return (
      <div
        className='error-message'
        style={{ color: 'red', textAlign: 'center', padding: '20px' }}
      >
        {error}
      </div>
    );
  }

  if (!post.title && !error) {
    return (
      <div
        className='error-message'
        style={{ textAlign: 'center', padding: '20px' }}
      >
        Blog not found.
      </div>
    );
  }

  return (
    <>
      <SideNav />
      <div className='banner-container' ref={containerRef}>
        <div
          className='banner active'
          style={{ backgroundImage: `url(${post.banner || blogdetail})` }}
        >
          <div className='banner-content banner-content-blog'>
            <div className='banner-content-left'>
              <h1 className='banner-heading'>{post.title || 'Blog Title'}</h1>
              <p className='banner-para'>
                Written by {post.author_name || 'Unknown Author'}
              </p>
              <div className='header-inner-4'>
                <img src='/images/bloglistimgicon.png' alt='Date icon' />
                <span>{formatDate(post.created_at)}</span> <span>|</span>{' '}
                <span>{post.read_time || '10 hours'}</span>
              </div>
            </div>
            <div className='banner-content-righting'>
              <img
                src={post.banner || blogdetail}
                alt={post.title || 'Blog Banner'}
              />
            </div>
          </div>
        </div>
      </div>

      <section
        className='what-we-do blog_details'
        style={{ backgroundImage: `url(${white_bg})` }}
      >
        <div className='container-fluid'>
          <div className='row row_blog_details'>
            <div className='col-lg-8 col-md-12'>
              <div className='main-heading'>
                <div
                  dangerouslySetInnerHTML={{
                    __html:
                      post.description ||
                      post.short_description ||
                      'No content available.',
                  }}
                />
              </div>
            </div>
            <div className='col-lg-4 col-md-12'>
              <div className='what-we-do-blog'>
                <div className='row row_justify'>
                  <div className='col-lg-12 col-md-12'>
                    <div className='main-heading'>
                      <h2 className='heading text-center'>
                        Latest Blogs & News
                      </h2>
                    </div>
                  </div>
                </div>
                <div className='row blog_listing_row'>
                  {recentPosts.length === 0 && (
                    <div className='col-lg-12 col-md-12 col-sm-12'>
                      <p>No recent blogs available.</p>
                    </div>
                  )}
                  {recentPosts.map((recent) => (
                    <div
                      className='col-lg-12 col-md-12 col-sm-12'
                      key={recent.id}
                    >
                      <Link
                        style={{ textDecoration: 'none' }}
                        to={`/blog-detail?slug=${recent.slug}`}
                      >
                        <div className='bloglisting'>
                          <div className='bloglisting_img'>
                            <img
                              src={recent.banner || bloglistimg1}
                              alt={recent.title}
                            />
                          </div>
                          <div className='bloglistingdate'>
                            <img
                              src='/images/bloglistimgicon.png'
                              alt='Date icon'
                            />
                            <span>{formatDate(recent.created_at)}</span>
                          </div>
                          <div className='bloglistingcontent'>
                            <h3>{recent.title}</h3>
                            <p>
                              {(
                                recent.short_description ||
                                'No description available.'
                              ).substring(0, 100) + '...'}
                            </p>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='what-we-do similarblogsnews'>
        <div className='container-fluid'>
          <div className='row row_justify'>
            <div className='col-lg-12 col-md-12'>
              <div className='contact_formfaq_main'>
                <div className='main-heading'>
                  <h2 className='heading text-center'>Similar Blogs & News</h2>
                </div>
              </div>
            </div>
          </div>
          <div className='row blog_listing_row'>
            {relatedPosts.length === 0 && (
              <div className='col-lg-12 col-md-12 col-sm-12'>
                <p>No related blogs available.</p>
              </div>
            )}
            {relatedPosts.map((related) => (
              <div className='col-lg-4 col-md-6 col-sm-12' key={related.id}>
                <Link
                  style={{ textDecoration: 'none' }}
                  to={`/blog-detail?slug=${related.slug}`}
                >
                  <div className='bloglisting'>
                    <div className='bloglisting_img'>
                      <img
                        src={related.banner || bloglistimg1}
                        alt={related.title}
                      />
                    </div>
                    <div className='bloglistingdate'>
                      <img src='/images/bloglistimgicon.png' alt='Date icon' />
                      <span>{formatDate(related.created_at)}</span>
                    </div>
                    <div className='bloglistingcontent'>
                      <h3>{related.title}</h3>
                      <p>
                        {(
                          related.short_description ||
                          'No description available.'
                        ).substring(0, 100) + '...'}
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FooterBar />
    </>
  );
};

export default BlogDetail;
