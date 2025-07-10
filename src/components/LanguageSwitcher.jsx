import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const LanguageSwitcher = () => {
  const { language, toggleLanguage } = useLanguage();

  const handleLanguageChange = (e) => {
    toggleLanguage(e.target.value);
  };

  return (
    <select
      value={language}
      onChange={handleLanguageChange}
      className="bg-gray-200 dark:bg-gray-700 text-sm rounded px-2 py-1 text-gray-900 dark:text-white"
    >
      <option value="en">EN</option>
      <option value="hi">हिंदी</option>
      <option value="bn">বাংলা</option>
    </select>
  );
};

export default LanguageSwitcher;