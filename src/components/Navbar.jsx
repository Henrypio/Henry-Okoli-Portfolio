import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-black p-4">
      <ul className="flex space-x-4">
        <li>
          <Link to="/" className="text-[#FFA75B] hover:underline">
            Home
          </Link>
        </li>
        <li>
          <Link to="/projects" className="text-[#FFA75B] hover:underline">
            Projects
          </Link>
        </li>
        <li>
          <Link to="/skills" className="text-[#FFA75B] hover:underline">
            Skills
          </Link>
        </li>
        <li>
          <Link to="/about" className="text-[#FFA75B] hover:underline">
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" className="text-[#FFA75B] hover:underline">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
