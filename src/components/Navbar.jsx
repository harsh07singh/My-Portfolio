import React from 'react';
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const { t } = useTranslation();

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 70,
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav className="flex justify-between items-center px-6 py-4 shadow-md bg-black text-white sticky top-0 z-50">
      <div className="text-2xl font-bold text-purple-500">HK</div>

      <div className="flex gap-6 items-center">
        {['home', 'about', 'skills', 'education', 'projects', 'contact'].map((key) => (
          <button
            key={key}
            onClick={() => scrollToSection(key)}
            className="hover:text-purple-400 capitalize transition-colors"
          >
            {t(`nav.${key}`)}
          </button>
        ))}
      </div>

      <div className="flex items-center gap-4">
        {/* Only language switcher now */}
        <LanguageSwitcher />
      </div>
    </nav>
  );
};

export default Navbar;
