import React from "react";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";


const Header = () => {
  return (
    <header className="w-full text-white px-24 py-4">
      <nav className="flex font-bold justify-between items-center text-white ">
        <Link
          to="/"
          className="font-mono text-2xl  font-semibold hover:text-[#FFA75B] transition-transform duration-300 hover:-translate-y-2"
        >
          <i class="fa-solid fa-user text-[#FFA75B] text-3xl mr-2 "></i>
          HENRYPIO.
        </Link>

        <div className="flex flex-col text-sm  sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
          <Link to="/" className=" hover:underline hover:text-[#FFA75B]">
            Home
          </Link>
          <Link to="/about" className=" hover:underline hover:text-[#FFA75B]">
            About
          </Link>
          <Link to="/skills" className=" hover:underline hover:text-[#FFA75B]">
            Skills
          </Link>

          <Link
            to="/projects"
            className=" hover:underline hover:text-[#FFA75B]"
          >
            Projects
          </Link>
          <Link to="/contact" className=" hover:underline hover:text-[#FFA75B]">
            Contact me
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
