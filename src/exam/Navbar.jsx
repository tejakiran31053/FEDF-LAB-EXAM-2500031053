import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
  
      <NavLink to="/">Home</NavLink>
      <NavLink to="/register"> FarmerRegistration</NavLink>
      <NavLink to="/display"> FarmerDisplay</NavLink>
      <NavLink to="/api"> ApiDemo</NavLink>

    </nav>
  );
};

export default Navbar;