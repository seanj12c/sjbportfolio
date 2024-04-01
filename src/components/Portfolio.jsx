import React from "react";
import Edoagenda from "../assets/edoagenda.gif";
import Mybank from "../assets/mybank.gif";
import Kitscratch from "../assets/kitscratch.gif";
import Cnc from "../assets/cnc.gif";
import Devstacks from "../assets/devstacks.gif";
import Mobilelegends from "../assets/mobilelegends.gif";
const Portfolio = () => {
  return (
    <div
      id="portfolio"
      className="w-full h-full bg-base-300 px-4  md:py-40 pt-24 pb-7"
    >
      <div className="text-center">
        <p>Portfolio</p>
        <h1 className="text-4xl">
          Latest <span className="text-primary">Project</span>
        </h1>
      </div>

      <div className="md:max-w-[1240px] max-w-[450px] mx-auto grid md:grid-cols-3 gap-5">
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              className="pointer-events-none select-none object-cover rounded-2xl h-[220px] w-[500px]"
              src={Edoagenda}
              alt="edoagenda"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Edo Agenda Clone
              <div className="badge badge-accent">NEW</div>
            </h2>
            <p>
              The smart agenda for freelancers, creatives and people who do
              great work. Organize your day and free your creative side.
            </p>
            <div className="card-actions justify-end">
              <div className="btn btn-primary btn-xs">
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

        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              className="pointer-events-none select-none object-cover rounded-2xl h-[220px] w-[500px]"
              src={Mybank}
              alt="mybank"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              My Bank
              <div className="badge badge-accent">NEW</div>
            </h2>
            <p>
              The smart agenda for freelancers, creatives and people who do
              great work. Organize your day and free your creative side.
            </p>
            <div className="card-actions justify-end">
              <div className="btn btn-primary btn-xs">
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

        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              className="pointer-events-none select-none object-cover rounded-2xl h-[220px] w-[500px]"
              src={Kitscratch}
              alt="KitScratch"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Kit Scratch
              <div className="badge badge-accent">NEW</div>
            </h2>
            <p>
              The smart agenda for freelancers, creatives and people who do
              great work. Organize your day and free your creative side.
            </p>
            <div className="card-actions justify-end">
              <div className="btn btn-primary btn-xs">
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

        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              className="pointer-events-none select-none object-cover rounded-2xl h-[220px] w-[500px]"
              src={Mobilelegends}
              alt="KitScratch"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Mobile Legends Unofficial
              <div className="badge badge-accent">NEW</div>
            </h2>
            <p>
              The smart agenda for freelancers, creatives and people who do
              great work. Organize your day and free your creative side.
            </p>
            <div className="card-actions justify-end">
              <div className="btn btn-primary btn-xs">
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

        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              className="pointer-events-none select-none object-cover rounded-2xl h-[220px] w-[500px]"
              src={Devstacks}
              alt="Devstacks"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Dev Stacks
              <div className="badge badge-accent">NEW</div>
            </h2>
            <p>
              The smart agenda for freelancers, creatives and people who do
              great work. Organize your day and free your creative side.
            </p>
            <div className="card-actions justify-end">
              <div className="btn btn-primary btn-xs">
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

        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              className="pointer-events-none select-none object-cover rounded-2xl h-[220px] w-[500px]"
              src={Cnc}
              alt="Caffeine and Chapters"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Caffeine and Chapters
              <div className="badge badge-accent">NEW</div>
            </h2>
            <p>
              The smart agenda for freelancers, creatives and people who do
              great work. Organize your day and free your creative side.
            </p>
            <div className="card-actions justify-end">
              <div className="btn btn-primary btn-xs">
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
      </div>
    </div>
  );
};

export default Portfolio;
