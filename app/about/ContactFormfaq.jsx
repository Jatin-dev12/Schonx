'use client';
import React, { useState, useEffect, Suspense } from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';
import { usePathname, useSearchParams } from 'next/navigation';

// Default FAQs
const defaultFaqs = [
  {
    question: 'Where are your Experience Centres located?',
    answer: 'We are present in Bangalore, Chennai, and Hyderabad.',
  },
  {
    question: 'Do I need an appointment to visit?',
    answer:
      'Walk-ins are welcome, but we recommend booking a consultation for a personalised experience.',
  },
  {
    question: 'Do you take up small residential projects?',
    answer:
      'Yes. Whether it’s a villa, apartment, or a single room, we tailor every project with the same attention to detail.',
  },
  {
    question: 'Can I speak directly to a product expert?',
    answer:
      'Absolutely. Our team is available via phone, email, or in-person meetings at your convenience.',
  },
];

function ContactFormfaq() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [faqs, setFaqs] = useState(defaultFaqs);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    source: '',
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const pathParts = pathname.split('/').filter(Boolean);
  const slugParam = searchParams?.get('slug') || '';
  const slug = slugParam || pathParts[pathParts.length - 1] || '';

  useEffect(() => {
    const fetchFaqs = async () => {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL;
      const token = process.env.NEXT_PUBLIC_API_TOKEN;

      if (!apiUrl || !token) {
        setError('Configuration error: API URL or token missing');
        setFaqs(defaultFaqs);
        setLoading(false);
        return;
      }

      const knownStaticPages = ['product', 'products', 'projects', 'contact'];
      const isStaticPage = knownStaticPages.includes(slug.toLowerCase());

      try {
        if (isStaticPage) {
          // Fetch from /api/faqs for static pages
          const res = await axios.get(`${apiUrl}faqs`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          const pageFaq = res.data?.data?.find(
            (page) =>
              page.page?.name?.toLowerCase().replace(/\s/g, '-') ===
              slug.toLowerCase()
          );

          if (pageFaq?.faqs_data?.length > 0) {
            setFaqs(pageFaq.faqs_data);
            setError(null);
          } else {
            setFaqs(defaultFaqs);
            // setError(`No FAQs found for static page: ${slug}`);
          }
        } else {
          // Fetch from /project?slug=... for dynamic pages
          const response = await axios.get(`${apiUrl}project?slug=${slug}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
            timeout: 10000,
          });

          if (response.data?.status && Array.isArray(response.data.project)) {
            const projectWithFaqs = response.data.project.find((project) =>
              project?.faqs?.faqs?.some((faq) => faq.question && faq.answer)
            );

            if (projectWithFaqs?.faqs?.faqs?.length > 0) {
              setFaqs(projectWithFaqs.faqs.faqs);
              setError(null);
            } else {
              setFaqs(defaultFaqs);
              // setError(`No FAQs found for project: ${slug}`);
            }
          } else {
            setFaqs(defaultFaqs);
            setError('Invalid response from project API');
          }
        }
      } catch (err) {
        console.error('FAQ Fetch Error:', err);
        setFaqs(defaultFaqs);
        setError('Something went wrong while fetching FAQs.');
      } finally {
        setLoading(false);
      }
    };

    fetchFaqs();
  }, [slug, searchParams]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
      source: window.location.href,
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required.';
    else if (formData.name.length > 50) newErrors.name = 'Max 50 characters.';

    if (!formData.email.trim()) newErrors.email = 'Email is required.';
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = 'Email is invalid.';
    else if (formData.email.length > 100)
      newErrors.email = 'Max 100 characters.';

    if (!formData.phone.trim()) newErrors.phone = 'Mobile number is required.';
    else if (!/^\d+$/.test(formData.phone))
      newErrors.phone = 'Only digits allowed.';
    else if (formData.phone.length < 8 || formData.phone.length > 15)
      newErrors.phone = '8–15 digits required.';

    if (!formData.message.trim()) newErrors.message = 'Message is required.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validate()) return;

    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    const token = process.env.NEXT_PUBLIC_API_TOKEN;

    if (!apiUrl || !token) {
      Swal.fire({
        icon: 'error',
        title: 'Configuration Error',
        text: 'API URL or token is missing.',
      });
      return;
    }

    try {
      const response = await axios.post(`${apiUrl}contact-us`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.data) {
        Swal.fire({
          icon: 'success',
          title: 'Submitted!',
          text: 'Your form has been submitted successfully.',
        });
        setFormData({ name: '', email: '', phone: '', message: '' });
        setErrors({});
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Unexpected Error',
          text: 'Something went wrong. Please try again.',
        });
      }
    } catch (err) {
      console.error('Form submission error:', err);
      Swal.fire({
        icon: 'error',
        title: 'Failed!',
        text: 'Failed to submit form. Please try again later.',
      });
    }
  };

  const toggleAccordion = (index) => {
    setActiveIndex((prev) => (prev === index ? -1 : index));
  };

  return (
    <section
      className='contact_form'
      style={{ backgroundImage: `url('/images/form.jpg')` }}
    >
      <div className='container-fluid'>
        <div className='row row_justify'>
          <div className='col-lg-6 col-md-12'>
            <div className='contact_formfaq_main'>
              <div className='main-heading'>
                <h2 className='heading'>Frequently Asked Questions</h2>
              </div>
              <div className='contact_formfaq'>
                {loading ? (
                  <p>Loading FAQs...</p>
                ) : faqs.length > 0 ? (
                  faqs.map((faq, index) => (
                    <div
                      className={`card ${
                        activeIndex === index ? 'active' : ''
                      }`}
                      key={index}
                    >
                      <div
                        className='card-header'
                        onClick={() => toggleAccordion(index)}
                        style={{ cursor: 'pointer' }}
                      >
                        <span className='card-link'>{faq.question}</span>
                      </div>
                      {activeIndex === index && (
                        <div className='card-body'>{faq.answer}</div>
                      )}
                    </div>
                  ))
                ) : (
                  <p>No FAQs available.</p>
                )}
                {error && <p className='text-danger'>{error}</p>}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className='col-lg-6 col-md-12'>
            <div className='what-we-do-btform'>
              <h4 className='what-we-do-btform_heading'>
                We’re just a step away!
              </h4>
              <form onSubmit={(e) => e.preventDefault()}>
                <div className='form-row'>
                  <div className='form-group col-md-12'>
                    <input
                      type='text'
                      name='name'
                      value={formData.name}
                      onChange={handleChange}
                      className='form-control'
                      placeholder='Full Name*'
                    />
                    {errors.name && (
                      <small className='text-danger'>{errors.name}</small>
                    )}
                  </div>
                  <div className='form-group col-md-12'>
                    <input
                      type='email'
                      name='email'
                      value={formData.email}
                      onChange={handleChange}
                      className='form-control'
                      placeholder='Email Address*'
                    />
                    {errors.email && (
                      <small className='text-danger'>{errors.email}</small>
                    )}
                  </div>
                  <div className='form-group col-md-12'>
                    <input
                      type='number'
                      name='phone'
                      value={formData.phone}
                      onChange={handleChange}
                      className='form-control'
                      placeholder='Contact No.*'
                      onWheel={(e) => e.target.blur()}
                    />
                    {errors.phone && (
                      <small className='text-danger'>{errors.phone}</small>
                    )}
                  </div>
                  <div className='form-group col-md-12'>
                    <textarea
                      name='message'
                      value={formData.message}
                      onChange={handleChange}
                      className='form-control'
                      placeholder='Message'
                    ></textarea>
                    {errors.message && (
                      <small className='text-danger'>{errors.message}</small>
                    )}
                  </div>
                  <div className='form-group col-md-6'>
                    <button
                      className='btn btn-outline-secondary'
                      type='button'
                      onClick={handleSubmit}
                    >
                      Get in Touch <img src='/images/arrow.png' alt='Arrow' />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ProductListWithSuspense() {
  return (
    <Suspense fallback={<div>Loading products...</div>}>
      <ContactFormfaq />
    </Suspense>
  );
}
