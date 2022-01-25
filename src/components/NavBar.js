import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/planet.png';

const NavBar = () => {
  const activeClass = (isActive) => {
    let staticClass = 'mr-4 text-blue-500 hover:underline';
    if (isActive.isActive) {
      staticClass += ' underline';
    }
    return staticClass;
  };

  return (
    <div className="flex justify-between items-center shadow-md px-4 py-2">
      <div className="flex items-center gap-4">
        <img className="w-14" src={logo} width={50} alt="Logo" />
        <h1 className="text-3xl">Space Travelers' HUB</h1>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex border-r-2 border-black">
          <NavLink className={(isActive) => activeClass(isActive)} to="/">
            Rockets
          </NavLink>
          <NavLink
            className={(isActive) => activeClass(isActive)}
            to="/missions">
            Missions
          </NavLink>
        </div>

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
