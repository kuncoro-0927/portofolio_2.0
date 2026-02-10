import React from "react";
import ImageCard from "../components/ImageCard";
import { FaGithub } from "react-icons/fa";
import { BsArrowUpRight } from "react-icons/bs";
const AboutMe = () => {
  return (
    <section
      id="about"
      className="mt-20 md:mt-24 mx-4 sm:mx-28 md:mx-24 lg:mx-28"
    >
      <div className="lg:relative md:flex items-start">
        <h1 className="developer text-[15px] sm:text-base 2xl:text-lg">
          .../About Me...
        </h1>
        <div className="mt-4 md:mt-0 md:ml-auto lg:absolute lg:left-1/2 lg:-translate-x-1/2  w-[350px] max-w-sm">
          <p className="text-base 2xl:text-lg text-[#a6a6a6] font-normal developer">
            Hi, I’m Khitan Hesthi Kuncoro. I am a{" "}
            <i className="text-white">fresh graduate</i> in Information
            Technology with a strong interest in{" "}
            <i className="text-white">web development</i> and{" "}
            <i className="text-white">modern technologies</i> .
          </p>
        </div>
      </div>

      <div className="mt-10 md:mt-10 lg:mt-24 xl:mt-28 2xl:mt-32 md:gap-5 gap-y-10 md:gap-y-0 flex-col-reverse flex md:flex-row items-start justify-between">
        <div className="gap-y-7 flex-col flex w-full">
          <div className="border bg-[#f5f5f5] text-[#3d3d3d]  px-4 py-5 rounded-3xl text-[15px] md:text-[15px] 2xl:text-lg font-normal w-fit">
            <h1 className="mb-2 text-lg md:text-xl developer ">Front-end</h1>
            <span className="">
              Javascript / React / Redux Toolkit
            </span>
          </div>

          <div className="flex items-center justify-between md:gap-16 xl:gap-28 text-[15px] md:text-[15px] 2xl:text-lg font-normal">
            <div className="border  w-fit  px-4 py-5 rounded-3xl">
              <h1 className="mb-2 text-lg md:text-xl developer text-[#a6a6a6]">
                Styles
              </h1>
              <span className="">
                CSS / Tailwind / Material Ui 
              </span>
            </div>
            <a
              href="https://github.com/kuncoro-0927"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex items-center">
                <div className=" border p-3 translate-x-3 rounded-full border-[#f5f5f5] w-fit">
                  <FaGithub className="text-lg md:text-xl 2xl:text-2xl" />
                </div>
                <div className=" bg-[#f5f5f5] border p-3 rounded-full text-[#3d3d3d] w-fit">
                  <BsArrowUpRight className="text-lg md:text-xl 2xl:text-2xl" />
                </div>
              </div>
            </a>
          </div>

          <div className="border   px-4 py-5 rounded-3xl text-[15px] md:text-[15px] 2xl:text-lg font-normal w-fit">
            <h1 className="mb-2 text-lg md:text-xl developer text-[#a6a6a6] ">
              Back-end
            </h1>
            <span className="">
              Laravel / Express / MySQL 
            </span>
          </div>
        </div>
        <ImageCard />
      </div>
    </section>
  );
};

export default AboutMe;
