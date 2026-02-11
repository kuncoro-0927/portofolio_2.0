import { NavLink } from "react-router-dom";
import Carousel from "../components/Carousel";
import "../css/embla.css";
import FlipButton from "../components/FramerMotion/FlipButton";
const Projects = () => {
  const projects = [
    {
      id: 1,
      year: "2025",
      title: "React AI Chatbot",
      desc: "Personal | React",
      slug: "react-ai-chatbot",
      image: "/images/cultivo/homepage4.png",
    },
    {
      id: 2,
      year: "2025",
      title: "E-Commerce - Faza Frame",
      desc: "Final Project | React / Express / MySQL / Midtrans",
      slug: "e-commerce-faza-frame",
      image: "https://picsum.photos/600/350?random=2",
    },
    {
      id: 3,
      year: "2024",
      title: "Cultivo",
      desc: "Intern | React / Express / MySQL / Midtrans",
      slug: "cultivo",
      image: "https://picsum.photos/600/350?random=3",
    },
    {
      id: 4,
      year: "2023",
      title: "E-Notulensi",
      desc: "Project Based Learning | Laravel / Bootstrap / MySQL",
      slug: "e-notulensi",
      image: "https://picsum.photos/600/350?random=6",
    },
  ];

  return (
    <>
      <section id="projects" className="mt-20 md:mt-28">
        <div className=" flex flex-col md:flex md:flex-row gap-y-3 md:gap-y-0 items-start justify-between mx-4 sm:mx-28 md:mx-24 lg:mx-28">
          <div className="flex flex-col gap-5">
            <h2 className="text-[15px] sm:text-base md:text-base 2xl:text-lg">
              .../Projects...
            </h2>

            {/* <FlipButton
  href="https://www.framer.com/plugins/"
  className="
    px-6 py-2
    text-xs md:text-sm 2xl:text-lg 2xl:py-3
    rounded-full
    bg-[#f5f5f5]
    text-[#121212]
    drop-shadow-[0_3px_5px_rgba(255,255,255,0.22)]
  "
>
  Explore all Projects
</FlipButton> */}
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-xl md:text-4xl 2xl:text-5xl max-w-sm 2xl:max-w-xl font-semibold">
              Showcasing My Work For Your Inspiration
            </h3>
            <span className="text-sm md:text-sm 2xl:text-lg max-w-sm 2xl:max-w-xl text-[#a6a6a6]">
             Here are some of my best projects
            </span>
          </div>
        </div>

        {/* <div className="developer mt-2 md:mt-5 flex-col-reverse flex md:flex-row gap-y-3 md:gap-y-0 md:flex items-start justify-between mx-8 sm:mx-28 md:mx-24 lg:mx-28">
          <div>
            <button className="px-4 text-xs md:text-sm 2xl:text-lg 2xl:py-3 py-2 rounded-md bg-[#f5f5f5] text-[#121212]">
              Explore All Projects
            </button>
          </div>

          <span className="text-sm md:text-sm 2xl:text-lg max-w-sm 2xl:max-w-xl text-[#a6a6a6]">
            Here are some projects that I’ve worked on recently.
          </span>
        </div> */}

        <ul className="mt-5 md:mt-14">
          {projects.map((project) => (
            <NavLink key={project.id} to={`/project/${project.slug}`}>
              <li
                className="group justify-start gap-14 md:grid md:grid-cols-[100px_2fr_3fr]  xl:grid-cols-[150px_2fr_3fr] items-center px-4 sm:px-28 md:px-24 lg:px-28 py-6 
              border-y border-[#222] transition-all duration-300 ease-in-out 
              hover:bg-white hover:text-[#3d3d3d]"
              >
                {/* Year */}
                <p className="text-[15px]  2xl:text-lg text-[#a6a6a6] group-hover:text-[#3d3d3d] transition-colors duration-300">
                  {project.year}
                </p>

                <p className="text-[15px] 2xl:text-lg   transition-colors duration-300">
                  <span>{project.title}</span>
                </p>

                <p className="text-[15px] 2xl:text-lg  transition-colors duration-300">
                  {project.desc}
                </p>
              </li>
            </NavLink>
          ))}
        </ul>
      </section>
    </>
  );
};

export default Projects;
