import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <Link to="/">HotHome</Link>
      </div>
      <ul className="nav-right">
        <li className="nav-item">
          <Link to="/apartment">Apartment</Link>
        </li>
        <li className="nav-item">
          <Link to="/permits">Permits</Link>
        </li>
        <li className="nav-item">
          <Link to="/contact">Contact Us</Link>
        </li>

      </ul>
    </nav>
  );
};

export default Navbar;
