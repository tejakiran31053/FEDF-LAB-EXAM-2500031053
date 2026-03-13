import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <h2>Farmer Portal</h2>

      <NavLink to="/">Home</NavLink> |
      <NavLink to="/register"> FamerRegistration</NavLink> |
      <NavLink to="/display"> FarmerDisplay</NavLink> |
      <NavLink to="/api"> ApiDemo</NavLink>

    </nav>
  );
};

export default Navbar;