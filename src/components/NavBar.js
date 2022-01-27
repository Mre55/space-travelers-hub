import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/planet.png';

const NavBar = () => {
  const activeClass = (isActive) => {
    let staticClass = 'md:mr-4 text-blue-500 border border-b-0 rounded-t-lg px-4 py-2 md:p-0 md:border-0 hover:underline';
    if (isActive.isActive) {
      staticClass += ' underline';
    }
    return staticClass;
  };

  return (
    <header className="shadow-md px-4 md:py-2 pt-2">
      <nav className="flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center gap-4">
          <img className="w-14" src={logo} width={50} alt="Logo" />
          <h1 className="text-3xl">Space Travelers&apos; HUB</h1>
        </div>
        <div className="flex items-center gap-4 mt-2 md:mt-0">
          <div className="flex md:border-r-2 md:border-black gap-6 md:gap-0 text-center text-sm md:text-base">
            <NavLink className={(isActive) => activeClass(isActive)} to="/">
              Rockets
            </NavLink>
            <NavLink
              className={(isActive) => activeClass(isActive)}
              to="/missions"
            >
              Missions
            </NavLink>

            <NavLink
              className={(isActive) => `${activeClass(isActive)} md:hidden`}
              to="/my-profile"
            >
              My Profile
            </NavLink>
          </div>

          <NavLink
            className={({ isActive }) => `text-blue-500 hover:underline hidden md:block ${
              isActive ? ' underline' : ''
            }`}
            to="/my-profile"
          >
            My Profile
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
