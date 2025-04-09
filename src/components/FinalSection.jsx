import React from 'react';
import './FinalSection.css';

const FinalSection = () => {
  return (
    <section className="final-section" id="contact">
      <div className="final-content" >
        <h2 className="final-title">Ready to Drive the Beast?</h2>
        <p className="final-subtitle">Experience the ultimate driving machine today.</p>
        <button className="final-btn">Book a Test Drive</button>
      </div>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} BMW M5 Showcase. All rights reserved.</p>
        <div className="footer-links">
          <a href="https://www.instagram.com/bmw?igsh=NXZ4MHFnZ3hiYjVq" target='blank'>Instagram</a>
          <a href="https://youtu.be/vQXvyV0zIP4?si=xZkizHZAWLqNyz5C" target='blank'>YouTube</a>
          <a href="">Contact</a>
        </div>
      </footer>
    </section>
  );
};

export default FinalSection;
