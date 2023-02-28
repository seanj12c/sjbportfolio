import React from "react";
import {
  AiOutlineCode,
  AiOutlineCodeSandbox,
  AiOutlineEdit,
} from "react-icons/ai";
const Services = () => {
  return (
    <div id="services" className="w-full lg:h-screen py-[7rem] px-4">
      <div className="mx-auto text-white text-center">
        <p className="text-[#ccc]">What I am Expert In</p>
        <h1 className="md:text-[60px] sm:text-[50px] text-[40px] pb-8">
          <span className="text-primary">My</span> Services
        </h1>
      </div>

      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-8 text-white ">
        <div className="w-full px-2 bg-[#202020] rounded-xl shadow-sm shadow-primary flex flex-col p-4 my-4 hover:scale-105 duration-300">
          <AiOutlineCode size={50} className="w-20 mx-auto mt-[-3rem]" />
          <h2 className="text-2xl font-bold text-center py-8">Web Design</h2>
          <p className="text-center text-base">
            Web design encompasses many different skills and disciplines in the
            production and maintenance of websites. The different areas of web
            design include web graphic design; user interface design; authoring,
            including standardised code and proprietary software;
          </p>
          <button className="bg-primary w-[200px] rounded-md font-medium my-6 mx-auto py-3">
            Read More
          </button>
        </div>

        <div className="w-full px-2 bg-[#202020] rounded-xl shadow-sm shadow-primary flex flex-col p-4 my-4 hover:scale-105 duration-300">
          <AiOutlineCodeSandbox size={50} className="w-20 mx-auto mt-[-3rem]" />
          <h2 className="text-2xl font-bold text-center py-8">
            Web Development
          </h2>
          <p className="text-center text-base">
            Web development is the work involved in developing a website for the
            Internet or an intranet. Web development can range from developing a
            simple single static page of plain text to complex web applications,
            electronic businesses, and social network services.
          </p>
          <button className="bg-primary w-[200px] rounded-md font-medium my-6 mx-auto py-3">
            Read More
          </button>
        </div>

        <div className="w-full px-2 bg-[#202020] rounded-xl shadow-sm shadow-primary flex flex-col p-4 my-4 hover:scale-105 duration-300">
          <AiOutlineEdit size={50} className="w-20 mx-auto mt-[-3rem]" />
          <h2 className="text-2xl font-bold text-center py-8">
            Creative Design
          </h2>
          <p className="text-center text-base">
            Creative design is a process that uses digital and physical
            image-making tools to create renders and representations used for
            marketing purposes. Creative design as a field relies heavily on the
            work of visual designers but is not entirely limited to it.
            Companies require creative
          </p>
          <button className="bg-primary w-[200px] rounded-md font-medium my-6 mx-auto py-3">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;
