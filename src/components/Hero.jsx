import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaGithub } from "react-icons/fa";
import bg from "../assets/bg.png";
const Hero = () => {
  return (
    <div id="home" className="text-white">
      <div id="large-header">
        <img
          className="z-[-1] absolute opacity-75 h-screen w-screen mx-auto object-contain pointer-events-none select-none blur-sm"
          src={bg}
          alt=""
        />
        <div className="w-full h-[94vh] text-center  flex flex-col justify-center">
          <div className="border px-2 w-72 sm:w-80 md:w-full md:max-w-lg p-10 rounded-lg mx-auto glass">
            <p className="text-accent md:text-2xl font-bold ">
              Hello <span className="text-white">I am</span>
            </p>
            <h1 id="buclatin" className="font-bold md:text-5xl text-3xl">
              Sean Jimwell Buclatin
            </h1>
            <div id="web" className="flex justify-center items-center">
              <p className="text-xs md:text-lg font-bold">
                Aspiring <span className="text-accent">Web Developer</span> from
                Cavite, Philippines
              </p>
            </div>
            <ul className="flex text-xs md:text-lg justify-center">
              <Link to="/about">
                <li className="p-3 hover:text-accent  duration-300 transition-all ease-in-out">
                  About
                </li>
              </Link>
              <Link to="/resume">
                <li className="p-3 hover:text-accent  duration-300 transition-all ease-in-out">
                  Resume
                </li>
              </Link>
              <Link to="/portfolio">
                <li className="p-3 hover:text-accent  duration-300 transition-all ease-in-out">
                  Portfolio
                </li>
              </Link>
              <Link to="/contact">
                <li className="p-3 hover:text-accent  duration-300 transition-all ease-in-out">
                  Contact
                </li>
              </Link>
            </ul>
            <div className="flex justify-center items-center space-x-4">
              <a
                href="https://www.facebook.com/seanj12c"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent duration-300 transition-all ease-in-out"
              >
                <FaFacebook size={32} />
              </a>
              <a
                href="https://github.com/seanj12c"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent duration-300 transition-all ease-in-out"
              >
                <FaGithub size={32} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
