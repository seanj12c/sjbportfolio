import React from "react";
import {
  AiOutlineCode,
  AiOutlineCodeSandbox,
  AiOutlineEdit,
} from "react-icons/ai";
const Services = () => {
  return (
    <div
      id="services"
      className="w-full grid items-center lg:h-screen py-[7rem] px-4"
    >
      <div className="mx-auto text-black text-center">
        <p className="text-black">What I am Expert In</p>
        <h1 className="md:text-[60px] sm:text-[50px] text-[40px] pb-5">
          <span className="text-primary">My</span> Services
        </h1>
      </div>

      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-8 text-black ">
        <div className="w-full px-2 bg-secondary rounded-xl shadow-sm shadow-primary flex flex-col p-4 my-4 hover:scale-105 duration-300">
          <AiOutlineCode size={50} className="w-20 mx-auto mt-[-3rem]" />
          <h2 className="text-2xl font-bold text-center py-8">Web Design</h2>
          <p className="text-center text-base">
            As a web designer with expertise in Tailwind CSS, I specialize in
            creating modern and visually appealing websites that are optimized
            for all devices. I use my knowledge of design principles and color
            theory to create custom designs that align with your brand and
            business objectives.
          </p>
        </div>

        <div className="w-full px-2 bg-secondary rounded-xl shadow-sm shadow-primary flex flex-col p-4 my-4 hover:scale-105 duration-300">
          <AiOutlineCodeSandbox size={50} className="w-20 mx-auto mt-[-3rem]" />
          <h2 className="text-2xl font-bold text-center py-8">
            Web Development
          </h2>
          <p className="text-center text-base">
            If you have a Figma design that you want to turn into a fully
            responsive and functional website, look no further. As a web
            developer with expertise in React JS and Tailwind CSS, I can
            transform your Figma design into a beautiful and intuitive website
            that works seamlessly on all devices.
          </p>
        </div>

        <div className="w-full px-2 bg-secondary rounded-xl shadow-sm shadow-primary flex flex-col p-4 my-4 hover:scale-105 duration-300">
          <AiOutlineEdit size={50} className="w-20 mx-auto mt-[-3rem]" />
          <h2 className="text-2xl font-bold text-center py-8">
            Creative Design
          </h2>
          <p className="text-center text-base">
            As a web designer and developer, I specialize in creating custom
            designs that are both visually stunning and functional. With a
            passion for creativity and innovation, I am skilled in developing
            unique solutions that align with your brand and business objectives.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
