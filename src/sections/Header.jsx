import Navbar from "../components/Navbar";
import GlassCard from "../components/GlassCard";
import FloatingMouse from "../components/FloatingMouse";
import HeaderThreads from "../components/Threads";
import StarBorder from "../components/Reactbits/StarBorder";
const Header = () => {
  return (
    <header
      id="main"
      className="relative overflow-hidden px-8 sm:px-20 md:px-14 lg:px-28"
    >
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <HeaderThreads />
      </div>
      <div className="relative flex flex-col">
        <div className="absolute top-0 w-full flex justify-center">
          <Navbar />
        </div>

        <div className="mt-36 flex justify-center md:mt-40 2xl:mt-40 ">
          <GlassCard />
        </div>

        <div className="flex flex-col justify-center 2xl:text-8xl mt-5">
          <h1 className="text-center text-[44px] lg:text-[74px] xl:text-[92px] lg:max-w-3xl xl:max-w-4xl xl:w-full  mx-auto leading-none">
            Hi, Im Kuncoro Website Developer
          </h1>
          <p className="text-[#a6a6a6] mx-auto md:max-w-3xl text-base mt-5 text-center">
            Building responsive, scalable web applications with modern
            technologies, focusing on clean code and intuitive user experiences.
          </p>
        </div>

        <div className="flex  justify-center items-start gap-3 md:gap-6 w-full mt-10">
          <StarBorder
            as="a"
            href="/cv/Khitan-Hesthi-Kuncoro-CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download="Khitan-Hesthi-Kuncoro-CV.pdf"
            color="white"
            speed="3s"
            className=" rounded-full px-6 py-3"
            aria-label="Download CV Khitan Hesthi Kuncoro"
          >
            <p className=" text-[#a6a6a6] text-sm xl:text-sm  2xl:text-base">
              Download CV
            </p>
          </StarBorder>

          <StarBorder
            as="a"
            href="#projects"
            color="white"
            speed="3s"
            className="group flex items-center justify-center gap-2 
             rounded-full px-6 py-2 
             text-[#a6a6a6] hover:text-white 
             transition-colors duration-300"
          >
            Projects
          </StarBorder>
        </div>

        <div className="hidden  pb-4 lg:flex mt-24 md:mt-10 2xl:mt-10  items-center justify-center gap-4 text-sm tracking-widest">

          <span className=" text-[#a6a6a6] ">Scroll down</span>
          <div className="2xl:w-60 w-full md:w-40 h-px md:h-[0.3px] bg-current opacity-20" />

          <FloatingMouse />

          <div className="2xl:w-60 w-full md:w-40 h-px md:h-[0.3px] bg-current opacity-20" />
          <span className=" text-[#a6a6a6] whitespace-nowrap">
            to see projects
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
