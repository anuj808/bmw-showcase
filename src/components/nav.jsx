import React, { useState } from 'react';
import './Navbar.css';
import logo from '../assets/logo.png';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <img src={logo} alt="BMW Logo" className="logo" />

      <div className={`nav-links ${isOpen ? 'open' : ''}`}>
        <a href="#overview">Overview</a>
        <a href="#specs">Specifications</a>
        <a href="#gallery">Gallery</a>
        <a href="#contact">Contact</a>
      </div>

   
      <div className="hamburger" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      <div className="drift-gif-container">
  <img src="\src\assets\gallery\drift_transparent.gif" alt="Drifting Car" className="drift-gif" />
</div>
    </nav>
  );
}

export default Navbar;
