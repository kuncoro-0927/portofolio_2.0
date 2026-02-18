import React from "react";
import { FaGithub } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";
const Navbar = () => {
  return (
    <nav className="flex w-full py-6 text-sm items-center justify-between relative">
      <div className="text-left">
        <h1 className="text-left md:text-sm xl:text-sm  2xl:text-base text-[#a6a6a6]  text-base leading-tight">
          Portofolio
        </h1>
      </div>

      <div className=" flex-1 hidden  text-[15px] xl:text-sm  2xl:text-[15px] md:flex justify-center">
        <div className="flex items-center gap-7">
          <ScrollLink
            to="main"
            smooth={true}
            duration={500}
            offset={-80}
            spy={true}
            className="cursor-pointer text-[#a6a6a6] hover:text-[#f5f5f5] duration-300 transition"
          >
            Main
          </ScrollLink>

          <ScrollLink
            to="about"
            smooth={true}
            duration={500}
            offset={-80}
            spy={true}
            className="cursor-pointer text-[#a6a6a6] hover:text-[#f5f5f5] duration-300 transition"
          >
            About Me
          </ScrollLink>

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

          {/* <ScrollLink
            to="certification"
            smooth={true}
            duration={500}
            offset={-80}
            spy={true}
            activeClass="text-blue-400 font-semibold"
            className="cursor-pointer hover:text-[#a6a6a6] duration-300 transition"
          >
            Sertifikat
          </ScrollLink> */}

          <ScrollLink
            to="contact"
            smooth={true}
            duration={500}
            offset={-80}
            spy={true}
            className="cursor-pointer text-[#a6a6a6] hover:text-[#f5f5f5] duration-300 transition"
          >
            Contact
          </ScrollLink>
        </div>
      </div>

      <div className="text-right">
        <a
          href="https://github.com/kuncoro-0927"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer"
        >
          <FaGithub className="text-xl" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
