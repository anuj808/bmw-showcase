import { useState } from 'react';
import Navbar from './components/nav';
import Hero from './components/Hero';
import SpecsSection from './components/SpecsSection';
import GallerySection from './components/GallerySection';
import ModelComparison from './components/ModelComparison';
import FinalSection from './components/FinalSection';
import SoundSimulator from './components/SoundSimulator';

import './App.css';

function App() {
  const [showSoundPanel, setShowSoundPanel] = useState(false);

  const toggleSoundPanel = () => {
    setShowSoundPanel(prev => !prev);
  };

  return (
    <>
      <Navbar />
      <Hero />
      <SpecsSection />
      <GallerySection />
      <ModelComparison />
      <FinalSection />

      {/* 🎵 Floating Toggle Button */}
      <div className="side-slider-button" onClick={toggleSoundPanel}>🎵</div>

      {/* 🔊 Sliding Panel */}
      <div className={`sound-panel ${showSoundPanel ? 'open' : ''}`}>
        <SoundSimulator />
      </div>
    </>
  );
}

export default App;
