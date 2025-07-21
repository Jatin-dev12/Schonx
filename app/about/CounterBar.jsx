'use client'
import React, { useEffect, useRef, useState } from 'react';
import '../common/css/style.css';
import '../common/css/counter-style.css';

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
              <p className="small-inpara">India’s trusted name in premium aluminium doors and windows, blending world-class German engineering with refined Indian craftsmanship.</p>
              <p className="small-inpara">At Schon Doorways, we’re redefining how India experiences doors, windows, and architectural aluminium systems. Founded in 2013, our journey began with a simple yet ambitious goal — to blend German engineering excellence with Indian innovation. Today, we are trusted by 5,000+ architects and 250,000+ homeowners across 200+ cities. From ultra-slim aluminium doors and windows to custom railings, partitions, and shower cubicles, we offer end-to-end solutions that combine style, strength, and sustainability. With a strong belief in precision, customization, and partnership, Schon is not just a product brand — it’s a space-making partner for every visionary design.</p>
            </div>
          </div>
          <div className='col-lg-6 col-md-12 col-sm-12'>
            <div className='wrapper'>
              <div className='counter col_fourth col_fourth-1'>
                <h2 className='count-title count-number'>
                  <CountTo from={0} to={250} speed={1500} />
                </h2>
                <p className='count-text'>Cities </p>
              </div>
              <div className='counter col_fourth col_fourth-2'>
                <h2 className='count-title count-number'>
                  <CountTo from={0} to={4} speed={1500} />
                </h2>
                <p className='count-text'>Mn Sq.Ft of Doors & Windows</p>
              </div>
              <div className='counter col_fourth col_fourth-3'>
                <h2 className='count-title count-number'>
                  <CountTo from={0} to={1500} speed={1500} />
                </h2>
                <p className='count-text'>Projects </p>
              </div>
              <div className='counter col_fourth col_fourth-4'>
                <h2 className='count-title count-number'>
                  <CountTo from={0} to={200} speed={1500} />
                </h2>
                <p className='count-text'>Experts</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CounterBar;
