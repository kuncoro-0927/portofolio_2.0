import React from "react";
import ImageCard from "./ImageCard";
import { FaGithub } from "react-icons/fa";
import { BsArrowUpRight } from "react-icons/bs";
const AboutMe = () => {
  return (
    <section id="about" className=" md:mt-24 px-8 md:px-28 font-bold">
      <div className="md:flex items-start">
        <h1 className="text-3xl md:text-5xl ">About Me</h1>
        <div className="mt-4 md:mt-0 md:ml-40 max-w-sm">
          <p className="text-base text-[#a6a6a6] font-normal developer">
            Hi, I’m Kuncoro. I am a <i className="text-white">fresh graduate</i>{" "}
            in Information Technology with a strong interest in{" "}
            <i className="text-white">web development</i> and{" "}
            <i className="text-white">modern technologies</i> .
          </p>
        </div>
      </div>

      <div className="mt-10 md:mt-20 gap-y-10 md:gap-y-0 flex-col-reverse flex md:flex-row items-start justify-between">
        <div className="gap-y-7 flex-col flex w-full">
          <div className="border bg-[#f5f5f5] text-[#3d3d3d]  px-4 py-5 rounded-3xl text-xs md:text-sm font-normal w-fit">
            <h1 className="mb-2 text-lg md:text-xl developer ">Front-end</h1>
            <span className="">
              Javascript / Typescript / React / Vue / Redux Toolkit / Next Js
            </span>
          </div>

          <div className="flex items-center gap-8 md:gap-28 text-xs md:text-sm font-normal">
            <div className="border  w-fit  px-4 py-5 rounded-3xl">
              <h1 className="mb-2 text-lg md:text-xl developer text-[#a6a6a6]">
                Styles
              </h1>
              <span className="">
                SASS / SCSS / Tailwind / <br /> Material Ui / Ant.D / Shadcn
              </span>
            </div>
            <div className="flex items-center">
              <div className=" border p-3 rounded-full border-[#f5f5f5] w-fit">
                <FaGithub className="text-lg md:text-xl" />
              </div>
              <div className="absolute ml-9 bg-[#f5f5f5] border p-3 rounded-full text-[#3d3d3d] w-fit">
                <BsArrowUpRight className="text-lg md:text-xl" />
              </div>
            </div>
          </div>

          <div className="border   px-4 py-5 rounded-3xl text-xs md:text-sm font-normal w-fit">
            <h1 className="mb-2 text-lg md:text-xl developer text-[#a6a6a6] ">
              Back-end
            </h1>
            <span className="">
              PHP / Laravel / Node / Express / Flask / Golang / MySQL /
              <br /> PostgreSQL / MongoDb
            </span>
          </div>
        </div>
        <ImageCard />
      </div>
    </section>
  );
};

export default AboutMe;
