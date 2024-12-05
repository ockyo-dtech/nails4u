import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    // Toggle dropdown visibility
    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <header className="header">
            <div className="header-logo">
                Nails4U
            </div>
            <div className="hamburger" onClick={toggleDropdown}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <nav className={`header-nav ${dropdownOpen ? 'active' : ''}`}>
                <ul>
                    <li><Link to="/" onClick={() => setDropdownOpen(false)}>Home</Link></li>
                    <li><Link to="/About" onClick={() => setDropdownOpen(false)}>About</Link></li>
                    <li><Link to="/Contact" onClick={() => setDropdownOpen(false)}>Contact</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
