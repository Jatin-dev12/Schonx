import OurJourneybg from '../../assets/images/OurJourneybg.jpg';
import cuttingedge from '../../assets/images/cuttingedge.png';
import cuttingedgemb from '../../assets/images/cuttingedgemb.png';

function CuttingEdge() {
  return (
    <>
      <section
        className='cuttingedge-page'
        style={{ backgroundImage: `url(${OurJourneybg})` }}
      >
        <div className='container-fluid'>
          <div className='row row_justify'>
            <div className='col-lg-12 col-md-12'>
              <div className='main-heading'>
                <h2 className='heading text-center'>
                  Cutting Edge Technology in Every Frame
                </h2>
              </div>
            </div>
          </div>
          <div className='row row_cuttingedge-page'>
            <div className='col-lg-12 col-md-12'>
              <div className='cuttingedge-page-img'>
                <img src={cuttingedge} alt='' />
              </div>
              <div className='cuttingedge-page-img-mobile'>
                <img src={cuttingedgemb} alt='' />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CuttingEdge;
