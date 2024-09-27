import React from "react";
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white px-8 py-4">
      <div className="flex justify-between items-center">
        <span>&copy; 2024 Henry Okoli</span>
        <div className="flex space-x-4 text-white">
          <a href="mailto:henrypio21@gmail.com" className="flex items-center">
            <span className="hidden sm:inline">Email</span>
            <FaEnvelope className="sm:hidden" />
          </a>
          <a href="tel:+2348065106020" className="flex items-center">
            <span className="hidden sm:inline">Phone</span>
            <FaPhone className="sm:hidden" />
          </a>
          <a
            href="https://github.com/henrypio"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center"
          >
            <span className="hidden sm:inline">GitHub</span>
            <FaGithub className="sm:hidden" />
          </a>
          <a
            href="https://linkedin.com/in/henrypio"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center"
          >
            <span className="hidden sm:inline">LinkedIn</span>
            <FaLinkedin className="sm:hidden" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
