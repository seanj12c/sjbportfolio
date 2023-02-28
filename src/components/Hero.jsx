import React from "react";
import Typed from "react-typed";

const Hero = () => {
  return (
    <div id="home" className="text-white">
      <div className="max-w-[800px] w-full h-screen text-center mx-auto flex flex-col justify-center pt-[60px]">
        <p className="text-primary font-bold p-2">
          Hello <span className="text-white">I am</span>
        </p>
        <h1
          id="buclatin"
          className="md:text-7xl sm:text-4xl text-3xl font-bold md:py-6"
        >
          Sean Jimwell Buclatin
        </h1>
        <div id="web" className="flex justify-center items-center">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">Web</p>
          <Typed
            className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2 text-primary"
            strings={["Developer", "Designer"]}
            typeSpeed={100}
            backSpeed={100}
            loop
          />
        </div>
        <p className="max-w-xl mx-auto md:text-base lg:text-xl text-sm font-bold text-[#ccc]">
          I am a front end web developer who writes clean, elegant and efficient
          code. I like to craft solid and scalable frontend products with great
          user experiences.
        </p>
        <a href="#contact">
          <button className="bg-primary w-40 lg:w-52 rounded-md font-medium my-6 mx-auto py-3">
            Contact Me
          </button>
        </a>
      </div>
    </div>
  );
};

export default Hero;
