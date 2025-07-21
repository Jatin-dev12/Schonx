'use client';

import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Marquee component
function Marquee({ logos, direction = 'ltr' }) {
  const [duplicatedContent, setDuplicatedContent] = useState([]);

  useEffect(() => {
    const copies = [];
    for (let i = 0; i < 50; i++) {
      copies.push(
        <React.Fragment key={i}>
          {logos.map((logo, idx) => (
            <span className='marquee-text' key={`${i}-${idx}`}>
              <img src={logo} alt={`client logo ${idx + 1}`} />
            </span>
          ))}
        </React.Fragment>
      );
    }
    setDuplicatedContent(copies);
  }, [logos]);

  return (
    <div
      className={`marquee-content ${
        direction === 'rtl' ? 'marquee-rtl' : 'marquee-ltr'
      }`}
    >
      {duplicatedContent}
    </div>
  );
}

// ClientLogo component
function ClientLogo() {
  const [client, setClients] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const token = process.env.NEXT_PUBLIC_API_TOKEN;
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;

    axios
      .get(`${apiUrl}client`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.data && Array.isArray(res.data.client)) {
          setClients(res.data.client);
        } else {
          setError('Invalid data format received from server');
        }
      })
      .catch((err) => {
        console.error('Failed to fetch clients:', err);
        setError('Failed to load clients');
      });
  }, []);

  return (
    <section
      className='Client_list'
      style={{ backgroundImage: `url('/images/clientlogobg.png')` }}
    >
      <div className='container-fluid'>
        <div className='row row_justify'>
          <div className='col-lg-12 col-md-12'>
            <div className='main-heading'>
              <h2 className='heading'>Our Trusted Partners</h2>
              <p className='para'>Quality is always a Priority</p>
            </div>
          </div>
          {/* <div className='col-lg-4 col-md-12'>
            <div className='what-we-do-bt'>
              <div className='header-inner-3'>
                <a className='header-btn' href='#'>
                  Read More <img src='/images/arrow.png' alt='arrow' />
                </a>
              </div>
            </div>
          </div> */}
        </div>

        <div className='marquee-container'>
          {client.length > 0 && (
            <>
              <Marquee
                logos={client.map((item) => item.image)}
                direction='ltr'
              />
              <Marquee
                logos={client.map((item) => item.image)}
                direction='rtl'
              />
            </>
          )}
          {error && <p className='text-danger'>{error}</p>}
        </div>
      </div>
    </section>
  );
}

export default ClientLogo;
