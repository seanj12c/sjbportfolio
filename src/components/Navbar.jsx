import React from "react";

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
            <a href="#home">
              <li className="p-4 hover:text-primary">Home</li>
            </a>
            <a href="#about">
              <li className="p-4 hover:text-primary">About</li>
            </a>
            <a href="#services">
              <li className="p-4 hover:text-primary">Services</li>
            </a>
            <a href="#portfolio">
              <li className="p-4 hover:text-primary">Portfolio</li>
            </a>
            <a href="#contact">
              <li className="p-4 hover:text-primary">Contact</li>
            </a>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <h1 className="w-full text-3xl font-bold text-primary">
          S<span className="text-neutral">JB</span>
        </h1>
      </div>
      <div className="navbar-end">
        <div className="dropdown dropdown-left dropdown-bottom">
          <div tabIndex={0} role="button" className="btn m-1">
            Theme
            <svg
              width="12px"
              height="12px"
              className="h-2 w-2 fill-current opacity-60 inline-block"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 2048 2048"
            >
              <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] p-2 shadow-2xl bg-base-300 rounded-box w-52"
          >
            <li>
              <input
                type="radio"
                name="theme-dropdown"
                className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                aria-label="System Auto"
                value="default"
              />
            </li>
            <li>
              <input
                type="radio"
                name="theme-dropdown"
                className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                aria-label="Cream"
                value="retro"
              />
            </li>
            <li>
              <input
                type="radio"
                name="theme-dropdown"
                className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                aria-label="Dark Green"
                value="forest"
              />
            </li>
            <li>
              <input
                type="radio"
                name="theme-dropdown"
                className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                aria-label="Pink"
                value="valentine"
              />
            </li>
            <li>
              <input
                type="radio"
                name="theme-dropdown"
                className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                aria-label="Blue"
                value="cupcake"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
