import React from "react";
import Profile from "../assets/profilepic.jpg";
const About = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <img
          alt="sean"
          src={Profile}
          className="pointer-events-none select-none lg:max-w-[400px] lg:w-full w-64 h-auto rounded-lg m-auto shadow-md shadow-primary"
        />
        <div>
          <h1 className="text-5xl text-center md:text-start font-bold">
            About Me
          </h1>
          <p className="py-6">
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
          <div className="flex justify-center lg:justify-start">
            <a
              href="https://drive.google.com/file/d/1og2enVSZBzvIdltWZikILzPpYqI8ysPG/view?usp=share_link"
              target={"_blank"}
              rel="noreferrer"
              className="flex justify-center md:justify-start items-center"
            >
              <button className="btn btn-primary">Download CV</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
