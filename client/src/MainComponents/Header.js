import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="bg-slate-900">
      <div className="container mx-auto">
        <div className="flex items-center justify-between p-1 md:p-0 md:hidden">
          <div className="text-2xl font-semibold text-white"><i></i></div>
          <div className="p-4 cursor-pointer bg-dark-blue-500 text-white" onClick={handleMenuToggle}>
            <GiHamburgerMenu />
          </div>
        </div>
        <div className={`md:block ${menuOpen ? '' : 'hidden'}`}>
          <ul className="items-center p-3 text-lg md:p-0 md:justify-around md:flex">
            <li className="p-4">
              <Link to="/" onClick={closeMenu} className="text-white hover:text-blue-500 rounded-lg px-3 py-1 transition duration-300 ease-in-out">Home</Link>
            </li>
            <li className="p-4">
              <Link to="/authour" onClick={closeMenu} className="text-white hover:text-blue-500 rounded-lg px-3 py-1 transition duration-300 ease-in-out">Editorial Board</Link>
            </li>
            <li className="p-4">
              <Link to="/main" onClick={closeMenu} className="text-white hover:text-blue-500 rounded-lg px-3 py-1 transition duration-300 ease-in-out">Instruction To Author</Link>
            </li>
            <li className="p-4">
              <Link to="/manual" onClick={closeMenu} className="text-white hover:text-blue-500 rounded-lg px-3 py-1 transition duration-300 ease-in-out">Manuscript Submission</Link>
            </li>
            <li className="p-4">
              <Link to="/archives" onClick={closeMenu} className="text-white hover:text-blue-500 rounded-lg px-3 py-1 transition duration-300 ease-in-out">Archives</Link>
            </li>
            <li className="p-4">
              <Link to="/ethics" onClick={closeMenu} className="text-white hover:text-blue-500 rounded-lg px-3 py-1 transition duration-300 ease-in-out">Ethics</Link>
            </li>
            <li className="p-4">
              <Link to="/contact" onClick={closeMenu} className="text-white hover:text-blue-500 rounded-lg px-3 py-1 transition duration-300 ease-in-out">Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
