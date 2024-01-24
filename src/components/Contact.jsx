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
      className="md:w-full h-[90vh] items-center mx-auto py-16 justify-center lg:text-start text-center flex text-black"
    >
      <div className="max-w-3xl">
        <h1 className="w-full text-3xl lg:text-5xl pb-3 font-bold text-primary text-center">
          Contact <span className="text-black">Me!</span>
        </h1>
        <h1 className="w-full text-lg text-black">
          If you want to create a project with me.
        </h1>
        <p className="py-4">
          Hi, my name is Sean and I'm a web developer with experience in ReactJS
          and Tailwind CSS. I also have a strong foundation in HTML, CSS, and
          JavaScript. I specialize in creating modern, responsive web
          applications that are easy to use and visually appealing. I have a
          passion for staying up-to-date with the latest web development trends
          and technologies. My attention to detail and dedication to quality
          ensures that my projects are always delivered on time and to the
          highest standard. If you're interested in working together or have any
          web development needs, please feel free to contact me. I'm excited to
          hear about your project and discuss how we can work together to bring
          your vision to life.
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

        <div className="flex justify-center lg:justify-start gap-4 my-6">
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
    </div>
  );
};

export default Contact;
