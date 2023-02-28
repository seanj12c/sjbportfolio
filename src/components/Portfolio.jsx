import React from "react";
import Edoagenda from "../assets/edoagenda.gif";
import Mybank from "../assets/mybank.gif";
import Kitscratch from "../assets/kitscratch.gif";
const Portfolio = () => {
  return (
    <div
      id="portfolio"
      className="w-full md:h-screen md:grid items-center bg-[#202020] px-4 text-white md:py-40 pt-24 pb-7"
    >
      <div className="text-center">
        <p>Portfolio</p>
        <h1 className="text-4xl">
          Latest <span className="text-primary">Project</span>
        </h1>
      </div>

      <div className="md:max-w-[1240px] max-w-[450px] mx-auto grid md:grid-cols-3 text-white gap-5">
        <div className="bg-[#202020] rounded-xl  flex flex-col my-4">
          <a
            id="link"
            href="https://edoagendabysean.netlify.app"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="pointer-events-none select-none object-cover rounded-2xl h-[220px] w-[500px]"
              src={Edoagenda}
              alt="edoagenda"
            />
            <h1 className="text-center">Edo Agenda Clone</h1>
          </a>
        </div>

        <div className="bg-[#202020] rounded-xl  flex flex-col my-4">
          <a
            id="link"
            href="https://mybankbysean.netlify.app"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="pointer-events-none select-none object-cover rounded-2xl h-[220px] w-[500px]"
              src={Mybank}
              alt="mybank"
            />
            <h1 className="text-center">My Bank</h1>
          </a>
        </div>

        <div className="bg-[#202020] rounded-xl  flex flex-col my-4">
          <a
            id="link"
            href="https://kitscratch.netlify.app"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="pointer-events-none select-none object-cover rounded-2xl h-[220px] w-[500px]"
              src={Kitscratch}
              alt="KitScratch"
            />
            <h1 className="text-center">KitScratch</h1>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
