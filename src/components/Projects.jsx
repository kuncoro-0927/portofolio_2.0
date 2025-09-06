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
      <section className="md:mt-28 mb-40">
        <div className="mx-28">
          <h1 className="md:text-5xl font-bold">Projects</h1>
        </div>

        <ul className="mt-14">
          {projects.map((project) => (
            <NavLink key={project.id} to={`/project/${project.slug}`}>
              <li
                className="group grid grid-cols-[200px_2fr_3fr] items-center px-28 py-6 
              border-y border-[#222] transition-all duration-300 ease-in-out 
              hover:bg-white hover:text-[#3d3d3d]"
              >
                {/* Year */}
                <p className="text-[#a6a6a6] group-hover:text-[#3d3d3d] transition-colors duration-300">
                  {project.year}
                </p>

                {/* Title + Arrow */}
                <p className="developer  transition-colors duration-300">
                  <span>{project.title}</span>
                </p>

                {/* Desc */}
                <p className="transition-colors duration-300">{project.desc}</p>
              </li>
            </NavLink>
          ))}
        </ul>
      </section>

      <section className="md:mt-28 mb-40">
        <div className="mx-28">
          <h1 className="md:text-5xl font-bold">Course & Certification</h1>
          <h1 className="mt-10 developer flex items-center gap-3 text-2xl font-semibold">
            Professional Certification{" "}
          </h1>
          <div className="mt-5 flex flex-wrap justify-between space-y-14">
            <div className="developer flex items-start gap-10">
              <img className="w-20" src="/images/logobnsp3.png" alt="" />
              <div>
                <h1 className=" text-xl">Junior Web Developer</h1>
                <p className="text-gray-300 mt-2 text-[">BNSP</p>
                <p className="mt-3 font-extralight text-sm text-[#a6a6a6]">
                  62090 2513 3 0123352 2025
                </p>
                <p className="font-extralight text-sm text-[#a6a6a6]">
                  Expires January 2028
                </p>
              </div>
            </div>
          </div>

          <h1 className="mt-10 developer flex items-center gap-3 text-2xl font-semibold">
            Courses & Trainings
          </h1>
          <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-14">
            <div className="developer flex items-start gap-10">
              <img className="w-20 flex-shrink-0" src="/udemylogo.png" alt="" />
              <div>
                <h1 className=" text-xl max-w-[350px]">
                  React.js AI Chatbot built with ChatGpt, Gemini and DeepSeek
                </h1>
                <p className="text-gray-300 mt-2 text-[">Udemy</p>
                <p className="mt-3 font-extralight text-sm text-[#a6a6a6]">
                  UC-3f505238-b63f-4c43-a5e0-cd1518dcce74
                </p>
                <p className="font-extralight text-sm text-[#a6a6a6]">
                  Issued August 2025 · No Expiration Date
                </p>
              </div>
            </div>
            {/* course 1 */}
            <div className="developer flex items-start gap-10">
              <img
                className="w-20 flex-shrink-0"
                src="/images/logomyskill.png"
                alt=""
              />
              <div>
                <h1 className=" text-xl">Frontend - React</h1>
                <p className="text-gray-300 mt-2 text-[">MySkill</p>
                <p className="mt-3 font-extralight text-sm text-[#a6a6a6]">
                  5TqlybQhn4YGtEIJ8F74
                </p>
                <p className="font-extralight text-sm text-[#a6a6a6]">
                  Issued August 2025 · No Expiration Date
                </p>
              </div>
            </div>
            {/* course 2 */}
            <div className="developer flex items-start gap-10">
              <img
                className="w-20 flex-shrink-0"
                src="/images/logomyskill.png"
                alt=""
              />
              <div>
                <h1 className=" text-xl">Backend - Node js</h1>
                <p className="text-gray-300 mt-2 text-[">MySkill</p>
                <p className="mt-3 font-extralight text-sm text-[#a6a6a6]">
                  najWisaClERrR6AAgPYw
                </p>
                <p className="font-extralight text-sm text-[#a6a6a6]">
                  Issued August 2025 · No Expiration Date
                </p>
              </div>
            </div>

            <div className="developer flex items-start gap-10">
              <img
                className="w-20 flex-shrink-0"
                src="/images/logoil2.jpeg"
                alt=""
              />
              <div>
                <h1 className=" text-xl max-w-[350px]">
                  Internship Program Batch 7 on Web Development
                </h1>
                <p className="text-gray-300 mt-2 text-[">Infinite Learning</p>
                <p className="mt-3 font-extralight text-sm text-[#a6a6a6]">
                  0200/IL-KMM/XII/2024
                </p>
                <p className="font-extralight text-sm text-[#a6a6a6]">
                  Issued August 2024 · No Expiration Date
                </p>
              </div>
            </div>
            <div className="developer flex items-start gap-10">
              <img
                className="w-20 flex-shrink-0"
                src="/images/logoil2.jpeg"
                alt=""
              />
              <div>
                <h1 className=" text-xl max-w-[350px]">
                  Independent Study Program Batch 7 on Web Development
                </h1>
                <p className="text-gray-300 mt-2 text-[">Infinite Learning</p>
                <p className="mt-3 font-extralight text-sm text-[#a6a6a6]">
                  0200/IL-KMM/XII/2024
                </p>
                <p className="font-extralight text-sm text-[#a6a6a6]">
                  Issued August 2024 · No Expiration Date
                </p>
              </div>
            </div>
          </div>
          <h1 className="mt-10 developer flex items-center gap-3 text-2xl font-semibold">
            Award
          </h1>
          <div className="mt-5 flex flex-wrap justify-between space-y-14">
            <div className="developer flex items-start gap-10">
              <img className="w-20" src="/images/logoil2.jpeg" alt="" />
              <div>
                <h1 className=" text-xl max-w-[350px]">
                  Best Project Award - Independent Study Web Development
                </h1>
                <p className="text-gray-300 mt-2 text-[">Infinite Learning</p>
                <p className="mt-3 font-extralight text-sm text-[#a6a6a6]">
                  145/IL-SIB/BEST-MASPP/VI/2024
                </p>
                <p className="font-extralight text-sm text-[#a6a6a6]">
                  Issued August 2024 · No Expiration Date
                </p>
              </div>
            </div>
          </div>

          <h1 className="mt-10 developer flex items-center gap-3 text-2xl font-semibold">
            Other Certifications
          </h1>
          <div className="mt-5 flex flex-wrap justify-between space-y-14">
            <div className="developer flex items-start gap-10">
              <div className="p-2 w-20 h-20 flex items-center bg-white">
                {" "}
                <img className="" src="/images/logoit.jpeg" alt="" />
              </div>

              <div>
                <h1 className=" text-xl max-w-[350px]">
                  Microsoft Office Desktop Application
                </h1>
                <p className="text-gray-300 mt-2 text-[">
                  Trust Training Partners
                </p>
                <p className="mt-3 font-extralight text-sm text-[#a6a6a6]">
                  25UBC03113059
                </p>
                <p className="font-extralight text-sm text-[#a6a6a6]">
                  Issued March 2025 · No Expiration Date
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
