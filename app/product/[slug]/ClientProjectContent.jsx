'use client';
import SideNav from '@/app/common/SideNav';
import ContactFormfaq from '@/app/about/ContactFormfaq';
import FooterBar from '@/app/common/FooterBar';
import TestiMonials from '@/app/common/TestiMonials';
import PopularColours from '@/app/product/PopularColours';
import ProductImageSlider from './ProductImageSlider';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Mousewheel, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import '@/app/common/css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export async function ProductDetail({ params }) {
  const { slug } = params;
  let project = null;
  let error = '';
  try {
    project = await getProject(slug);
    if (!project) error = 'Project not found';
  } catch (err) {
    error = 'Failed to load project';
  }

  let html = project?.specification || '';

  html = html.replace(/classname=/g, 'class=');

  let highlight = project?.highlight || '';

  highlight = highlight.replace(/classname=/g, 'class=');

  const images =
    project?.images && project.images.length > 0
      ? project.images
      : project?.hero_img
      ? [project.hero_img]
      : [];

  return (
    <>
      <SideNav />
      <div className='banner-container'>
        {banners.map((bg, i) => (
          <div
            key={i}
            className={`banner ${i === 0 ? 'active' : ''}`}
            style={{ backgroundImage: bg }}
          >
            <div className='banner-content'>
              <div className='banner-content-left'>
                <h1 className='banner-heading'>{project?.name || 'Project'}</h1>
                <p className='banner-para'>
                  {project?.tag_line || 'for Indian Homes'}
                </p>
                <div className='header-inner-3'>
                  <a className='header-btn' href='/contact'>
                    Get Free Consultation <img src='/images/arrow.png' alt='' />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <section
        className='what-we-do product-specifications '
        style={{ backgroundImage: `url('/images/white_bg.jpg')` }}
      >
        <div className='container-fluid'>
          <div className='row row_justify'>
            <div className='col-xl-7 col-lg-5 col-md-12'>
              <div className='product-specifications-slider'>
                <ProductImageSlider images={images} />
              </div>
            </div>
            <div className='col-xl-5 col-lg-7 col-md-12'>
              <div className='product-specifications-content'>
                <div className='row row_justify'>
                  <div className='col-lg-12 col-md-12'>
                    <div className='main-heading'>
                      <h2 className='heading'>Product Specifications </h2>
                      <p className='para'>
                        {project?.overview_content || 'Project'}
                      </p>
                      <p className='smallpara'>{project?.smallpara}</p>
                    </div>

                    <div dangerouslySetInnerHTML={{ __html: html }} />

                    {/* <div className='product-specifications-gridcont'>
                      <div className='distinctive_Features_content'>
                        <h3>Smooth Operation</h3>
                        <ul className='listing'>
                          <li>
                            Frame Corner Joint: 45° connection with corner cleat
                          </li>
                          <li>Shutter Corner Joint: 90° connection</li>
                          <li>Flush Details: Flushed along button track</li>
                        </ul>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div dangerouslySetInnerHTML={{ __html: highlight }} />

      {/* <section className='distinctive_Features distinctive_Featurespt'>
        <div className='container-fluid'>
          <div className='row row_justify'>
            <div className='col-lg-12 col-md-12'>
              <div className='main-heading'>
                <h2 className='heading text-center'>Popular Typology</h2>
              </div>
            </div>
          </div>
          <div className='row row_distinctive_Features'>
            <div className='col-lg-3 col-md-6 col-sm-12'>
              <div className='distinctive_Features_block'>
                <div className='distinctive_Features_icon distinctive_Features_popular_typology'>
                  <img src='/images/populartypologyimg1.png' alt='' />
                </div>
                <div className='distinctive_Features_content distinctive_Features_popular_typology'>
                  <h3>2 Track 3 Shutter</h3>
                </div>
              </div>
            </div>
            <div className='col-lg-3 col-md-6 col-sm-12'>
              <div className='distinctive_Features_block'>
                <div className='distinctive_Features_icon distinctive_Features_popular_typology'>
                  <img src='/images/populartypologyimg1.png' alt='' />
                </div>
                <div className='distinctive_Features_content distinctive_Features_popular_typology'>
                  <h3>2 Track 4 Shutter</h3>
                </div>
              </div>
            </div>
            <div className='col-lg-3 col-md-6 col-sm-12'>
              <div className='distinctive_Features_block'>
                <div className='distinctive_Features_icon distinctive_Features_popular_typology'>
                  <img src='/images/populartypologyimg1.png' alt='' />
                </div>
                <div className='distinctive_Features_content distinctive_Features_popular_typology'>
                  <h3>3 Track 3 Shutter</h3>
                </div>
              </div>
            </div>
            <div className='col-lg-3 col-md-6 col-sm-12'>
              <div className='distinctive_Features_block'>
                <div className='distinctive_Features_icon distinctive_Features_popular_typology'>
                  <img src='/images/populartypologyimg1.png' alt='' />
                </div>
                <div className='distinctive_Features_content distinctive_Features_popular_typology'>
                  <h3>23Track 6Shutter</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section
        className='cuttingedge-page cuttingedge-page-we-offer'
        style={{ backgroundImage: `url('/images/OurJourneybg.jpg')` }}
      >
        <div className='container-fluid'>
          <div className='row row_justify'>
            <div className='col-lg-12 col-md-12'>
              <div className='main-heading'>
                <h2 className='heading text-center'>We Offer</h2>
              </div>
            </div>
          </div>
          <div className='row row_cuttingedge-page-we-offer'>
            <div className='col-xl-3 col-lg-4 col-md-12'>
              <div className='our_solutions_block'>
                <div className='why_chose_schon_icon'>
                  <img src='/images/populartypologyicon1.png' alt='' />
                </div>
                <div className='why_chose_schon_head'>
                  <h3>Enhanced Security </h3>
                </div>
                <div className='why_chose_schon_para'>
                  <p>
                    Our windows offer unparalleled ease of use with a glide that
                    feels effortless, featuring innovative sliding mechanisms.
                  </p>
                </div>
              </div>
            </div>

            <div className='col-xl-3 col-lg-4 col-md-12'>
              <div className='our_solutions_block'>
                <div className='why_chose_schon_icon'>
                  <img src='/images/populartypologyicon2.png' alt='' />
                </div>
                <div className='why_chose_schon_head'>
                  <h3>Seamless Operation </h3>
                </div>
                <div className='why_chose_schon_para'>
                  <p>
                    Our windows offer unparalleled ease of use with a glide that
                    feels effortless, featuring innovative sliding mechanisms.
                  </p>
                </div>
              </div>
            </div>

            <div className='col-xl-3 col-lg-4 col-md-12'>
              <div className='our_solutions_block'>
                <div className='why_chose_schon_icon'>
                  <img src='/images/populartypologyicon3.png' alt='' />
                </div>
                <div className='why_chose_schon_head'>
                  <h3>Peaceful Indoors</h3>
                </div>
                <div className='why_chose_schon_para'>
                  <p>
                    Tailor your experience with our single or double track
                    options, providing flexibility to fit any design aesthetic.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PopularColours />
      <ContactFormfaq />
      <TestiMonials />
      <FooterBar />
      {error && (
        <div style={{ color: 'red', textAlign: 'center' }}>{error}</div>
      )}
    </>
  );
}
