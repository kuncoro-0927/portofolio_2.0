import React from "react";
import { Link as ScrollLink } from "react-scroll";
const Navbar = () => {
  return (
    <nav className="flex w-full py-6 developer text-sm items-center justify-between relative z-100">
      <div className="text-left">
        <h1 className="text-left md:text-sm xl:text-sm  2xl:text-base text-[#a6a6a6]  text-base leading-tight">
          Portofolio
        </h1>
      </div>

      <div className="w-full hidden absolute text-xs sm:text-sm xl:text-sm  2xl:text-[15px] md:flex justify-center">
        <div className="flex items-center gap-7">
       
          <ScrollLink
            to="about"
            smooth={true}
            duration={500}
            offset={-80}
            spy={true}
            activeClass="text-blue-400 font-semibold"
            className="cursor-pointer text-[#a6a6a6] hover:text-[#f5f5f5] duration-300 transition"
          >
            Tentang Saya
          </ScrollLink>

          <ScrollLink
            to="projects"
            smooth={true}
            duration={500}
            offset={-80}
            spy={true}
            activeClass="text-blue-400 font-semibold"
            className="cursor-pointer text-[#a6a6a6] hover:text-[#f5f5f5] duration-300 transition"
          >
            Project
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
            activeClass="text-blue-400 font-semibold"
            className="cursor-pointer text-[#a6a6a6] hover:text-[#f5f5f5] duration-300 transition"
          >
            Kontak
          </ScrollLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
