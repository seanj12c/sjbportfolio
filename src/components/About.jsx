import React from "react";
import Profile from "../assets/profilepic.jpg";
import { RiArrowDropRightFill } from "react-icons/ri";
import react from "../assets/tech/react.svg";
import tailwind from "../assets/tech/tailwindcss.svg";
import firebase from "../assets/tech/firebase.svg";
import vercel from "../assets/tech/vercel.svg";
import javascript from "../assets/tech/javascript.svg";
import github from "../assets/tech/github.svg";
import figma from "../assets/tech/figma.svg";
import netlify from "../assets/tech/netlify.svg";
import html from "../assets/tech/html.svg";
import css from "../assets/tech/css.svg";

const About = () => {
  return (
    <div className="pt-5 px-5 min-h-screen bg-base-200">
      <h1 className="flex items-center gap-1 font-bold">
        About Me <hr className="w-10" />
      </h1>
      <div className="flex-col  p-5 rounded-lg md:justify-center md:gap-4 flex lg:flex-row">
        <div className="lg:w-1/4 mb-2">
          <img
            alt="sean"
            src={Profile}
            className="pointer-events-none select-none lg:max-w-[400px] lg:w-full w-64 h-auto rounded-lg m-auto shadow-md shadow-accent"
          />
        </div>
        <div className="pt-2 flex items-center lg:w-3/4">
          <div>
            <h1 className="text-center md:text-4xl font-bold text-accent">
              IT Graduate | Aspiring Web Developer
            </h1>
            <p className="py-2 italic">
              Hi! I am Sean Jimwell Buclatin an Aspiring Web Developer. My hobby
              is to code and think about how my previous codes can improve.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2">
              <li className="flex text-xs md:text-base gap-1 items-center">
                <RiArrowDropRightFill className="text-accent font-bold text-2xl" />
                <span className="font-bold">Phone:</span>+63 965 237 6005
              </li>
              <li className="flex text-xs md:text-base gap-1 items-center">
                <RiArrowDropRightFill className="text-accent font-bold text-2xl" />
                <span className="font-bold">City:</span>General Trias City
              </li>
              <li className="flex text-xs md:text-base gap-1 items-center">
                <RiArrowDropRightFill className="text-accent font-bold text-2xl" />
                <span className="font-bold">Freelance:</span>Web Development
              </li>
              <li className="flex text-xs md:text-base gap-1 items-center">
                <RiArrowDropRightFill className="text-accent font-bold text-2xl" />
                <span className="font-bold">Email:</span>
                buclatinseanjimwell@gmail.com
              </li>
            </ul>
            <p className="py-2">
              I specialize in creating responsive website that are easy to use
              and visually appealing. I have a passion for staying up-to-date
              with the latest web development trends and technologies. My
              attention to detail and dedication to quality ensures that my
              projects are always delivered on time and to the highest standard.
              If you're interested in working together or have any web
              development needs, please feel free to contact me. I'm excited to
              hear about your project and discuss how we can work together to
              bring your vision to life.
            </p>
          </div>
        </div>
      </div>
      <div>
        <h1 className="flex items-center gap-1 font-bold">
          Technologies I use <hr className="w-10" />
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <div className="p-4 flex items-center gap-2 rounded-lg border">
            <img src={html} className="w-10 object-contain h-10" alt="HTML" />
            <h1>HTML</h1>
          </div>
          <div className="p-4 flex items-center gap-2 rounded-lg border">
            <img src={css} className="w-10 object-contain h-10" alt="CSS" />
            <h1>CSS</h1>
          </div>
          <div className="p-4 flex items-center gap-2 rounded-lg border">
            <img src={react} className="w-10 object-contain h-10" alt="React" />
            <h1>React JS</h1>
          </div>
          <div className="p-4 flex items-center gap-2 rounded-lg border">
            <img
              src={tailwind}
              className="w-10 object-contain h-10"
              alt="Tailwind CSS"
            />
            <h1>Tailwind CSS</h1>
          </div>
          <div className="p-4 flex items-center gap-2 rounded-lg border">
            <img
              src={firebase}
              className="w-10 object-contain h-10"
              alt="Firebase"
            />
            <h1>Firebase</h1>
          </div>
          <div className="p-4 flex items-center gap-2 rounded-lg border">
            <img
              src={vercel}
              className="w-10 object-contain h-10"
              alt="Vercel"
            />
            <h1>Vercel</h1>
          </div>
          <div className="p-4 flex items-center gap-2 rounded-lg border">
            <img
              src={javascript}
              className="w-10 object-contain h-10"
              alt="JavaScript"
            />
            <h1>JavaScript</h1>
          </div>
          <div className="p-4 flex items-center gap-2 rounded-lg border">
            <img
              src={github}
              className="w-10 object-contain h-10"
              alt="GitHub"
            />
            <h1>GitHub</h1>
          </div>
          <div className="p-4 flex items-center gap-2 rounded-lg border">
            <img src={figma} className="w-10 object-contain h-10" alt="Figma" />
            <h1>Figma</h1>
          </div>
          <div className="p-4 flex items-center gap-2 rounded-lg border">
            <img
              src={netlify}
              className="w-10 object-contain h-10"
              alt="Netlify"
            />
            <h1>Netlify</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
