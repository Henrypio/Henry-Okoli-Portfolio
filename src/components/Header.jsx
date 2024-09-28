import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Header = () => {
  // State to manage the menu's visibility on small screens
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Ref to track the menu container
  const menuRef = useRef(null);

  // Toggle the menu's visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close the menu if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    // Attach the click event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup the event listener when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="w-full text-white px-6 sm:px-24 py-4">
      <nav className="flex justify-between items-center text-white">
        <Link
          to="/"
          className="font-mono text-2xl font-semibold hover:text-[#FFA75B] transition-transform duration-300 hover:-translate-y-2"
        >
          <i className="fa-solid fa-user text-[#FFA75B] text-3xl mr-2"></i>
          HENRYPIO.
        </Link>

        {/* Hamburger Icon - visible on small screens */}
        <div className="sm:hidden">
          <button onClick={toggleMenu}>
            <i className="fas fa-bars text-3xl text-[#FFA75B]"></i>
          </button>
        </div>

        {/* Navigation links - hidden on small screens, visible on medium+ screens */}
        <div className="hidden sm:flex flex-col text-sm sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
          <Link to="/" className="hover:underline hover:text-[#FFA75B]">
            Home
          </Link>
          <Link to="/about" className="hover:underline hover:text-[#FFA75B]">
            About
          </Link>
          <Link to="/skills" className="hover:underline hover:text-[#FFA75B]">
            Skills
          </Link>
          <Link to="/projects" className="hover:underline hover:text-[#FFA75B]">
            Projects
          </Link>
          <Link to="/contact" className="hover:underline hover:text-[#FFA75B]">
            Contact me
          </Link>
        </div>

        {/* Mobile Menu - visible on small screens when toggled */}
        <div
          ref={menuRef}
          className={`${
            isMenuOpen ? "block" : "hidden"
          } sm:hidden absolute top-16 left-0 w-full bg-gray-900 text-center space-y-4 py-4`}
        >
          <Link
            to="/"
            onClick={toggleMenu}
            className="block hover:underline hover:text-[#FFA75B]"
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={toggleMenu}
            className="block hover:underline hover:text-[#FFA75B]"
          >
            About
          </Link>
          <Link
            to="/skills"
            onClick={toggleMenu}
            className="block hover:underline hover:text-[#FFA75B]"
          >
            Skills
          </Link>
          <Link
            to="/projects"
            onClick={toggleMenu}
            className="block hover:underline hover:text-[#FFA75B]"
          >
            Projects
          </Link>
          <Link
            to="/contact"
            onClick={toggleMenu}
            className="block hover:underline hover:text-[#FFA75B]"
          >
            Contact me
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
