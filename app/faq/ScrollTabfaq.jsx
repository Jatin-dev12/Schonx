'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

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
    title: 'voluptate velit esse cillum dolore eu fugiat?',
    content:
      'Lorem ipsum dolor sit amet consectetur. Venenatis erat faucibus tristique at. Morbi purus vel sed eu mattis ornare dis sagittis morbi.',
  },
  // ... (repeated for demo)
];

function ScrollTabfaq() {
  const sectionIds = ['Windows', 'Doors', 'Railings', 'Glass', 'Cubicles'];
  const [activeId1, setActiveId1] = useState('Windows');
  const [activeIndex, setActiveIndex] = useState(-1);

  const toggleAccordion = (index) => {
    setActiveIndex((prev) => (prev === index ? -1 : index));
  };

  const handleSectionClick = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveId1(id);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      let closestSection = null;
      let minOffset = Infinity;

      sectionIds.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          const offset = Math.abs(rect.top - 100);
          if (rect.top < window.innerHeight && offset < minOffset) {
            minOffset = offset;
            closestSection = id;
          }
        }
      });

      if (closestSection && closestSection !== activeId1) {
        setActiveId1(closestSection);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeId1]);

  const renderFaqSection = (id) => (
    <div
      id={id}
      className={`row-what-we-do-inner-3 ${activeId1 === id ? 'active' : ''}`}
    >
      <div className='signlefaqlink'>
        {[
          'Ultra-Slim Sliding Windows',
          'Bi-Fold Windows',
          'Casement Windows',
          'Curtain Wall Windows',
        ].map((item, idx) => (
          <div className='signlefaqlinkinner' key={idx}>
            <Link href='#'>{item}</Link>
          </div>
        ))}
      </div>
      <div className='signlefaqpage contact_formfaq'>
        {faqs.map((faq, index) => (
          <div
            className={`card ${activeIndex === index ? 'active' : ''}`}
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
  );

  return (
    <section
      className='what-we-do what-we-do-faqs'
      style={{ backgroundImage: `url('/images/white_bg.jpg')` }}
    >
      <div className='container-fluid'>
        <div className='row row_justify'>
          <div className='col-lg-12 col-md-12'>
            <div className='main-heading'>
              <h2 className='heading'>Frequently Asked Questions</h2>
              <p className='para'>
                Welcome to Schon — where your quest for luxury and practicality
                in home living finds its answer.
              </p>
            </div>
          </div>

          <div className='col-lg-8 col-md-12'>
            <div className='faqsearch'>
              <form action='/action_page.php'>
                <input
                  type='text'
                  placeholder='Search by Functionality'
                  name='search'
                />
                <button type='submit'>Submit</button>
              </form>
            </div>
          </div>
        </div>

        <div className='row-what-we-do'>
          <div className='row-what-we-do-inner-1'>
            <ul>
              {sectionIds.slice(0, 4).map((id, idx) => (
                <li key={id}>
                  <a
                    className={activeId1 === id ? 'active' : ''}
                    href={`#${id}`}
                    onClick={(e) => {
                      if (window.innerWidth <= 768) e.preventDefault();
                      handleSectionClick(id);
                    }}
                  >
                    {['Products', 'Installation', 'Warrant', 'Glass'][idx]}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className='row-what-we-do-inner-2'>
            {sectionIds.map(renderFaqSection)}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ScrollTabfaq;
