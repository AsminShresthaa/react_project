import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Ensure the CSS path is correct

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        LOGO
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
