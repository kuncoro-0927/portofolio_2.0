import React from "react";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import StarBorder from "../components/Reactbits/StarBorder";
import { Link as ScrollLink } from "react-scroll";
import FlipGlassButton from "../components/FramerMotion/GlassButton";
const Contact = () => {
  return (
    <section className="mt-20  ">
      <div className="relative  text-white flex items-center overflow-hidden">
        <div className="absolute xl:top-0 -translate-y-20 md:-translate-y-0 -right-45 md:-left-20 md:top-16 xl:-left-24 w-[350px] h-[350px] md:w-[600px] md:h-[600px]  xl:w-[700px] xl:h-[700px]   border-[0.1px] border-[#a6a6a6] rounded-full" />

        <div className="pb-10 md:pt-36 w-full mx-4 sm:mx-24 md:mx-24 lg:mx-28">
          <div className="flex-col-reverse flex md:flex-row md:justify-between  md:items-center">
            <div className="relative mt-10 md:mt-0 z-10  ">
              <h1 className="text-4xl md:text-4xl xl:text-7xl font-bold leading-tight">
                Khitan Hesthi <br />{" "}
                <p className="flex  items-center justify-between sm:justify-start sm:gap-14 md:gap-14">
                  <span className=" font-normal text-[15px] md:text-base 2xl:text-lg text-[#a6a6a6]">
                    frontend <br /> developer
                  </span>
                  <span>Kuncoro </span>
                </p>
              </h1>
            </div>

            <div className="relative z-10 ">
              <h1 className="md:-translate-y-20 text-[15px]   mb-7 md:absolute md:text-base 2xl:text-lg">
                .../Contacts...
              </h1>

              <ul className=" space-x-8 text-[15px] 2xl:text-[15px] flex items-center md:justify-between mb-5">
                <li>
                  {" "}
                  <ScrollLink
                    to="header"
                    smooth={true}
                    duration={500}
                    offset={-80}
                    spy={true}
                    className="cursor-pointer text-[#a6a6a6] hover:text-[#f5f5f5] duration-300 transition"
                  >
                    Main
                  </ScrollLink>
                </li>
                <li>
                  {" "}
                  <ScrollLink
                    to="about"
                    smooth={true}
                    duration={500}
                    offset={-80}
                    spy={true}
                    className="cursor-pointer text-[#a6a6a6] hover:text-[#f5f5f5] duration-300 transition"
                  >
                    About
                  </ScrollLink>
                </li>
                <li>
                  {" "}
                  <ScrollLink
                    to="projects"
                    smooth={true}
                    duration={500}
                    offset={-80}
                    spy={true}
                    className="cursor-pointer text-[#a6a6a6] hover:text-[#f5f5f5] duration-300 transition"
                  >
                    Projects
                  </ScrollLink>
                </li>
                <li>
                  {" "}
                  <ScrollLink
                    to="certification"
                    smooth={true}
                    duration={500}
                    offset={-80}
                    spy={true}
                    className="cursor-pointer text-[#a6a6a6] hover:text-[#f5f5f5] duration-300 transition"
                  >
                    Courses
                  </ScrollLink>
                </li>
              </ul>
              <div className=" bg-black relative z-10 border-[0.1px] border-[#a6a6a6] px-5 py-5 w-fit  xl:w-[350px] rounded-3xl">
                <h1 className=" text-[#a6a6a6] text-lg 2xl:text-xl">Site</h1>
                <p className="text-[15px] 2xl:text-[15px] mt-2 text-[#f5f5f5]">
                  Designed & Built by Me / <br /> Design inspired by Taisya /{" "}
                  <br /> Built with React & Tailwind
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="mt-16 flex-wrap flex justify-center gap-5 md:justify-between  md:space-y-0 md:flex-row md:flex xl:space-x-10 md:items-center xl:justify-center">
              <FlipGlassButton className="flex">
                <FaGithub className="xl:text-xl 2xl:text-2xl" />
                Github
              </FlipGlassButton>

              <FlipGlassButton className="flex">
                <FaLinkedin className="xl:text-xl 2xl:text-2xl" />
                Linkedin
              </FlipGlassButton>

              <FlipGlassButton>
                <FaInstagram className="xl:text-xl 2xl:text-2xl" />
                Instagram
              </FlipGlassButton>

              <FlipGlassButton>
                 <IoMdMail className="xl:text-xl 2xl:text-2xl" />
                Email
              </FlipGlassButton>

             
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
