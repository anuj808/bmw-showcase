import React from 'react';
import './ModelComparison.css';
import m5Img from '../assets/gallery/img1.jpg'; // Update path if needed

const M5Pricing = () => {
  return (
    <section className="pricing-section" id="pricing">
      {/* Zig-Zag Divider */}
      <div className="zigzag-divider"></div>

      <div className="pricing-wrapper">
        <h2 className="section-title" >BMW M5 Pricing</h2>

        <div className="pricing-container">
          <div className="pricing-image" >
            <img src={m5Img} alt="BMW M5" />
          </div>
          <div className="pricing-details">
            <p className="price">$103,500</p>
            <ul>
              <li>✔ 4.4L TwinPower Turbo V8</li>
              <li>✔ 600 Horsepower</li>
              <li>✔ 0–100 km/h in 3.3 sec</li>
              <li>✔ AWD (xDrive)</li>
              <li>✔ M Carbon Ceramic Brakes</li>
            </ul>
            <button className="pricing-btn">Book a Test Drive</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default M5Pricing;
