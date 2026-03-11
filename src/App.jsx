import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowUp } from 'react-icons/fi';

import ParticleField from './components/ParticleField';
import SectionDivider3D from './components/SectionDivider3D';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Languages from './components/Languages';
import References from './components/References';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-bgPrimary text-textPrimary font-sans relative overflow-x-hidden">
      <div className="noise-overlay" />

      {/* Global 3D Particle Field Background */}
      <ParticleField />

      <Navbar />

      <main className="relative z-10">
        <Hero />
        <SectionDivider3D color="#00F5D4" />
        <About />
        <SectionDivider3D color="#7C3AED" />
        <Education />
        <SectionDivider3D color="#F59E0B" />
        <Skills />
        <SectionDivider3D color="#00F5D4" />
        <Projects />
        <SectionDivider3D color="#7C3AED" />
        <Achievements />
        <SectionDivider3D color="#F59E0B" />
        <Languages />
        <SectionDivider3D color="#00F5D4" />
        <References />
        <SectionDivider3D color="#7C3AED" />
        <Contact />
      </main>

      <Footer />

      {/* Back to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            whileHover={{ y: -5 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 p-4 bg-bgPrimary/80 border border-accentTeal/30 text-accentTeal rounded-full shadow-[0_0_15px_rgba(0,245,212,0.5)] hover:shadow-[0_0_25px_rgba(0,245,212,0.8)] hover:bg-accentTeal/10 backdrop-blur-md z-50 transition-all duration-300"
          >
            <FiArrowUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
