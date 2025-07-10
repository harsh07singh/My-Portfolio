import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="py-8 bg-gray-950 text-gray-400 text-center">
      {/* Social Icons with Hover Animation */}
      <div className="flex justify-center gap-6 mb-4 text-2xl">
        <a
          href="https://github.com/harsh07singh"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transform transition-transform duration-300 hover:scale-125"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/harsh-kumar-3aab89371"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transform transition-transform duration-300 hover:scale-125"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://twitter.com/Harshu84992366"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transform transition-transform duration-300 hover:scale-125"
        >
          <FaTwitter />
        </a>
        <a
          href="https://www.instagram.com/_harshu.07__"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transform transition-transform duration-300 hover:scale-125"
        >
          <FaInstagram />
        </a>
      </div>

      {/* Copyright */}
      <p className="text-sm">
        &copy; {new Date().getFullYear()} Harsh Kumar. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
