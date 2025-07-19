import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] text-white py-12 px-6 shadow-inner">
      <div className="max-w-6xl mx-auto text-center">
        {/* Name + Title */}
        <h2 className="text-4xl font-bold text-cyan-400 mb-2 animate-pulse">
          Aitzaz Afzal
        </h2>
        <p className="text-lg text-gray-300 mb-6 tracking-wider">
          MERN Stack Developer | JavaScript Enthusiast | UI/UX Explorer
        </p>

        {/* Social Links with Hover Effects */}
        <div className="flex justify-center gap-6 mb-8 text-3xl">
          <a
            href="https://github.com/Aitzaz786"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition transform hover:scale-110 duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition transform hover:scale-110 duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:your-email@example.com"
            className="hover:text-cyan-400 transition transform hover:scale-110 duration-300"
          >
            <FaEnvelope />
          </a>
        </div>

        <div className="text-sm text-gray-500 border-t border-gray-700 pt-4">
          © 2025 Aitzaz Afzal — All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
