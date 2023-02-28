import React from "react";
import Profile from "../assets/profilepic.jpg";
const About = () => {
  return (
    <div
      id="about"
      className="w-full lg:h-screen h-full bg-[#202020] py-12 px-4 text-white"
    >
      <div className="max-w-[1240px] gap-4 mx-auto grid md:grid-cols-2">
        <img
          src={Profile}
          alt="Sean"
          className="max-w-[530px] h-auto w-full rounded-lg m-auto shadow-md shadow-primary"
        />
        <div className="flex flex-col justify-center">
          <p className="text-primary font-bold pt-5">
            About <span className="text-white">Me</span>
          </p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Web Designer<span className="text-primary">/</span>Developer
          </h1>
          <p>
            I describe myself as a passionate developer who loves coding, open
            source, and the web platform. Aside from my job, I like to create
            and contribute to open source projects. That helps me to learn a ton
            of new stuff, grow as a developer and support other open source
            projects.
          </p>
          <button className="bg-primary w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3">
            Download CV
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
