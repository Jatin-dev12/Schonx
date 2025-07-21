'use client';
import { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    source: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
      source: window.location.href, // ✅ Always update source
    }));
  };

  const validate = () => {
    const newErrors = {};

    // Name: required, max 50 chars
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required.';
    } else if (formData.name.trim().length > 50) {
      newErrors.name = 'Name cannot exceed 50 characters.';
    }

    // Email: required, valid format, max 100 chars
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email.trim())) {
      newErrors.email = 'Email is invalid.';
    } else if (formData.email.trim().length > 100) {
      newErrors.email = 'Email cannot exceed 100 characters.';
    }

    // Phone: required, numeric only, length 8–15 digits
    if (!formData.phone.trim()) {
      newErrors.phone = 'Mobile number is required.';
    } else if (!/^\d+$/.test(formData.phone.trim())) {
      newErrors.phone = 'Mobile number must contain only digits.';
    } else if (
      formData.phone.trim().length < 8 ||
      formData.phone.trim().length > 15
    ) {
      newErrors.phone = 'Mobile number must be between 8 and 15 digits.';
    }

    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validate()) return;

    const token = process.env.NEXT_PUBLIC_API_TOKEN;
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}contact-us`,
        formData, // ✅ This now includes `phone` and `source` correctly
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.data && response.data.status) {
        Swal.fire({
          icon: 'success',
          title: 'Submitted!',
          text: 'Your form has been submitted successfully.',
        });

        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
          source: '',
        });
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

  return (
    <section
      className='contact_form'
      style={{ backgroundImage: `url('/images/form.jpg')` }}
    >
      <div className='container-fluid'>
        <div className='row row_justify'>
          <div className='col-lg-6 col-md-12'>
            <div className='contact_form_gsf'>
              <div className='contact_logo'>
                <img src='/images/contactlogo.png' alt='' />
              </div>
              <div className='main-heading'>
                <h2 className='heading'>
                  Ready to Start Your <span> Next Project With Schon?</span>
                </h2>
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
                      name='phone' // ✅ Must match the API field
                      value={formData.phone}
                      onChange={handleChange}
                      className='form-control'
                      placeholder='Contact No.*'
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
  );
}

export default ContactForm;
