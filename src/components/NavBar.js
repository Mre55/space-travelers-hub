import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/planet.png';

const NavBar = () => {
  const activeClass = (isActive) => {
    let staticClass = 'bg-red-400';
    if (isActive.isActive) {
      staticClass += ' underline';
    }
    return staticClass;
  };

  return (
    <div>
      <img src={logo} width={50} alt="Logo" />
      <div>
        <NavLink className={(isActive) => activeClass(isActive)} to="/">
          Rockets
        </NavLink>
        <NavLink className={(isActive) => activeClass(isActive)} to="/missions">
          Missions
        </NavLink>
        <NavLink
          className={(isActive) => activeClass(isActive)}
          to="/my-profile">
          My Profile
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
