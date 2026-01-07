import React from "react";
import { Link as ScrollLink } from "react-scroll";
const Navbar = () => {
  return (
    <nav className="flex w-full py-6 developer text-sm items-center justify-between relative z-100">
      <div className="text-left">
        <h1 className="text-left md:text-sm xl:text-sm md:text-red-500 xl:text-green-500 2xl:text-yellow-500 2xl:text-lg text-base leading-tight">
          Khitan Hesthi <br /> Kuncoro
        </h1>
      </div>

      <div className="w-full hidden absolute text-xs sm:text-sm xl:text-sm  2xl:text-lg md:flex justify-center text-white">
        <div className="flex items-center gap-7">
          <ScrollLink
            to="about"
            smooth={true}
            duration={500}
            offset={-80}
            spy={true}
            activeClass="text-blue-400 font-semibold"
            className="cursor-pointer hover:text-[#a6a6a6] duration-300 transition"
          >
            About Me
          </ScrollLink>

          <ScrollLink
            to="projects"
            smooth={true}
            duration={500}
            offset={-80}
            spy={true}
            activeClass="text-blue-400 font-semibold"
            className="cursor-pointer hover:text-[#a6a6a6] duration-300 transition"
          >
            Projects
          </ScrollLink>

          <ScrollLink
            to="certification"
            smooth={true}
            duration={500}
            offset={-80}
            spy={true}
            activeClass="text-blue-400 font-semibold"
            className="cursor-pointer hover:text-[#a6a6a6] duration-300 transition"
          >
            Certification
          </ScrollLink>

          <ScrollLink
            to="contact"
            smooth={true}
            duration={500}
            offset={-80}
            spy={true}
            activeClass="text-blue-400 font-semibold"
            className="cursor-pointer hover:text-[#a6a6a6] duration-300 transition"
          >
            Contact
          </ScrollLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
