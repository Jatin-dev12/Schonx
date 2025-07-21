


function ExperienceCentres() {
  return (
    <>
      <section
        className='ourexistence'
        style={{ backgroundImage: `url('/images/existenceimgbg.png')` }}
      >
        <div className='container'>
          <div className='row row_justify'>
            <div className='col-lg-12 col-md-12'>
              <div className='main-heading'>
                <h2 className='heading text-center'>Our Experience Centres</h2>
              </div>
            </div>
          </div>
          <div className='row row_ourexistence'>
            <div className='col-lg-3 col-md-4 col-sm-4 col-12'>
              <div className='ourexistence_block'>
                <div className='ourexistence_block_img'>
                  <img src='/images/Bangalore.svg' alt='' />
                </div>
                <div className='ourexistence_block_content'>
                  <h3>Bangalore</h3>
                  {/* <span><a href="tel:+18076971344">+1 (807) 697-1344</a></span> */}
                </div>
              </div>
            </div>
            <div className='col-lg-3 col-md-4 col-sm-4 col-12'>
              <div className='ourexistence_block'>
                <div className='ourexistence_block_img'>
                  <img src='/images/Hyderabad.svg' alt='' />
                </div>
                <div className='ourexistence_block_content'>
                  <h3>Hyderabad</h3>
                </div>
              </div>
            </div>
            <div className='col-lg-3 col-md-4 col-sm-4 col-12'>
              <div className='ourexistence_block'>
                <div className='ourexistence_block_img'>
                  <img src='/images/Chennai.svg' alt='' />
                </div>
                <div className='ourexistence_block_content'>
                  <h3>Chennai</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ExperienceCentres;
