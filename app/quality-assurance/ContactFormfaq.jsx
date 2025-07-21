'use client'
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';

const faqs = [
  {
    title: 'Can I Expect Ultimate Privacy?',
    content:
      'Lorem ipsum dolor sit amet consectetur. Venenatis erat faucibus tristique at. Morbi purus vel sed eu mattis ornare dis sagittis morbi.',
  },
  {
    title: 'voluptate velit esse cillum dolore eu fugiat?',
    content:
      'Lorem ipsum dolor sit amet consectetur. Venenatis erat faucibus tristique at. Morbi purus vel sed eu mattis ornare dis sagittis morbi.',
  },
  {
    title: 'Can I Expect Ultimate Privacy?',
    content:
      'Lorem ipsum dolor sit amet consectetur. Venenatis erat faucibus tristique at. Morbi purus vel sed eu mattis ornare dis sagittis morbi.',
  },
  {
    title: 'voluptate velit esse cillum dolore eu fugiat?',
    content:
      'Lorem ipsum dolor sit amet consectetur. Venenatis erat faucibus tristique at. Morbi purus vel sed eu mattis ornare dis sagittis morbi.',
  },
  {
    title: 'Can I Expect Ultimate Privacy?',
    content:
      'Lorem ipsum dolor sit amet consectetur. Venenatis erat faucibus tristique at. Morbi purus vel sed eu mattis ornare dis sagittis morbi.',
  },
];
function ContactFormfaq() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.mobile.trim()) {
      newErrors.mobile = 'Mobile number is required';
    } else if (formData.mobile.length < 10) {
      newErrors.mobile = 'Mobile number must be at least 10 digits';
    }

    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validate()) return;

    const token = import.meta.env.VITE_API_TOKEN;
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}contact-us`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.data) {
        Swal.fire({
          icon: 'success',
          title: 'Submitted!',
          text: 'Your form has been submitted successfully.',
        });

        setFormData({ name: '', email: '', mobile: '', message: '' });
        setErrors({});
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Unexpected Error',
          text: 'Something went wrong. Please try again.',
        });
      }
    } catch (err) {
      console.error(err);
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
    <>
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
                  {faqs.map((faq, index) => (
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
                        <span className='card-link'>{faq.title}</span>
                      </div>
                      {activeIndex === index && (
                        <div className='card-body'>{faq.content}</div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
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
                        name='mobile'
                        value={formData.mobile}
                        onChange={handleChange}
                        className='form-control'
                        placeholder='Contact No.*'
                      />
                      {errors.mobile && (
                        <small className='text-danger'>{errors.mobile}</small>
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
                        Get in Touch <img src='/images/arrow.png' alt='' />
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactFormfaq;
