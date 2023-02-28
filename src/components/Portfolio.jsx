import React from "react";
import Project1 from "../assets/project1.JPG";
import Workssoon from "../assets/workssoon.jpg";
const Portfolio = () => {
  return (
    <div
      id="portfolio"
      className="w-full lg:h-screen grid items-center bg-[#202020] px-4 text-white lg:py-40 pt-24 pb-7"
    >
      <div className="text-center">
        <p>Portfolio</p>
        <h1 className="text-4xl">
          Latest <span className="text-primary">Project</span>
        </h1>
      </div>

      <div className="md:max-w-[1240px] max-w-[450px] mx-auto grid md:grid-cols-3 text-white gap-5">
        <div className="bg-[#202020] rounded-xl  flex flex-col my-4">
          <a id="link" href="/">
            <img
              className="rounded-2xl h-[220px] w-[500px]"
              src={Project1}
              alt="edoagenda"
            />
          </a>
        </div>

        <div className="bg-[#202020] rounded-xl  flex flex-col my-4">
          <a id="link" href="/">
            <img
              className="rounded-2xl h-[220px] w-[500px]"
              src={Workssoon}
              alt="soon"
            />
          </a>
        </div>

        <div className="bg-[#202020] rounded-xl  flex flex-col my-4">
          <a id="link" href="/">
            <img
              className="rounded-2xl h-[220px] w-[500px]"
              src={Workssoon}
              alt="soon"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
