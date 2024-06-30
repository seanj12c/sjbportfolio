import React from "react";
import Edoagenda from "../assets/edoagenda.gif";
import Mybank from "../assets/mybank.gif";
import Kitscratch from "../assets/kitscratch.gif";
import Cnc from "../assets/cnc.gif";
import Devstacks from "../assets/devstacks.gif";
import Mobilelegends from "../assets/mobilelegends.gif";
import El from "../assets/el.gif";
import Bog from "../assets/bog.gif";
const Portfolio = () => {
  return (
    <div
      id="portfolio"
      className="w-full h-full bg-base-300 px-4  md:py-40 pt-24 pb-7"
    >
      <div className="text-center">
        <p>Portfolio</p>
        <h1 className="text-4xl">
          Latest <span className="text-accent">Project</span>
        </h1>
      </div>

      <div className="grid justify-center grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        <div className="card  bg-base-100 mx-auto shadow-xl">
          <figure>
            <img
              className="pointer-events-none select-none object-cover "
              src={Edoagenda}
              alt="edoagenda"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Edo Agenda Clone</h2>
            <p>
              The smart agenda for freelancers, creatives and people who do
              great work. Organize your day and free your creative side.
            </p>
            <div className="card-actions justify-end">
              <div className="btn btn-accent btn-xs">
                <a
                  id="link"
                  href="https://edoagendabysean.netlify.app"
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="card  bg-base-100 mx-auto shadow-xl">
          <figure>
            <img
              className="pointer-events-none select-none object-cover "
              src={Mybank}
              alt="mybank"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">My Bank</h2>

            <p>
              Our banking as a Service platform has everything for you including
              investment, trading and saving for you to build your own banking
              experience.
            </p>
            <div className="card-actions justify-end">
              <div className="btn btn-accent btn-xs">
                <a
                  id="link"
                  href="https://mybankbysean.netlify.app"
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="card  bg-base-100 mx-auto shadow-xl">
          <figure>
            <img
              className="pointer-events-none select-none object-cover "
              src={Kitscratch}
              alt="KitScratch"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Kit Scratch</h2>
            <p>
              A group of talented students who are passionate about developing
              mobile apps, web apps, and UI/UX designs. We are a team of
              creative thinkers who are dedicated to delivering innovative
              solutions to our clients.
            </p>
            <div className="card-actions justify-end">
              <div className="btn btn-accent btn-xs">
                <a
                  id="link"
                  href="https://kitscratch.netlify.app"
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="card  bg-base-100 mx-auto shadow-xl">
          <figure>
            <img
              className="pointer-events-none select-none object-cover "
              src={Mobilelegends}
              alt="KitScratch"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Mobile Legends Unofficial</h2>
            <p>
              Mobile Legends: Bang Bang is an exhilarating, action-packed mobile
              game that has taken the world by storm. This website is created by
              me because Mobile Legends don't have landing page.
            </p>
            <div className="card-actions justify-end">
              <div className="btn btn-accent btn-xs">
                <a
                  id="link"
                  href="https://mobilelegendsunofficial.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="card  bg-base-100 mx-auto shadow-xl">
          <figure>
            <img
              className="pointer-events-none select-none object-cover "
              src={Devstacks}
              alt="Devstacks"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Dev Stacks</h2>
            <p>
              Unleash Your Coding Potential for Free! Dive into our handpicked
              selection of resources, tutorials, and expert tips. Ignite your
              coding creativity and build without boundaries!
            </p>
            <div className="card-actions justify-end">
              <div className="btn btn-accent btn-xs">
                <a
                  id="link"
                  href="https://dev-stacks.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="card  bg-base-100 mx-auto shadow-xl">
          <figure>
            <img
              className="pointer-events-none select-none object-cover "
              src={Cnc}
              alt="Caffeine and Chapters"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Caffeine and Chapters</h2>
            <p>
              Elevate your reading experience with the perfect blend of curated
              books and exceptional brews. Explore our literary haven, where
              every sip enhances the magic of each chapter. Immerse yourself in
              a world where words and caffeine unite for a uniquely enriching
              escape.
            </p>
            <div className="card-actions justify-end">
              <div className="btn btn-accent btn-xs">
                <a
                  id="link"
                  href="https://caffeineandchapters.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="card  bg-base-100 mx-auto shadow-xl">
          <figure>
            <img
              className="pointer-events-none select-none object-cover "
              src={El}
              alt="Caffeine and Chapters"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">E-Learning Studio Website</h2>
            <p>
              Our E-Learning hub is your bridge towards academic innovation. We
              offer free access to facilities and resources that empower
              flexible learning and multimedia project production. Whether
              you're a seasoned student or just starting your journey, we invite
              you to thrive with us.
            </p>
            <div className="card-actions justify-end">
              <div className="btn btn-accent btn-xs">
                <a
                  id="link"
                  href="https://elstudio.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="card  bg-base-100 mx-auto shadow-xl">
          <figure>
            <img
              className="pointer-events-none select-none object-cover "
              src={Bog}
              alt="Caffeine and Chapters"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Bacoor Ocean Gem Market</h2>
            <p>
              At Bacoor Ocean Gem Market , we're passionate about bringing the
              ocean's finest treasures to your table. Our journey began with a
              deep love for the sea and a commitment to making the flavors of
              the ocean accessible to all seafood enthusiasts.
            </p>
            <div className="card-actions justify-end">
              <div className="btn btn-accent btn-xs">
                <a
                  id="link"
                  href="https://bacoorogmarket.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
