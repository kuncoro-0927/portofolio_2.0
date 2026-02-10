import Navbar from "../components/Navbar";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import StarBorder from "../components/Reactbits/StarBorder";
import { BsArrowUpRight } from "react-icons/bs";
import AnimatedContent from "../components/Reactbits/AnimatedContent";
import { useEffect, useRef } from "react"; // Tambahkan useRef & useEffect
import Typed from "typed.js";
import FlipButton from "../components/FramerMotion/FlipButton";
import FlipSocialButton from "../components/SocialButton";
import FloatingIcon from "../components/FramerMotion/FloatingIcon";
const Header = () => {
  const elFrontend = useRef(null);
  const elDeveloper = useRef(null);

  useEffect(() => {
    const typed1 = new Typed(elFrontend.current, {
      strings: ["Frontend"],
      typeSpeed: 80,
      showCursor: false, // Matikan kursor agar tidak numpuk
      onComplete: () => {
        // Setelah "Frontend" selesai, baru mulai "Developer"
        new Typed(elDeveloper.current, {
          strings: ["Developer"],
          typeSpeed: 80,
          showCursor: false,
        });
      },
    });

    return () => {
      typed1.destroy();
    };
  }, []);

  return (
    <header className="px-8 sm:px-28 md:px-24 lg:px-28">
      <div className="relative flex flex-col">
        <div className="absolute top-0 w-full flex justify-center">
          <Navbar />
        </div>

        <div className="mt-36 md:mt-48 2xl:mt-52 flex items-center justify-between  ">
          <h1
            className="text-6xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[150px] font-extrabold 
             bg-gradient-to-r from-[#4a4a4a] via-[#b8b8b8] to-[#f2f2f2]
             bg-clip-text text-transparent "
          >
            <span ref={elFrontend}></span>
          </h1>

          <div className="hidden developer  md:flex items-center gap-2">
            <FlipButton className="relative z-100 md:px-16 xl:px-24 text-base 2xl:text-lg text-center py-2.5 2xl:py-3 border md:max-w-[200px] xl:max-w-[500px] bg-[#f5f5f5] transition-colors duration-200 cursor-pointer text-[#121212] rounded-full">
              Unduh CV
            </FlipButton>
            <div className="p-3 2xl:p-4 text-base 2xl:text-xl border bg-[#f5f5f5] hover:bg-white/80 transition-colors duration-200 cursor-pointer text-[#121212] rounded-full">
              <BsArrowUpRight className="text-lg" />
            </div>
          </div>
        </div>

        <div
          className="md:items-start flex gap-9 md:gap-0 flex-col-reverse md:flex-row justify-between 
     min-h-[50px] sm:min-h-[60px] md:min-h-[80px] lg:min-h-[100px] 2xl:min-h-[150px]"
        >
          <div className="flex mt-5 developer md:hidden items-start gap-2">
            <div className="px-16  md:px-24 text-base  py-2.5 border bg-[#f5f5f5]  hover:bg-white/80 transition-colors duration-200 cursor-pointer text-[#121212] rounded-full">
              <p>Unduh CV</p>
            </div>
            <div className="p-3 text-base border bg-[#f5f5f5] hover:bg-white/80 transition-colors duration-200 cursor-pointer text-[#121212] rounded-full">
              <BsArrowUpRight className="text-lg" />
            </div>
          </div>

          <AnimatedContent
            distance={150}
            direction="vertikal"
            reverse={false}
            duration={1.2}
            ease="bounce.out"
            initialOpacity={0.2}
            animateOpacity
            scale={1.1}
            threshold={0.2}
            delay={0.3}
          >
            <blockquote className="md:max-w-[250px] mt-5 2xl:text-lg md:mt-3 xl:mt-0 xl:max-w-sm developer text-[#a6a6a6] italic">
              "You’re not going to be{" "}
              <span className="text-white">perfect</span>, but the important
              thing is to <span className="text-white">try</span> and be{" "}
              <span className="text-white"> honest.</span> "
              <br />
              <span className="not-italic text-sm text-gray-500">
                - Sean Maguire
              </span>
            </blockquote>
          </AnimatedContent>
          <h1
            className="text-6xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[150px] font-extrabold text-white 
               text-left ml-auto  min-w-[300px] md:min-w-[500px] xl:min-w-[750px]"
          >
            <span ref={elDeveloper}></span>
          </h1>
        </div>
        <div className="developer mt-24 2xl:mt-28 flex items-center justify-center gap-4 text-sm tracking-widest">
          {/* Kiri */}
          <span className="hidden md:block">Scroll down</span>
          <div className="2xl:w-60 w-full md:w-40 h-px md:h-[0.3px] bg-current opacity-20" />

          {/* Icon */}
          <FloatingIcon />

          {/* Kanan */}
          <div className="2xl:w-60 w-full md:w-40 h-px md:h-[0.3px] bg-current opacity-20" />
          <span className="hidden md:block whitespace-nowrap">to see projects</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
