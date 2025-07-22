'use client';
import React, { useEffect, useRef, useState } from 'react';

const banners = [
  'url(/images/projectbanner.png)',
  'url(/images/projectbanner.png)',
];

const cols = 12;
const rows = 10;
const duration = 7000;

const HomeBanner = () => {
  const containerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const isAnimatingRef = useRef(false);

  const createCubes = (imageUrl) => {
    const container = containerRef.current;
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
    if (isAnimatingRef.current) return;
    isAnimatingRef.current = true;

    const container = containerRef.current;
    const bannerEls = container.querySelectorAll('.banner');

    const currentBanner = bannerEls[currentIndex];
    const nextIndex = (currentIndex + 1) % banners.length;
    const nextBanner = bannerEls[nextIndex];

    nextBanner.style.zIndex = 0;
    nextBanner.style.opacity = 1;
    nextBanner.classList.add('active');

    const cubes = createCubes(banners[currentIndex]);

    currentBanner.style.opacity = 0;

    setTimeout(() => {
      cubes.forEach((cube) => cube.remove());
      currentBanner.classList.remove('active');
      currentBanner.style.opacity = 0;
      setCurrentIndex(nextIndex);
      isAnimatingRef.current = false;
    }, (cols + rows) * 70 + 1300);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      animateTransition();
    }, duration);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className='banner-container banner-container_project' ref={containerRef}>
      {/* Static banners */}
      <div
        className='banner active'
        style={{ backgroundImage: `url('/images/projectbanner.png')` }}
      >
        <div className='banner-content'>
          <div className='banner-content-left'>
            <h1 className='banner-heading'>Our Projects</h1>
            <p className='banner-para'>
              Doors, Windows, Railings & Luxury Glass — Engineered for Inspired
              Living
            </p>
            <div className='header-inner-3'>
              <a className='header-btn' href='#'>
                {' '}
                Get Free Consultation <img
                  src='/images/arrow.png'
                  alt=''
                />{' '}
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        className='banner'
        style={{ backgroundImage: `url('/images/projectbanner.png')` }}
      >
        <div className='banner-content'>
          <div className='banner-content-left'>
            <h1 className='banner-heading'>Our Projects</h1>
            <p className='banner-para'>
              Doors, Windows, Railings & Luxury Glass — Engineered for Inspired
              Living
            </p>
            <div className='header-inner-3'>
              <a className='header-btn' href='#'>
                {' '}
                Get Free Consultation <img
                  src='/images/arrow.jpg'
                  alt=''
                />{' '}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
