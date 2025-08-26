import React from "react";
import ImageCard from "./ImageCard";
import { FaGithub } from "react-icons/fa";
import { BsArrowUpRight } from "react-icons/bs";
const AboutMe = () => {
  return (
    <section className="text-5xl px-28 font-bold">
      <div className="flex items-start">
        <h1>About Me</h1>
        <div className=" ml-40 max-w-sm">
          <p className="text-base text-[#a6a6a6] font-normal developer">
            Hi, I’m Kuncoro. I am a <i className="text-white">fresh graduate</i>{" "}
            in Information Technology with a strong interest in{" "}
            <i className="text-white">web development</i> and{" "}
            <i className="text-white">modern technologies</i> .
          </p>
        </div>
      </div>

      <div className="mt-20 flex items-start justify-between">
        <ImageCard />
        <div className="gap-y-7 flex-col flex">
          <div className="border bg-[#f5f5f5] text-[#3d3d3d]  px-4 py-5 rounded-3xl text-sm font-normal w-fit">
            <h1 className="mb-2 text-xl developer ">Front-end</h1>
            <span className="">
              Javascript / Typescript / React js / Vue Js / Redux Toolkit / Next
              Js /
            </span>
          </div>

          <div className="flex items-center gap-28 text-sm font-normal">
            <div className="border  w-fit  px-4 py-5 rounded-3xl">
              <h1 className="mb-2 text-xl developer text-[#a6a6a6]">Styles</h1>
              <span className="">
                SASS / SCSS / Tailwind / <br /> Material Ui / Ant.D / Shadcn
              </span>
            </div>
            <div className="flex items-center">
              <div className=" border p-3 rounded-full border-[#f5f5f5] w-fit">
                <FaGithub className="text-xl" />
              </div>
              <div className="absolute ml-9 bg-[#f5f5f5] border p-3 rounded-full text-[#3d3d3d] w-fit">
                <BsArrowUpRight className="text-xl" />
              </div>
            </div>
          </div>

          <div className="border   px-4 py-5 rounded-3xl text-sm font-normal w-fit">
            <h1 className="mb-2 text-xl developer text-[#a6a6a6] ">Back-end</h1>
            <span className="">
              PHP / Laravel / Node / Express / Flask / Golang / MySQL /
              <br /> PostgreSQL / MongoDb
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
