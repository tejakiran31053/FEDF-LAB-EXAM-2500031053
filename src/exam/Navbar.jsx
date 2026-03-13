import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <h2>Farmer Portal</h2>

      <NavLink to="/">Home</NavLink> | 
      <NavLink to="/register"> Registration</NavLink> | 
      <NavLink to="/display"> Display</NavLink> | 
      <NavLink to="/api"> API Demo</NavLink>

    </nav>
  );
};

export default Navbar;