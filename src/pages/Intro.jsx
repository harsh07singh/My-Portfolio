import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import heroImage from '../assets/profile.jpg';
import { Mail, Download, Sparkles } from 'lucide-react';

const Intro = () => {
  const { t } = useTranslation();

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-gray-900 to-black text-white text-center px-4"
    >
      {/* Profile Image with Gradient Border */}
      <motion.div
        className="relative w-48 h-48 md:w-60 md:h-60 rounded-full p-[3px] bg-gradient-to-tr from-purple-500 via-blue-500 to-pink-500 mb-4"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src={heroImage}
          alt="Harsh Kumar"
          className="w-full h-full object-cover rounded-full border-4 border-gray-900"
        />
      </motion.div>
      <motion.div
  initial={{ opacity: 0, y: -50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
>
  {/* <h1 className="text-4xl font-bold text-gradient"></h1> */}
</motion.div>


      <p className="text-lg text-gray-300">{t('intro.greet')}</p>

      <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
        Harsh Kumar
      </h1>

      <h2 className="text-xl md:text-2xl mt-2">{t('intro.title')}</h2>

      <p className="max-w-xl mt-4 text-gray-400">{t('intro.description')}</p>

      {/* Buttons */}
      <div className="mt-6 flex gap-4 flex-wrap justify-center">
        {/* Contact Me Button */}
        <a
          href="#contact"
          className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-6 py-2 rounded-full text-white font-semibold shadow"
        >
          <Mail size={18} /> {t('intro.contact')}
        </a>

        {/* Resume Button - Glass Outline Style */}
        <a
          href="/resume.pdf"
          download
          className="flex items-center gap-2 px-6 py-2 rounded-full font-semibold text-white border border-gray-400 hover:bg-white hover:text-black transition bg-white/10 backdrop-blur-md"
        >
          <Download size={18} /> {t('intro.resume')}
        </a>
      </div>

      {/* Let's Create Something Amazing - Green Button */}
      <a
        href="#projects"
        className="mt-8 bg-green-600 hover:bg-green-700 px-8 py-3 rounded-full text-white font-semibold text-lg shadow-lg"
      >
        <Sparkles className="inline-block mr-2" size={20} />
        {t('intro.call')}
      </a>
    </section>
  );
};

export default Intro;
