import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from './components/nav'
import Hero from './components/Hero'
import SpecsSection from './components/SpecsSection'
import GallerySection from './components/GallerySection';
import ModelComparison from './components/ModelComparison';
import FinalSection from './components/FinalSection';

import './App.css'

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
  <>
  <Navbar/>
  <Hero/>
  <SpecsSection/>
  <GallerySection/>
  <ModelComparison/>
  <FinalSection/>
  
  </>
  )
}

export default App
