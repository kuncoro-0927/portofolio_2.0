import Navbar from "../components/Navbar";
import { Link as ScrollLink } from "react-scroll";
import GlassCard from "../components/FramerMotion/GlassCard";
import FloatingIcon from "../components/FramerMotion/FloatingIcon";
import FlipGlassButton from "../components/FramerMotion/GlassButton";
import HeaderThreads from "../components/Threads";
const Header = () => {
  return (
    <header
      id="main"
      className="relative overflow-hidden px-8 sm:px-28 md:px-24 lg:px-28"
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
          <h1 className="text-center text-[44px] lg:text-[74px] xl:text-[92px] xl:max-w-3xl xl:w-full xl:mx-auto leading-none">
            Building Beautiful Modern Web Apps
          </h1>
          <p className="text-[#a6a6a6] text-base mt-5 text-center">
            Elevate your digital presence with intuitive and polished user
            interfaces. Showcase your <br />
            vision through seamless interactions and high-performance frontend
            solutions.
          </p>
        </div>

        <div className="flex justify-center items-center gap-3 md:gap-6 w-full mt-10">
          {" "}
          <ScrollLink
            to="projects" // ID target section kamu
            smooth={true}
            duration={500}
            offset={-80}
            spy={true}
            component="div" // Trik agar tidak bentrok dengan tag <a> di dalam button
            className="cursor-pointer"
          >
            <FlipGlassButton>Download CV</FlipGlassButton>
          </ScrollLink>
          <ScrollLink
            to="projects" // ID target section kamu
            smooth={true}
            duration={500}
            offset={-80}
            spy={true}
            component="div" // Trik agar tidak bentrok dengan tag <a> di dalam button
            className="cursor-pointer"
          >
            <FlipGlassButton>See Projects</FlipGlassButton>
          </ScrollLink>
        </div>

        <div className="hidden  pb-4 lg:flex mt-24 md:mt-10 2xl:mt-10  items-center justify-center gap-4 text-sm tracking-widest">
          {/* Kiri */}
          <span className=" text-[#a6a6a6] ">Scroll down</span>
          <div className="2xl:w-60 w-full md:w-40 h-px md:h-[0.3px] bg-current opacity-20" />

          {/* Icon */}
          <FloatingIcon />

          {/* Kanan */}
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
