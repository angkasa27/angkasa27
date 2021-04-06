import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Nav({ className }) {
  return (
    <header
      className={
        'bg-window sm:px-5 py-3 md:absolute right-1/4 left-5/100 bg-glass z-50 transition-all duration-500 ease-in-out animate-itemUp md:animate-itemRight ' +
        className
      }
    >
      <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center">
        <NavLink
          to="/react-tailwind-glassmorphic"
          className="cursor-pointer text-yellow-500 hover:text-yellow-600 transition-default text-2xl font-black w-full sm:w-auto text-center border-b sm:border-0"
        >
          angkasa27
        </NavLink>
        <div className="mt-2 sm:mt-0">
          <NavLink
            to="/react-tailwind-glassmorphic/about"
            className="transition-default nav-link mr-8"
            activeClassName="bg-yellow-400 text-white"
          >
            About
          </NavLink>
          <NavLink
            to="/react-tailwind-glassmorphic/project"
            className="transition-default nav-link mr-8"
            activeClassName="bg-yellow-400 text-white"
          >
            Project
          </NavLink>
          <NavLink
            to="/react-tailwind-glassmorphic/work"
            className="transition-default nav-link"
            activeClassName="bg-yellow-400 text-white"
          >
            Work
          </NavLink>
        </div>
      </div>
    </header>
  );
}
