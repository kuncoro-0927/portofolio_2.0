import { FaGithub } from "react-icons/fa";
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
          <a
            href="#main"
            className="text-[#a6a6a6] hover:text-[#f5f5f5] duration-300 transition"
          >
            Main
          </a>

          <a
            href="#about"
            className="text-[#a6a6a6] hover:text-[#f5f5f5] duration-300 transition"
          >
            About Me
          </a>

          <a
            href="#projects"
            className="text-[#a6a6a6] hover:text-[#f5f5f5] duration-300 transition"
          >
            Projects
          </a>

          <a
            href="#contact"
            className="text-[#a6a6a6] hover:text-[#f5f5f5] duration-300 transition"
          >
            Contact
          </a>
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
