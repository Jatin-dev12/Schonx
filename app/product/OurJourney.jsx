
'use client';

function OurJourney() {
 
  return (
    <>
      <section className='OurJourneymain' style={{ backgroundImage: `url('/images/OurJourneybg.jpg')` }}> 
        <div className='container-fluid'>
          <div className="row row_justify">
            <div className="col-lg-12 col-md-12">
              <div className="main-heading">
                <h2 className="heading text-center">Our Journey </h2>
                <p className="para text-center">Lorem ipsum dolor sit amet consectetur. Venenatis erat faucibus tristique at. Morbi purus vel sed eu mattis ornare dis sagittis morbi.</p>
              </div>
            </div>
          </div>
          <div className='OurJourneymainblock'>
            <div className='OurJourneymaininner'>
                <div className='OurJourneymaininner_content'>
                  <span>2021</span>
                </div>
                <div className='OurJourneymaininner_img'>
                  <img src='/images/c2.png' alt="" />
                </div>
                <div className='OurJourneymaininner_para'>
                  <h3>The Idea</h3>
                  <p>Schön was imagined to bring handloom craft into modern homes.</p>
                </div>
            </div>

            <div className='OurJourneymaininner'>
                <div className='OurJourneymaininner_para'>
                  <h3>Launch</h3>
                  <p>Released our debut range with a warm response from customers.</p>
                </div>
                
                <div className='OurJourneymaininner_img'>
                  <img src='/images/ar1.png' alt="" />
                </div>
                
                <div className='OurJourneymaininner_content'>
                    <span>2022</span>
                </div>
            </div>

            <div className='OurJourneymaininner'>
                <div className='OurJourneymaininner_content'>
                  <span>2023</span>
                </div>
                <div className='OurJourneymaininner_img'>
                  <img src='/images/ar2.png' alt="" />
                </div>
                <div className='OurJourneymaininner_para'>
                  <h3>Foundation</h3>
                  <p>Built artisan partnerships and designed our first collection.</p>
                </div>
            </div>

            <div className='OurJourneymaininner'>
                <div className='OurJourneymaininner_para'>
                  <h3>Expansion</h3>
                  <p>Introduced new product lines and grew our team across India.</p>
                </div>
                
                <div className='OurJourneymaininner_img'>
                  <img src='/images/ar1.png' alt="" />
                </div>
                
                <div className='OurJourneymaininner_content'>
                    <span>2024</span>
                </div>
            </div>

            <div className='OurJourneymaininner'>
                <div className='OurJourneymaininner_content'>
                  <span>2025</span>
                </div>
                <div className='OurJourneymaininner_img'>
                  <img src='/images/ar2.png' alt="" />
                </div>
                <div className='OurJourneymaininner_para'>
                  <h3>Global Step</h3>
                  <p>Schön entered international markets, sharing craft worldwide.</p>
                </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

export default OurJourney;
