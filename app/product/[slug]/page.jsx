import axios from 'axios';
import '@/app/common/css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SideNav from '@/app/common/SideNav';
import ContactFormfaq from '@/app/about/ContactFormfaq';
import FooterBar from '@/app/common/FooterBar';
import TestiMonials from '@/app/common/TestiMonials';
import PopularColours from '@/app/product/PopularColours';
import ProductImageSlider from './ProductImageSlider';

const banners = [
  'url(/images/aboutpagebanner.jpg)',
  'url(/images/aboutpagebanner.jpg)',
];

const cols = 12;
const rows = 10;
const duration = 7000;

export async function generateStaticParams() {
  const token = process.env.NEXT_PUBLIC_API_TOKEN;
  const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}project`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  const projects = res.data?.project || [];
  return projects.map((proj) => ({ slug: proj.slug }));
}

async function getProject(slug) {
  const token = process.env.NEXT_PUBLIC_API_TOKEN;
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}single-project`,
    {
      headers: { Authorization: `Bearer ${token}` },
      params: { slug },
    }
  );
  return res.data?.project || null;
}

export default async function ProductDetail({ params }) {
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
          <div className='row'>
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

                    {/* <div dangerouslySetInnerHTML={{ __html: html }} /> */}

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

      <div dangerouslySetInnerHTML={{ __html: html }} />

      <div dangerouslySetInnerHTML={{ __html: highlight }} />

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
