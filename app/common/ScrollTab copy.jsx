import { useEffect, useRef, useState } from 'react';
import axios from 'axios';

import arrow from '../../assets/images/arrow.png';
import window1 from '../../assets/images/window1.png';
import window2 from '../../assets/images/window2.png';
import window3 from '../../assets/images/window3.png';
import window4 from '../../assets/images/window4.png';
import white_bg from '../../assets/images/white_bg.jpg';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Mousewheel } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import { Link } from 'react-router-dom';

function ScrollTab() {
  const containerRef = useRef(null);
  const [categories, setCategories] = useState([]);
  const [allProjects, setAllProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeId1, setActiveId1] = useState('Windows');
  const [overviewContent, setOverviewContent] = useState('');

  const token = import.meta.env.VITE_API_TOKEN;
  const baseURL = import.meta.env.VITE_API_URL;
  console.log(baseURL);

  // Fetch categories
  useEffect(() => {
    axios
      .get(`${baseURL}category`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        const cats = res.data?.category || [];
        setCategories(cats);
      })
      .catch((err) => {
        console.error('Category fetch failed', err);
      });
  }, []);

  // Fetch all projects initially
  useEffect(() => {
    axios
      .get(`${baseURL}project`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        const projs = res.data?.project || [];
        setAllProjects(projs);
        setFilteredProjects(projs); // show all by default
        setOverviewContent(projs[0]?.overview_content || '');
      })
      .catch((err) => {
        console.error('Project fetch failed', err);
      });
  }, []);

  const handleCategoryClick = (catId) => {
    setActiveCategory(catId);
    setActiveId1(catId ? `cat-${catId}` : 'All');

    if (!catId) {
      setFilteredProjects(allProjects);
      setOverviewContent(allProjects[0]?.overview_content || '');
    } else {
      const filtered = allProjects.filter(
        (proj) =>
          proj.category?.id === catId ||
          proj.category?.name === categories.find((c) => c.id === catId)?.name
      );
      setFilteredProjects(filtered);
      setOverviewContent(filtered[0]?.overview_content || '');
    }
  };

  useEffect(() => {
    setActiveId1('Windows');
  }, []);

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
                  Read More <img src={arrow} alt='' />{' '}
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
                  href='#'
                  className={activeCategory === null ? 'active' : ''}
                  onClick={(e) => {
                    e.preventDefault();
                    handleCategoryClick(null); // Show all
                  }}
                >
                  All
                </a>
              </li>
              {categories.map((cat) => (
                <li key={cat.id}>
                  <a
                    href='#'
                    className={activeCategory === cat.id ? 'active' : ''}
                    onClick={(e) => {
                      e.preventDefault();
                      handleCategoryClick(cat.id);
                    }}
                  >
                    {cat.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className='row-what-we-do-inner-2' ref={containerRef}>
            <div id={activeId1} className='row-what-we-do-inner-3 active'>
              <div className='small-para'>
                <p className='small-inpara'>{overviewContent}</p>
              </div>

              <div className='row row-inn-img'>
                {filteredProjects.length > 0 ? (
                  filteredProjects.map((proj, i) => (
                    <div
                      className='col-lg-3 col-md-6 col-sm-12'
                      key={proj.id || i}
                    >
                      <a
                        style={{ textDecoration: 'none' }}
                        href={`/products-detail?slug=${proj.slug}`}
                      >
                        <div className='inner-wedo'>
                          <div className='inner-wedo-img'>
                            <img src={proj.hero_img} alt={proj.name} />
                          </div>
                          <div className='inner-wedo-para'>
                            <p>{proj.name}</p>
                          </div>
                        </div>
                      </a>
                    </div>
                  ))
                ) : (
                  <p className='text-center'>
                    No projects found for this category.
                  </p>
                )}
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
                  {[window1, window2, window3, window4].map((img, i) => (
                    <SwiperSlide key={i}>
                      <div className='inner-wedo'>
                        <div className='inner-wedo-img'>
                          <img src={img} alt='' />
                        </div>
                        <div className='inner-wedo-para'>
                          <p>{`Sample Product ${i + 1}`}</p>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              <div className='row'>
                <div className='header-inner-3'>
                  <Link className='header-btn' to='/products'>
                    All Products <img src={arrow} alt='' />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ScrollTab;
