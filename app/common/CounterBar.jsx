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
  onComplete = null,
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
    <section
      className='hmcount-bg' style={{ backgroundImage: `url('/images/white_bgbt.jpg')` }}
    >
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-lg-5 col-md-12 col-sm-12'>
            <div className='small-para'>
              <p className='small-inpara'>
                At Schon Doorways, we bring your spaces to life with premium aluminium doors and windows that blend design, durability, and cutting-edge engineering. Trusted by architects, designers, and discerning homeowners across India, our solutions are crafted to deliver seamless aesthetics, exceptional performance, and long-term reliability. Whether you're building your dream home or redefining a commercial space, discover fenestration systems that don’t just open up walls—but open up possibilities.
              </p>
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
