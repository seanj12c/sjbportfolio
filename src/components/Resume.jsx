import React from "react";
import { CiPhone } from "react-icons/ci";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import one from "../assets//certificate/1.jpg";
import two from "../assets//certificate/2.jpg";

const Resume = () => {
  return (
    <div className="container mx-auto px-4">
      <header className="flex justify-center gap-10">
        <div>
          <h1 className="text-4xl font-bold">Sean Jimwell Buclatin</h1>
          <p className="text-lg">Web Developer</p>
          <p className="flex items-center gap-2">
            <CiPhone /> +639 652 37 6005
          </p>
        </div>
      </header>
      <h1 className="flex items-center md:text-lg gap-1 font-bold">
        Educational Background <hr className="w-10" />
      </h1>
      <section className="border my-2 p-6 rounded-lg">
        <div>
          <h3 className="text-xl font-bold">
            <span className="text-accent">College</span> - Bachelor of Science
            in Information Technology Cavite State University - CCAT Campus
          </h3>
          <p className="text-lg">2020-2024 - Graduated</p>
        </div>
        <div>
          <h3 className="text-xl font-bold">
            <span className="text-accent">Senior High </span> - TVL - Computer
            Programming Luis Y. Ferrer Jr. Senior High School
          </h3>
          <p className="text-lg">2018-2020 - Graduated</p>
        </div>
        <div>
          <h3 className="text-xl font-bold">
            <span className="text-accent">Junior High</span> Governor Ferrer
            Memorial National High School - Main
          </h3>
          <p className="text-lg">2014-2018 - Graduated</p>
        </div>
        <div>
          <h3 className="text-xl font-bold">
            <span className="text-accent">Elementary</span> Juliano C. Brosas
            Elementary School
          </h3>
          <p className="text-lg">2007-2014 - Graduated</p>
        </div>
      </section>
      <h1 className="flex items-center md:text-lg gap-1 font-bold">
        Experiences <hr className="w-10" />
      </h1>
      <section className="border p-6 rounded-lg mt-4">
        <ul class="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
          <li>
            <div class="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="h-5 w-5"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <div class="timeline-start md:text-end mb-10">
              <time class="font-mono italic">2022-Present</time>
              <div class="text-lg font-black">Freelance Web Developer</div>
              I've been working as a freelance web developer since my third year
              of college till now. My coding abilities have improved and I've
              received significant real-world experience by balancing school and
              client tasks. My career as a freelance developer has been one of
              constant progression, from creating elegant layouts to
              implementing detailed functionality, and it has resulted in a
              portfolio that showcases both my hands-on skill and academic
              understanding.
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div class="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="h-5 w-5"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <div class="timeline-end mb-10">
              <time class="font-mono italic">2024 -(486 Hours) </time>
              <div class="text-lg font-black">
                OJT | E-Learning Studio | Web Developer
              </div>
              During the On-the-Job Training (OJT) at E-Learning Studio, I
              handled the responsibilities of a web developer. My main duty was
              to revive an inactive website by carefully fixing problems and
              errors. In addition, I had the honour of designing a new website
              for the studio, enhancing its online visibility and enhancing user
              access. This experience not only improved my technical proficiency
              but also cultivated a deeper understanding of developing websites
              in the field of information technology.
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div class="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="h-5 w-5"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <div class="timeline-start md:text-end mb-10">
              <time class="font-mono italic">2019 - (80 Hours)</time>
              <div class="text-lg font-black">
                Work Immersion | Provincial Information & Communications
                Technology Office | Programmer
              </div>
              I started on the journey as a trainee programmer at the Provincial
              Information & Communications Technology Office during my time in
              Senior High School, dedicating 80 hours to the task. Although I
              lack experience in the subject, I am interested about acquiring
              knowledge and making valuable contributions to efforts that
              connect technology and education. This position is the beginning
              of my career journey, as each day offers a chance for advancement
              and discovery in the field of programming.
            </div>
            <hr />
          </li>
        </ul>
      </section>

      <h1 className="flex mt-2 items-center md:text-lg gap-1 font-bold">
        Certificate <hr className="w-10" />
      </h1>

      <div className="flex border px-2 rounded-lg mt-2 flex-col md:flex-row items-center justify-around">
        <Carousel
          className="py-2"
          autoPlay={true}
          infiniteLoop={true}
          interval={3000}
          showStatus={false}
          showThumbs={false}
          showArrows={false}
          dynamicHeight={false}
        >
          <div>
            <img
              className="w-full max-w-lg object-cover rounded-lg"
              src={one}
              alt="Slide 1"
            />
          </div>
          <div>
            <img
              className="w-full max-w-lg object-cover rounded-lg"
              src={two}
              alt="Slide 2"
            />
          </div>
        </Carousel>

        <section className=" p-6 rounded-lg mt-4">
          <ul class="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
            <li>
              <div class="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="h-5 w-5"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <div class="timeline-start md:text-end">
                <time class="font-mono italic">SY 2022-2023</time>
                <div class="text-lg font-black">Vice President Lister</div>
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div class="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="h-5 w-5"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <div class="timeline-end">
                <time class="font-mono italic">May 2023</time>
                <div class="text-lg font-black">
                  Imagine, Code, Create: Training and Workshop on micro:bit and
                  micro:maqueen
                </div>
              </div>
              <hr />
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Resume;
