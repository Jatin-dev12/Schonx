import React, { useEffect, useRef, useState } from 'react';
import '../common/css/style.css';
import '../common/css/counter-style.css';
import white_bgbt from  '../../assets/images/white_bgbt.jpg'

// CountTo component
function CountTo({
  from = 0,
  to = 0,
  speed = 1000,
  refreshInterval = 100,
  decimals = 0,
  formatter = defaultFormatter,
  onUpdate = null,
  onComplete = null
}) {
  const [value, setValue] = useState(from);
  const loopCount = useRef(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    const loops = Math.ceil(speed / refreshInterval);
    const increment = (to - from) / loops;
    let currentValue = from;

    function update() {
      currentValue += increment;
      loopCount.current += 1;

      if (loopCount.current >= loops) {
        clearInterval(intervalRef.current);
        currentValue = to;
        if (onComplete) onComplete(currentValue);
      }

      setValue(currentValue);
      if (onUpdate) onUpdate(currentValue);
    }

    setValue(from);
    loopCount.current = 0;
    intervalRef.current = setInterval(update, refreshInterval);

    return () => clearInterval(intervalRef.current);
  }, [from, to, speed, refreshInterval, decimals]);

  return <>{formatter(value, { decimals })}</>;
}

function defaultFormatter(value, { decimals }) {
  return value.toFixed(decimals).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

// CounterBar component
function CounterBar() {
  return (
    <section className="hmcount-bg hmcount-bg_about">
      <div className="container-fluid">
        <div className='row'>
          <div className='col-lg-6 col-md-12 col-sm-12'>
            <div className="small-para">
              <p className="small-inpara">Our name means 'beautiful' in German, a standard we uphold in every custom-designed window, door, wardrobe, and kitchen we create. Schon is about bringing your vision to life with a touch of elegance, from chic glass features to contemporary metalwork.Our name means 'beautiful' in German, a standard we uphold in every custom-designed window, door, wardrobe, and kitchen we create.</p>
            </div>
          </div>
          <div className='col-lg-6 col-md-12 col-sm-12'>
            <div className="wrapper">
              <div className="counter col_fourth col_fourth-1">
                <h2 className="count-title count-number">
                  <CountTo from={0} to={300} speed={1500} />
                </h2>
                <p className="count-text">Clients</p>
              </div>
              <div className="counter col_fourth col_fourth-2">
                <h2 className="count-title count-number">
                  <CountTo from={0} to={5} speed={1500} />
                </h2>
                <p className="count-text">Countries</p>
              </div>
              <div className="counter col_fourth col_fourth-3">
                <h2 className="count-title count-number">
                  <CountTo from={0} to={1000} speed={1500} />
                </h2>
                <p className="count-text">Projects</p>
              </div>
              <div className="counter col_fourth col_fourth-4">
                <h2 className="count-title count-number">
                  <CountTo from={0} to={200} speed={1500} />
                </h2>
                <p className="count-text">Experts</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CounterBar;
