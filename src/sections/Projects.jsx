import { NavLink } from "react-router-dom";
const Projects = () => {
  const projects = [
    {
      id: 1,
      year: "2025",
      title: "React AI Chatbot",
      desc: "Personal |  React",
      slug: "react-ai-chatbot",
    },
    {
      id: 2,
      year: "2025",
      title: "E-Commerce - Faza Frame",
      desc: "Final Project | React / Express / MySQL / Midtrans",
      slug: "e-commerce-faza-frame",
    },
    {
      id: 3,
      year: "2024",
      title: "Cultivo",
      desc: "Intern | React / Express / MySQL / Midtrans",
      slug: "cultivo",
    },

    {
      id: 4,
      year: "2024",
      title: "Portfolio Website",
      desc: "Personal Project | React / Tailwind",
    },
    {
      id: 5,
      year: "2024",
      title: "iTern - Company Profile",
      desc: "Project Based Learning |  Laravel / Tailwind / MySQL",
    },
    {
      id: 6,
      year: "2023",
      title: "E-Notulensi",
      desc: "Project Based Learning |  Laravel / Bootstrap  / MySQL",
      slug: "e-notulensi",
    },
  ];

  return (
    <>
      <section className="mt-10 md:mt-28">
        <div className="mx-8 md:mx-28">
          <h1 className="text-3xl md:text-5xl font-bold">Projects</h1>
        </div>

        <ul className="mt-5 md:mt-14">
          {projects.map((project) => (
            <NavLink key={project.id} to={`/project/${project.slug}`}>
              <li
                className="group justify-start gap-14 md:grid md:grid-cols-[200px_2fr_3fr] items-center px-8 md:px-28 py-6 
              border-y border-[#222] transition-all duration-300 ease-in-out 
              hover:bg-white hover:text-[#3d3d3d]"
              >
                {/* Year */}
                <p className="text-[#a6a6a6] group-hover:text-[#3d3d3d] transition-colors duration-300">
                  {project.year}
                </p>

                <p className="developer  transition-colors duration-300">
                  <span>{project.title}</span>
                </p>

                <p className="transition-colors duration-300">{project.desc}</p>
              </li>
            </NavLink>
          ))}
        </ul>
      </section>
    </>
  );
};

export default Projects;
