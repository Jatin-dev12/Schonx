'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import axios from 'axios';
import Swal from 'sweetalert2';

const SideNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showWhyDropdown, setShowWhyDropdown] = useState(false);
  const [showProductDropdown, setShowProductDropdown] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [activeTab, setActiveTab] = useState('home');

  const [projects, setProjects] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const token = process.env.NEXT_PUBLIC_API_TOKEN;
      const apiUrl = process.env.NEXT_PUBLIC_API_URL;
      const res = await axios.get(`${apiUrl}nav_project`);
      const allProjects = res.data.project;

      setProjects(allProjects);

      // Unique categories from projects
      const uniqueCats = [
        ...new Set(allProjects.map((p) => p.category?.name).filter(Boolean)),
      ];
      setCategories(uniqueCats);

      // Default active tab
      if (uniqueCats.length > 0) {
        setActiveTab(uniqueCats[0]);
      }
    }

    fetchData();
  }, []);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 991);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const openNav = () => setIsOpen(true);
  const closeNav = () => setIsOpen(false);
  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const toggleWhyDropdown = () => {
    setShowWhyDropdown(!showWhyDropdown);
    setShowProductDropdown(false);
  };

  const toggleProductDropdown = () => {
    setShowProductDropdown(!showProductDropdown);
    setShowWhyDropdown(false);
  };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    source: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
      source: window.location.href,
    }));
  };

  const validate = () => {
    const newErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    } else if (formData.name.length > 50) {
      newErrors.name = 'Name must be less than 50 characters';
    } else if (!/^[a-zA-Z\s]+$/.test(formData.name)) {
      newErrors.name = 'Name can only contain letters and spaces';
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (formData.email.length > 100) {
      newErrors.email = 'Email must be less than 100 characters';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    // Mobile validation
    if (!formData.phone.trim()) {
      newErrors.phone = 'Mobile number is required';
    } else if (!/^\d+$/.test(formData.phone)) {
      newErrors.phone = 'Mobile number can only contain digits';
    } else if (formData.phone.length !== 10) {
      newErrors.phone = 'Mobile number must be exactly 10 digits';
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validate()) return;
    const token = process.env.NEXT_PUBLIC_API_TOKEN;
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}contact-us`,
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

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sidenavStyle = {
    height: '100%',
    width: isOpen ? '90%' : '0',
    position: 'fixed',
    zIndex: 10,
    top: 0,
    left: 0,
    backgroundColor: '#111',
    overflowX: 'hidden',
    transition: '0.5s',
    paddingTop: '10px',
    textAlign: 'center',
  };

  const closeBtnStyle = {
    position: 'absolute',
    top: '10px',
    right: '25px',
    fontSize: '36px',
  };
  function slugify(text) {
    return text
      .toString()
      .toLowerCase()
      .trim()
      .replace(/[\s\W-]+/g, '-') // Replace spaces & non-word chars with hyphen
      .replace(/^-+|-+$/g, ''); // Remove leading/trailing hyphens
  }

  return (
    <>
      {/* Side Nav */}
      <div className='sidenav' style={sidenavStyle}>
        <a href='/' className='nav-logo'>
          <img src='/images/logo.png' alt='Logo' />
        </a>
        <a
          href='#'
          className='cross-btn'
          style={closeBtnStyle}
          onClick={closeNav}
        >
          <img src='/images/cross.png' alt='Close' />
        </a>

        <div className='siding-nav-link'>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li>
              <Link href='/' className='nav-bt'>
                Home
              </Link>
            </li>

            {/* Why Schon Dropdown */}
            <li
              onMouseEnter={() => !isMobile && setShowWhyDropdown(true)}
              onMouseLeave={() => !isMobile && setShowWhyDropdown(false)}
            >
              <div
                className='nav-bt dropdown-toggle'
                onClick={() => isMobile && toggleWhyDropdown()}
                style={{
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <Link className='nav-bt' href='/schon-care'>
                  Why Schon
                </Link>{' '}
                <img
                  className='arrow-down'
                  src='/images/arrow-down.png'
                  alt=''
                />
              </div>
              {showWhyDropdown && (
                <ul
                  className='dropdown-menu-links'
                  style={{ padding: '10px 0', listStyle: 'none' }}
                >
                  <li>
                    <Link href='/about' className='dropdown-item'>
                      <img src='/images/chevron.png' alt='' /> About us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/one-stop-housing-solutions'
                      className='dropdown-item'
                    >
                      <img src='/images/chevron.png' alt='' /> One-stop Housing
                      Solutions
                    </Link>
                  </li>
                  <li>
                    <Link href='/quality-assurance' className='dropdown-item'>
                      <img src='/images/chevron.png' alt='' /> Quality Assurance
                    </Link>
                  </li>
                  <li>
                    <Link href='/sustainability' className='dropdown-item'>
                      <img src='/images/chevron.png' alt='' /> Sustainability
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            {/* Product Dropdown */}
            <li
              onMouseEnter={() => !isMobile && setShowProductDropdown(true)}
              onMouseLeave={() => !isMobile && setShowProductDropdown(false)}
            >
              <div
                className='nav-bt dropdown-toggle'
                onClick={() => isMobile && toggleProductDropdown()}
                style={{
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <Link className='nav-bt' href='/product'>
                  Product
                </Link>
                <img
                  className='arrow-down'
                  src='/images/arrow-down.png'
                  alt=''
                />
              </div>
              {showProductDropdown && (
                <div
                  className='dropdown-menu-links dropdown-menu-linksiafg'
                  style={{ padding: '10px 0', listStyle: 'none' }}
                >
                  <ul className='adseaa'>
                    {categories.map((cat) => {
                      const slug = slugify(cat);

                      return (
                        <li
                          key={cat}
                          className={activeTab === cat ? 'active' : ''}
                        >
                          <Link
                            onMouseEnter={() => setActiveTab(cat)}
                            onClick={closeNav}
                            className='dropdown-item'
                            style={{ cursor: 'pointer' }}
                            href={`/product?slug=${slug}`}
                          >
                            {cat}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>

                  <div className='tab-content'>
                    {categories.map(
                      (cat) =>
                        activeTab === cat && (
                          <div className='tab-pane active' key={cat}>
                            <ul>
                              {projects
                                .filter((proj) => proj.category?.name === cat)
                                .map((proj) => (
                                  <li key={proj.id}>
                                    <Link
                                      href={`/product/${proj.slug}`}
                                      className='nav-bt'
                                    >
                                      {proj.name}
                                    </Link>
                                  </li>
                                ))}
                            </ul>
                          </div>
                        )
                    )}
                  </div>
                </div>
              )}
            </li>

            <li>
              <Link href='/projects' className='nav-bt'>
                Projects
              </Link>
            </li>
            <li>
              <Link href='/blog' className='nav-bt'>
                Blog
              </Link>
            </li>
            <li>
              <Link href='/contact' className='nav-bt'>
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className='header-social-btn'>
          <a className='header-btn' onClick={openModal}>
            Get in Touch <img src='/images/arrow.png' alt='arrow' />
          </a>
          <a className='header-btn white-bg' href='/contact'>
            Become a Dealer <img src='/images/arrow.png' alt='arrow' />
          </a>
        </div>
      </div>

      {/* Header Topbar */}
      <div className={`header-inner ${scrolled ? 'scrollingbar' : ''}`}>
        <div className='header-inner-1'>
          <span style={{ cursor: 'pointer' }} onClick={openNav}>
            <img src='/images/side.png' alt='menu' />
          </span>
        </div>
        <div className='header-inner-2'>
          <a href='/'>
            <img src='/images/logo.png' alt='logo' />
          </a>
        </div>
        <div className='header-inner-3'>
          <button className='header-btn' onClick={openModal}>
            Get in Touch <img src='/images/arrow.png' alt='arrow' />
          </button>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div
          className='modal fade show d-block'
          tabIndex='-1'
          role='dialog'
          style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
        >
          <div className='modal-dialog modal-dialog-centered' role='document'>
            <div className='modal-content'>
              <div className='modal-header'>
                <h4 className='what-we-do-btform_heading'>
                  We’re just a step away!
                </h4>
                <button type='button' className='close' onClick={closeModal}>
                  <span className='text-dark'>&times;</span>
                </button>
              </div>
              <div className='modal-body'>
                <div className='what-we-do-btform'>
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
                          <small className='text-danger'>
                            {errors.message}
                          </small>
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
        </div>
      )}
    </>
  );
};

export default SideNav;
