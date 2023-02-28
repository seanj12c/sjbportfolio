import React from "react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
const Contact = () => {
  return (
    <div
      id="contact"
      className="md:w-full mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-white"
    >
      <div className="">
        <h1 className="w-full text-3xl font-bold text-primary">
          Contact <span className="text-white">Me!</span>
        </h1>
        <h1 className="w-full text-lg text-white">
          If you want to create a project with me.
        </h1>
        <p className="py-4">
          I describe myself as a passionate developer who loves coding, open
          source, and the web platform. Aside from my job, I like to create and
          contribute to open source projects. That helps me to learn a ton of
          new stuff, grow as a developer and support other open source projects.
        </p>
        <div className="grid">
          <a
            href="tel:09652376005"
            className="hover:translate-x-2 duration-300"
          >
            +639-652-37-6005
          </a>
          <a
            href="mailto:buclatinseanjimwell@gmail.com"
            className="hover:translate-x-2 duration-300"
          >
            buclatinseanjimwell@gmail.com
          </a>
        </div>

        <div className="flex justify-between w-[35%] my-6">
          <a
            className="hover:text-primary duration-500"
            href="https://www.facebook.com/seanj12c"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillFacebook size={30} />
          </a>
          <a
            className="hover:text-primary duration-500"
            href="https://www.instagram.com/seanjimwell/"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillInstagram size={30} />
          </a>
          <a
            className="hover:text-primary duration-500"
            href="https://www.linkedin.com/in/sean-jimwell-buclatin-0a024a263/"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillLinkedin size={30} />
          </a>
        </div>
      </div>
      <div className="lg:col-span-3 flex justify-between">
        <ul>
          <li></li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
