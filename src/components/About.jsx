import React from "react";
import Profile from "../assets/profilepic.jpg";
const About = () => {
  return (
    <div
      id="about"
      className="w-full md:h-screen h-full md:grid items-center bg-[#202020] py-12 px-4 text-white"
    >
      <div className="max-w-[1240px] gap-4 mx-auto grid md:grid-cols-2">
        <img
          src={Profile}
          alt="Sean"
          className="pointer-events-none select-none lg:max-w-[400px] lg:w-full w-64 h-auto rounded-lg m-auto shadow-md shadow-primary"
        />
        <div className="flex flex-col justify-center">
          <p className="text-primary font-bold pt-5">
            About <span className="text-white">Me</span>
          </p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Web Designer<span className="text-primary">/</span>Developer
          </h1>
          <p>
            As a student, I have always been fascinated by the world of web
            design and development. Over the past year, I have honed my skills
            in creating beautiful and responsive landing pages and single page
            websites. As a web designer and web developer, I am committed to
            delivering high-quality work that meets the needs of my clients. I
            pride myself on my attention to detail and my ability to create
            websites that are both visually appealing and user-friendly. Whether
            you need a landing page for your business or a single page website
            to showcase your portfolio, I have the skills and expertise to
            deliver the results you need.
          </p>
          <a
            href="https://drive.google.com/file/d/1og2enVSZBzvIdltWZikILzPpYqI8ysPG/view?usp=share_link"
            target={"_blank"}
            rel="noreferrer"
          >
            <button className="bg-primary w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3">
              Download CV
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
