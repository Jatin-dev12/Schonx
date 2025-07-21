import arrow from '../../assets/images/arrow.png';
import white_bg from '../../assets/images/white_bg.jpg';
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

// Placeholder images (replace with dynamic images from API if available)
const placeholderImages = [
  '../../assets/images/window1.png',
  '../../assets/images/window2.png',
  '../../assets/images/window3.png',
  '../../assets/images/window4.png',
];

function ScrollTab() {
  const containerRef = useRef(null);
  const [activeId1, setActiveId1] = useState('All Projects');
  const [projects, setProjects] = useState([]);
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState('');

  // Fetch categories on mount
  useEffect(() => {
    const token = import.meta.env.VITE_API_TOKEN;
    axios
      .get(`${import.meta.env.VITE_API_URL}category`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        if (res.data?.status && Array.isArray(res.data.category)) {
          setCategories(res.data.category);
        } else {
          setError('Invalid category data');
        }
      })
      .catch(() => setError('Failed to load categories'));
  }, []);

  // Fetch projects on mount
  useEffect(() => {
    const token = import.meta.env.VITE_API_TOKEN;
    axios
      .get(`${import.meta.env.VITE_API_URL}project`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        if (res.data?.status && Array.isArray(res.data.project)) {
          setProjects(res.data.project);
        } else {
          setError('Invalid project data');
        }
      })
      .catch(() => setError('Failed to load projects'));
  }, []);

  // Scroll and section change handler
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      let closestSection = null;
      let minOffset = Infinity;

      ['All Projects', ...categories.map((cat) => cat.name)].forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const sectionTop =
            section.getBoundingClientRect().top -
            container.getBoundingClientRect().top;
          const offset = Math.abs(sectionTop);
          if (sectionTop <= container.offsetHeight && offset < minOffset) {
            minOffset = offset;
            closestSection = id;
          }
        }
      });

      if (container.scrollTop <= 100) {
        if (activeId1 !== 'All Projects') {
          setActiveId1('All Projects');
        }
        return;
      }
      if (closestSection && closestSection !== activeId1) {
        setActiveId1(closestSection);
      }
    };

    container.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      container.removeEventListener('scroll', handleScroll);
    };
  }, [activeId1, categories]);

  // Handle category click
  const handleSectionClick = (id) => {
    setActiveId1(id);
    const section = document.getElementById(id);
    if (section && containerRef.current) {
      const container = containerRef.current;
      const sectionTop = section.offsetTop - container.offsetTop;
      container.scrollTo({ top: sectionTop, behavior: 'smooth' });
    }
  };

  // Filter projects by active category
  const filteredProjects =
    activeId1 === 'All Projects'
      ? projects
      : projects.filter((project) => project.category.name === activeId1);

  // Get category description
  const getCategoryDescription = (id) => {
    if (id === 'All Projects') {
      return 'Explore our complete range of precision-engineered aluminium and glass solutions, designed for performance and aesthetics across all categories.';
    }
    const category = categories.find((cat) => cat.name === id);
    return category?.description || 'No description available.';
  };

  if (error) {
    return <div className='error-message'>{error}</div>;
  }

  return (
    <section
      className='what-we-do'
      style={{ backgroundImage: `url(${white_bg})` }}
    >
      <div className='container-fluid'>
        <div className='row row_justify'>
          <div className='col-lg-6 col-md-12'>
            <div className='main-heading'>
              <h2 className='heading'>
                Crafted for Performance. Designed to Inspire
              </h2>
              <p className='para'>
                Our Range of Precision-Engineered Solutions
              </p>
            </div>
          </div>
          <div className='col-lg-4 col-md-12'>
            <div className='what-we-do-bt'>
              <div className='header-inner-3'>
                <a className='header-btn' href='#'>
                  Read More <img src={arrow} alt='' />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className='row-what-we-do'>
          <div className='row-what-we-do-inner-1'>
            <ul>
              <li>
                <a
                  className={activeId1 === 'All Projects' ? 'active' : ''}
                  href='#AllProjects'
                  onClick={(e) => {
                    if (window.innerWidth <= 768) e.preventDefault();
                    handleSectionClick('All Projects');
                  }}
                >
                  All Projects
                </a>
              </li>
              {categories.map((cat) => (
                <li key={cat.id}>
                  <a
                    className={activeId1 === cat.name ? 'active' : ''}
                    href={`#${cat.name}`}
                    onClick={(e) => {
                      if (window.innerWidth <= 768) e.preventDefault();
                      handleSectionClick(cat.name);
                    }}
                  >
                    {cat.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className='row-what-we-do-inner-2' ref={containerRef}>
            {/* All Projects Section */}
            <div
              id='All Projects'
              className={`row-what-we-do-inner-3 ${
                activeId1 === 'All Projects' ? 'active' : ''
              }`}
            >
              <div className='small-para'>
                <p className='small-inpara'>
                  {getCategoryDescription('All Projects')}
                </p>
              </div>
              <div className='row row-inn-img'>
                {filteredProjects.slice(0, 4).map((project, index) => (
                  <div key={project.id} className='col-lg-3 col-md-6 col-sm-12'>
                    <div className='inner-wedo'>
                      <div className='inner-wedo-img'>
                        <img
                          src={project.hero_img || placeholderImages[index % 4]}
                          alt={project.name}
                        />
                      </div>
                      <div className='inner-wedo-para'>
                        <p>{project.name}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className='row-inn-img-img row-inn-img-img-mb'>
                <Swiper
                  modules={[Navigation, Mousewheel]}
                  direction='horizontal'
                  slidesPerView={1.2}
                  spaceBetween={30}
                  mousewheel={{
                    forceToAxis: true,
                    releaseOnEdges: true,
                    sensitivity: 1,
                  }}
                  breakpoints={{
                    640: { slidesPerView: 1.2 },
                    991: { slidesPerView: 2 },
                    1366: { slidesPerView: 2 },
                    1600: { slidesPerView: 2 },
                  }}
                >
                  {filteredProjects.map((project, index) => (
                    <SwiperSlide key={project.id}>
                      <div className='inner-wedo'>
                        <div className='inner-wedo-img'>
                          <img
                            src={
                              project.hero_img || placeholderImages[index % 4]
                            }
                            alt={project.name}
                          />
                        </div>
                        <div className='inner-wedo-para'>
                          <p>{project.name}</p>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              <div className='row'>
                <div className='header-inner-3'>
                  <a className='header-btn' href='#'>
                    All Products <img src={arrow} alt='' />
                  </a>
                </div>
              </div>
            </div>
            {/* Category Sections */}
            {categories.map((cat) => (
              <div
                key={cat.id}
                id={cat.name}
                className={`row-what-we-do-inner-3 ${
                  activeId1 === cat.name ? 'active' : ''
                }`}
              >
                <div className='small-para'>
                  <p className='small-inpara'>
                    {getCategoryDescription(cat.name)}
                  </p>
                </div>
                <div className='row row-inn-img'>
                  {filteredProjects
                    .filter((project) => project.category.name === cat.name)
                    .slice(0, 4)
                    .map((project, index) => (
                      <div
                        key={project.id}
                        className='col-lg-3 col-md-6 col-sm-12'
                      >
                        <div className='inner-wedo'>
                          <div className='inner-wedo-img'>
                            <img
                              src={
                                project.hero_img || placeholderImages[index % 4]
                              }
                              alt={project.name}
                            />
                          </div>
                          <div className='inner-wedo-para'>
                            <p>{project.name}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
                <div className='row-inn-img-img row-inn-img-img-mb'>
                  <Swiper
                    modules={[Navigation, Mousewheel]}
                    direction='horizontal'
                    slidesPerView={1.2}
                    spaceBetween={30}
                    mousewheel={{
                      forceToAxis: true,
                      releaseOnEdges: true,
                      sensitivity: 1,
                    }}
                    breakpoints={{
                      640: { slidesPerView: 1.2 },
                      991: { slidesPerView: 2 },
                      1366: { slidesPerView: 2 },
                      1600: { slidesPerView: 2 },
                    }}
                  >
                    {filteredProjects
                      .filter((project) => project.category.name === cat.name)
                      .map((project, index) => (
                        <SwiperSlide key={project.id}>
                          <div className='inner-wedo'>
                            <div className='inner-wedo-img'>
                              <img
                                src={
                                  project.hero_img ||
                                  placeholderImages[index % 4]
                                }
                                alt={project.name}
                              />
                            </div>
                            <div className='inner-wedo-para'>
                              <p>{project.name}</p>
                            </div>
                          </div>
                        </SwiperSlide>
                      ))}
                  </Swiper>
                </div>
                <div className='row'>
                  <div className='header-inner-3'>
                    <a className='header-btn' href='#'>
                      All Products <img src={arrow} alt='' />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ScrollTab;
