import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="relative">
      {/* Nút hamburger */}
      <button
        onClick={handleMenuToggle}
        className="lg:hidden block text-gray-800 p-2"
        aria-label="Toggle Menu"
      >
        {isMenuOpen ? '✖' : '☰'}
      </button>

      {/* Menu điều hướng */}
      <ul
        className={`absolute lg:static top-full left-0 w-full lg:flex lg:gap-6 p-4 bg-gray-100 lg:p-0 transition-transform duration-300 ${
          isMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <li>
          <Link
            to="/"
            onClick={closeMenu}
            className="text-lg font-normal text-gray-800 hover:text-purple-700"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/services"
            onClick={closeMenu}
            className="text-lg font-normal text-gray-800 hover:text-purple-700"
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            to="/price-list"
            onClick={closeMenu}
            className="text-lg font-normal text-gray-800 hover:text-purple-700"
          >
            Price List
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            onClick={closeMenu}
            className="text-lg font-normal text-gray-800 hover:text-purple-700"
          >
            Contact
          </Link>
        </li>
        <li>
          <Link
            to="/support"
            onClick={closeMenu}
            className="text-lg font-normal text-gray-800 hover:text-purple-700"
          >
            Support
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
