import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Intro from './pages/Intro';
import About from './pages/About';
import Skills from './pages/Skills';
import Education from './pages/Education';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import { motion } from 'framer-motion';

const App = () => {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <main>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          <Intro />
          <About />
          <Skills />
          <Education />
          <Projects />
          <Contact />
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default App;

