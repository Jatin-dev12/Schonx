import axios from 'axios';
import '@/app/common/css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SideNav from '@/app/common/SideNav';
import FooterBar from '@/app/common/FooterBar';

const banners = [
  'url(/images/aboutpagebanner.jpg)',
  'url(/images/aboutpagebanner.jpg)',
];

export async function generateStaticParams() {
  const token = process.env.NEXT_PUBLIC_API_TOKEN;
  const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}post`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  const posts = res.data?.post || [];
  return posts.map((p) => ({ slug: p.slug }));
}

async function getPost(slug) {
  const token = process.env.NEXT_PUBLIC_API_TOKEN;
  const res = await axios.post(
    `${process.env.NEXT_PUBLIC_API_URL}post-detail/${slug}`,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  return res.data?.post || null;
}

export default async function BlogDetail({ params }) {
  const { slug } = params;
  let post = null;
  let error = '';

  try {
    post = await getPost(slug);
    if (!post) error = 'Blog not found';
  } catch (err) {
    console.error(err);
    error = 'Failed to load blog';
  }

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
                <h1 className='banner-heading'>
                  {post?.title || 'Blog Title'}
                </h1>
                <p className='banner-para'>
                  {post?.short_description
                    ? post.short_description.length > 100
                      ? `${post.short_description.substring(0, 100)}...`
                      : post.short_description
                    : ''}
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
        className='what-we-do product-specifications'
        style={{ backgroundImage: `url('/images/white_bg.jpg')` }}
      >
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <h2>{post?.name || 'Blog'}</h2>
              <p>{post?.short_description || 'No description available.'}</p>

              {post?.banner && (
                <img
                  src={post.banner}
                  alt={post.title}
                  style={{ maxWidth: '100%', marginTop: '20px' }}
                />
              )}
              {post?.description ? (
                <div dangerouslySetInnerHTML={{ __html: post.description }} />
              ) : (
                <p>No content available.</p>
              )}
            </div>
          </div>
        </div>
      </section>

      <FooterBar />

      {error && (
        <div style={{ color: 'red', textAlign: 'center', padding: '20px' }}>
          {error}
        </div>
      )}
    </>
  );
}
