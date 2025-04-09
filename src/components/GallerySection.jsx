import React, { useEffect } from 'react';
import './GallerySection.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import img1 from '../assets/gallery/img1.jpg';
import img2 from '../assets/gallery/img2.jpg';
import img3 from '../assets/gallery/img3.jpg';
import img4 from '../assets/gallery/img4.jpg';
import img5 from '../assets/gallery/img5.jpg';
import img6 from '../assets/gallery/img6.jpg';

function GallerySection() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const images = [img1, img2, img3, img4, img5, img6];

  return (
    <section className="gallery-section" id="gallery">
      <h2>BMW M5 Gallery</h2>
      <p data-aos-delay="100">
        Experience the stunning design from every angle.
      </p>
      <div className="gallery-grid">
        {images.map((src, idx) => (
          <div className="gallery-item" key={idx} data-aos="zoom-in" data-aos-delay={idx * 100}>
            <img src={src} alt={`BMW M5 ${idx + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default GallerySection;
