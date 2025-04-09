import React from 'react';
import './SpecsSection.css';

import { FaCarSide, FaGasPump } from 'react-icons/fa';
import { GiHorseHead, GiSpeedometer, GiCarWheel } from 'react-icons/gi';
import { BsSpeedometer2 } from 'react-icons/bs';
import { TbManualGearbox } from 'react-icons/tb';
import { MdOutlineDriveEta } from 'react-icons/md';

function SpecsSection() {
  return (
    <section className="specs-section" id='specs'>
      <div className="diagonal-divider"></div>
      <div className="specs-content">
        <h2>BMW M5 Specifications</h2>
        <p>Explore the specs that deliver high-performance excellence.</p>

        <div className="specs-grid">
          <div className="spec-card">
            <FaCarSide className="spec-icon" />
            <h3>Engine</h3>
            <p>4.4L V8 Twin Turbo</p>
          </div>
          <div className="spec-card">
            <GiHorseHead className="spec-icon" />
            <h3>Horsepower</h3>
            <p>600 hp</p>
          </div>
          <div className="spec-card">
            <BsSpeedometer2 className="spec-icon" />
            <h3>0–100 km/h</h3>
            <p>3.2 seconds</p>
          </div>
          <div className="spec-card">
            <GiSpeedometer className="spec-icon" />
            <h3>Top Speed</h3>
            <p>305 km/h</p>
          </div>
          <div className="spec-card">
            <TbManualGearbox className="spec-icon" />
            <h3>Transmission</h3>
            <p>8-Speed Auto</p>
          </div>
          <div className="spec-card">
            <MdOutlineDriveEta className="spec-icon" />
            <h3>Drive Type</h3>
            <p>AWD (xDrive)</p>
          </div>
          <div className="spec-card">
            <FaGasPump className="spec-icon" />
            <h3>Fuel Efficiency</h3>
            <p>9.9 km/l</p>
          </div>
          <div className="spec-card">
            <GiCarWheel className="spec-icon" />
            <h3>Torque</h3>
            <p>750 Nm</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SpecsSection;
