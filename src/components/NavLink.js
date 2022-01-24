import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/planet.png';

const NavLink = () => (
  <div>
    <img src={logo} width={50} alt="Logo" />
    <div>
      <Link to="/">Rockets</Link>
      <Link to="/missions">Missions</Link>
    </div>
  </div>
);

export default NavLink;
