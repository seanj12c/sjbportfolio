import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [fix, setFix] = useState(false);

  function setFixed() {
    if (window.scrollY >= 50) {
      setFix(true);
    } else {
      setFix(false);
    }
  }

  window.addEventListener("scroll", setFixed);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div
      className={`${
        fix
          ? "bg-[#2a2a2a] bg-opacity-95 transition-all ease-in-out duration-500"
          : ""
      } flex md:justify-around justify-between items-center h-24 mx-auto px-4 text-white fixed top-0 w-full md:w-full z-50`}
    >
      <a href="#home">
        <h1 className="w-full text-3xl font-bold text-primary">
          S<span className="text-white">JB.</span>
        </h1>
      </a>
      <ul className="hidden md:flex">
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
      <div
        onClick={handleNav}
        className="block p-2 bg-primary rounded-full md:hidden"
      >
        {nav ? <AiOutlineClose size={18} /> : <AiOutlineMenu size={18} />}
      </div>
      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold text-primary m-4">
          S<span className="text-white">JB.</span>
        </h1>

        <ul className="uppercase p-4">
          <a onClick={handleNav} href="#home">
            <li className="p-4 border-b border-gray-600 active:bg-primary">
              Home
            </li>
          </a>
          <a onClick={handleNav} href="#about">
            <li className="p-4 border-b border-gray-600 active:bg-primary">
              About
            </li>
          </a>
          <a onClick={handleNav} href="#services">
            <li className="p-4 border-b border-gray-600 active:bg-primary">
              Services
            </li>
          </a>
          <a onClick={handleNav} href="#portfolio">
            <li className="p-4 border-b border-gray-600 active:bg-primary">
              Portfolio
            </li>
          </a>
          <a onClick={handleNav} href="#contact">
            <li className="p-4">Contact</li>
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
