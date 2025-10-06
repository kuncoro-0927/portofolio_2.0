import { NavLink } from "react-router-dom";
import Carousel from "../components/Carousel";
import "../css/embla.css";
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
      year: "2024",
      title: "Portfolio Website",
      desc: "Personal Project | React / Tailwind",
      slug: "portofolio-v1",
      image: "https://picsum.photos/600/350?random=4",
    },
    {
      id: 5,
      year: "2024",
      title: "iTern",
      desc: "Project Based Learning | Laravel / Tailwind / MySQL",
      slug: "itern",
      image: "https://picsum.photos/600/350?random=5",
    },
    {
      id: 6,
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
        <div className="developer flex flex-col md:flex md:flex-row gap-y-3 md:gap-y-0 items-start justify-between mx-8 sm:mx-28 md:mx-28 xl:mx-28">
          <div>
            <h1 className="text-sm sm:text-base md:text-base">
              .../Projects...
            </h1>
          </div>

          <span className="text-2xl md:text-4xl max-w-md font-semibold">
            Showcasing My Work For Your Inspiration
          </span>
        </div>

        <div className="developer mt-2 md:mt-5 flex-col-reverse flex md:flex-row gap-y-3 md:gap-y-0 md:flex items-start justify-between mx-8 sm:mx-28 md:mx-28 xl:mx-28">
          <div>
            <button className="px-4 text-xs md:text-sm py-2 rounded-md bg-[#f5f5f5] text-[#121212]">
              Explore All Projects
            </button>
          </div>

          <span className="text-sm max-w-md text-[#a6a6a6]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Praesentium, repudiandae?
          </span>
        </div>

        <ul className="mt-5 md:mt-14">
          {projects.map((project) => (
            <NavLink key={project.id} to={`/project/${project.slug}`}>
              <li
                className="group justify-start gap-14 md:grid md:grid-cols-[100px_2fr_3fr]  xl:grid-cols-[150px_2fr_3fr] items-center px-8 sm:px-28 md:px-28 xl:px-28 py-6 
              border-y border-[#222] transition-all duration-300 ease-in-out 
              hover:bg-white hover:text-[#3d3d3d]"
              >
                {/* Year */}
                <p className="text-sm md:text-base text-[#a6a6a6] group-hover:text-[#3d3d3d] transition-colors duration-300">
                  {project.year}
                </p>

                <p className="text-sm md:text-base developer  transition-colors duration-300">
                  <span>{project.title}</span>
                </p>

                <p className="text-sm md:text-base transition-colors duration-300">
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
