import Navbar from "./Navbar";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import StarBorder from "./Reactbits/StarBorder";
import { BsArrowRight } from "react-icons/bs";
const Header = () => {
  return (
    <header className="px-8 md:px-28">
      <div className="relative flex flex-col">
        <div className="absolute top-0 w-full flex justify-center">
          <Navbar />
        </div>

        <div className="mt-36 md:mt-44 flex items-center justify-between  ">
          <h1
            className="text-5xl md:text-8xl font-bold 
  bg-gradient-to-r from-[#636363] via-[#f5f5f5] to-white
  bg-clip-text text-transparent"
          >
            Full-stack
          </h1>

          <div className="hidden developer md:flex items-center gap-2">
            <div className="px-24 text-base  py-2.5 border bg-[#f5f5f5] text-[#121212] rounded-full">
              <i>About Me</i>
            </div>
            <div className="p-3 text-base border bg-[#f5f5f5] text-[#121212] rounded-full">
              <BsArrowRight className="text-lg" />
            </div>
          </div>
        </div>

        <div className="md:items-end flex gap-9 md:gap-0 flex-col-reverse md:flex-row justify-between ">
          <div className="flex  developer md:hidden items-center gap-2">
            <div className="px-10  md:px-24 text-base  py-2.5 border bg-[#f5f5f5] text-[#121212] rounded-full">
              <i>About Me</i>
            </div>
            <div className="p-3 text-base border bg-[#f5f5f5] text-[#121212] rounded-full">
              <BsArrowRight className="text-lg" />
            </div>
          </div>
          <blockquote className="max-w-sm developer text-[#a6a6a6] italic">
            "You’re not going to be <span className="text-white">perfect</span>,
            but the important thing is to{" "}
            <span className="text-white">try</span> and be{" "}
            <span className="text-white"> honest.</span> "
            <br />
            <span className="not-italic text-sm text-gray-500">
              - Sean Maguire
            </span>
          </blockquote>

          <h1
            className="text-5xl md:text-8xl text-end font-bold 
  bg-gradient-to-r from-[#414040] via-[#f5f5f5] to-white 
  bg-clip-text text-transparent 
  md:text-white md:bg-none md:bg-clip-border"
          >
            Developer
          </h1>
        </div>

        <div className="mt-16 flex-1 space-x-5 flex-col space-y-5 md:space-y-0 md:flex-row md:flex md:space-x-10 md:items-center md:justify-center">
          <StarBorder
            as="button"
            color="white"
            speed="3s"
            className="custom-class flex items-center gap-2 rounded-full w-fit px-5 py-2"
          >
            <FaGithub />
            <p className="developer text-[#a6a6a6] text-sm">Github</p>
          </StarBorder>
          <StarBorder
            as="button"
            color="white"
            speed="3s"
            className="custom-class flex items-center gap-2 rounded-full w-fit px-5 py-2"
          >
            <FaLinkedin />
            <p className="developer text-[#a6a6a6] text-sm">Linkedin</p>
          </StarBorder>
          <StarBorder
            as="button"
            color="white"
            speed="3s"
            className="custom-class flex items-center gap-2 rounded-full w-fit px-5 py-2"
          >
            <FaInstagram />
            <p className="developer text-[#a6a6a6] text-sm">Instagram</p>
          </StarBorder>
        </div>
      </div>
    </header>
  );
};

export default Header;
