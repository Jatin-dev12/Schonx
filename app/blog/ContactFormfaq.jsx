
import arrow from '../../assets/images/arrow.png'
import form from '../../assets/images/form.jpg'
import React, { useState } from 'react';
import contactlogo from '../../assets/images/contactlogo.png'
const faqs = [
  {
    title: 'Can I Expect Ultimate Privacy?',
    content: 'Lorem ipsum dolor sit amet consectetur. Venenatis erat faucibus tristique at. Morbi purus vel sed eu mattis ornare dis sagittis morbi.',
  },
  {
    title: 'voluptate velit esse cillum dolore eu fugiat?',
    content: 'Lorem ipsum dolor sit amet consectetur. Venenatis erat faucibus tristique at. Morbi purus vel sed eu mattis ornare dis sagittis morbi.',
  },
  {
    title: 'Can I Expect Ultimate Privacy?',
    content: 'Lorem ipsum dolor sit amet consectetur. Venenatis erat faucibus tristique at. Morbi purus vel sed eu mattis ornare dis sagittis morbi.',
  },
  {
    title: 'voluptate velit esse cillum dolore eu fugiat?',
    content: 'Lorem ipsum dolor sit amet consectetur. Venenatis erat faucibus tristique at. Morbi purus vel sed eu mattis ornare dis sagittis morbi.',
  },
  {
    title: 'Can I Expect Ultimate Privacy?',
    content: 'Lorem ipsum dolor sit amet consectetur. Venenatis erat faucibus tristique at. Morbi purus vel sed eu mattis ornare dis sagittis morbi.',
  },
];
function ContactFormfaq() {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index) => {
    setActiveIndex(prev => (prev === index ? -1 : index));
  };
  return (
    <>
      <section className='contact_form' style={{ backgroundImage: `url(${form})` }}>
        <div className='container-fluid'>
          <div className="row row_justify">
            <div className="col-lg-6 col-md-12">
              <div className='contact_formfaq_main'>
                <div className="main-heading">
                <h2 className="heading">Frequently Asked Questions</h2>
              </div>
              <div className="contact_formfaq">
                {faqs.map((faq, index) => (
                  <div className={`card ${activeIndex === index ? 'active' : ''}`} key={index}>
                    <div
                      className="card-header"
                      onClick={() => toggleAccordion(index)}
                      style={{ cursor: 'pointer' }}
                    >
                      <span className="card-link">
                        {faq.title}
                      </span>
                    </div>
                    {activeIndex === index && (
                      <div className="card-body">
                        {faq.content}
                      </div>
                    )}
                  </div>
                ))}
              </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="what-we-do-btform">

                <h4 className='what-we-do-btform_heading'>We’re just a step away!</h4>
                <form action="">
                  <div className="form-row">
                    <div className="form-group col-md-12">
                      <input type="text" className="form-control" placeholder='Full Name*' id="inputEmail4" />
                    </div>
                    <div className="form-group col-md-12">
                      <input type="email" className="form-control" placeholder='Email Address*' id="inputEmail4" />
                    </div>
                    <div className="form-group col-md-12">
                      <input type="number" className="form-control" placeholder='Contact No.*' id="inputEmail4" />
                    </div>
                    <div className="form-group col-md-12">
                      <textarea className="form-control" id="validationTextarea" placeholder="Message"></textarea>
                    </div>

                    <div className="form-group col-md-6">
                      <button className="btn btn-outline-secondary" type="button">Get in Touch <img src={arrow} alt="" /></button>
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
