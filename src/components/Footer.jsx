import React from "react";
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white px-6 py-4">
      <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <span className="text-[#FFA75B] text-center md:text-left">
          &copy; <span className="text-white">2024 Henry Okoli</span>
        </span>

        <div className="text-center md:text-left">
          <p className="mb-2">My social media links:</p>
          <div className="flex justify-center md:justify-start space-x-6">
            <a href="mailto:henrypio21@gmail.com" className="flex items-center">
              <FaEnvelope className="text-[#FFA75B]" />
            </a>
            <a href="tel:+2348065106020" className="flex items-center">
              <FaPhone className="text-[#FFA75B]" />
            </a>
            <a
              href="https://github.com/henrypio"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <FaGithub className="text-[#FFA75B]" />
            </a>
            <a
              href="https://linkedin.com/in/henrypio"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <FaLinkedin className="text-[#FFA75B]" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
