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
          <div className="p-4 cursor-pointer bg-white " onClick={handleMenuToggle}>
          <GiHamburgerMenu />

          </div>
        </div>
        <div className={`md:block ${menuOpen ? '' : 'hidden'}`}>
          <ul className="items-center p-3 text-lg md:p-0 md:justify-around md:flex">
            <li className="p-4 text-slate-500 hover:text-white">
              <Link to="/" onClick={closeMenu}>Home</Link>
            </li>
            <li className="p-4 text-slate-500 hover:text-white">
              <Link to="/authour" onClick={closeMenu}>Editorial Board</Link>
            </li>
            <li className="p-4 text-slate-500 hover:text-white">
              <Link to="/main" onClick={closeMenu}>Instruction To Author</Link>
            </li>
            <li className="p-4 text-slate-500 hover:text-white">
              <Link to="/manual" onClick={closeMenu}>Manuscript Submission</Link>
            </li>
            <li className="p-4 text-slate-500 hover:text-white">
              <Link to="/issue" onClick={closeMenu}>Current Issue</Link>
            </li>
            <li className="p-4 text-slate-500 hover:text-white">
              <Link to="/volumes" onClick={closeMenu}>Volumes</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
