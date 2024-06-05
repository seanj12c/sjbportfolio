import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
const Navbar = () => {
  return (
    <div className="navbar  bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <Link to="/">
              <li className="p-4 hover:text-accent">Home</li>
            </Link>
            <Link to="/about">
              <li className="p-4 hover:text-accent">About</li>
            </Link>
            <Link to="/resume">
              <li className="p-4 hover:text-accent">Resume</li>
            </Link>
            <Link to="/portfolio">
              <li className="p-4 hover:text-accent">Portfolio</li>
            </Link>
            <Link to="/contact">
              <li className="p-4 hover:text-accent">Contact</li>
            </Link>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <img className="w-5 object-contain" src={logo} alt="" />
      </div>
      <div className="navbar-end"></div>
    </div>
  );
};

export default Navbar;
