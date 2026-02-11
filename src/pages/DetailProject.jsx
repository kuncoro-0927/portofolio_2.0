import { useNavigate } from "react-router-dom";

import { useParams } from "react-router-dom";
import projects from "../data/dataproject";
import Carousel from "../components/Carousel";
import { FaGithub } from "react-icons/fa";
import { BsArrowUpRight, BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";
import FlipGlassButton from "../components/FramerMotion/GlassButton";
export default function DetailProject() {
  const navigate = useNavigate();

  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  // const OPTIONS = { loop: true, align: "center", slidesToScroll: 1 };

  // const slides = project.preview.flatMap((section, i) =>
  //   section.images.map((img, j) => ({
  //     id: `${i}-${j}`,
  //     image: img,
  //     title: `${section.title}`,
  //   })),
  // );

  return (
    <section className="  relative z-20 mx-6 sm:mx-28 mt-10 sm:mt-10 mb-10 sm:mb-10">
      <FlipGlassButton onClick={() => navigate(-1)} className=" hidden md:flex">
        <BsArrowLeft className="text-base md:text-xl" />
        Back
      </FlipGlassButton>
      <div className="mt-10">
        <div className="md:flex items-center justify-between">
          <h3 className="text-2xl 2xl:text-4xl font-semibold">
            <span className="text-[#a6a6a6]">Project —</span> {project.title}
          </h3>
          <FlipGlassButton className="">
            <FaGithub className="xl:text-xl 2xl:text-2xl" />
            Github
          </FlipGlassButton>
        </div>
        <p className="text-[#a6a6a6] text-[15px]">{project.subtitle}</p>

        <div className="mt-5 2xl:mt-10 items-stretch grid grid-cols-1 md:grid-cols-2 gap-4">
          {project.preview.map((section, i) =>
            section.images.map((img, j) => (
              <img
                key={`${i}-${j}`}
                src={img}
                alt={`${project.title} preview ${j + 1}`}
                className="w-full rounded-lg"
              />
            )),
          )}
        </div>

        {/* 
          <div className="flex mt-5 sm:mt-5 gap-3 flex-wrap">
            {project.tech.split(",").map((item, index) => (
              <span
                key={index}
                className="border text-sm px-3 py-2 2xl:px-4 2xl:py-2.5 rounded-3xl"
              >
                {item.trim()}
              </span>
            ))}
          </div> */}
        <div className="mt-10 md:flex items-start justify-start gap-20 sm:mt-10">
          <div className="md:max-w-3xl 2xl:max-w-4xl">
            <h2 className="text-2xl 2xl:text-3xl font-semibold">
              About {project.title}
            </h2>
            <p
              className="text-[#a6a6a6] text-md mt-4 2xl:mt-4 2xl:text-base"
              dangerouslySetInnerHTML={{ __html: project.desc }}
            />

            <p className="text-[#a6a6a6] mt-4 2xl:mt-4">Main Features:</p>
            <ul className="list-disc space-y-0.5 ml-4 2xl:mt-4 text-[#a6a6a6]">
              {project.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          <div className="text-base mt-4 md:mt-0">
            <h2 className="mb-2">Details</h2>
            {project.details.map((detail, i) => {
              const Icon = detail.icon;
              return (
                <div
                  key={i}
                  className="flex items-center gap-4 text-[#a6a6a6] my-0.5 text-base"
                >
                  <Icon className="text-[#a6a6a6]" />

                  <span>{detail.text}</span>
                </div>
              );
            })}

            <h2 className="mb-2 mt-6">Tech Stack</h2>
            {project.tech.map((detail, i) => {
              const Icon = detail.icon;
              return (
                <div
                  key={i}
                  className="flex items-center gap-4 text-[#a6a6a6] my-0.5 text-base"
                >
                  <Icon className="text-[#a6a6a6]" />

                  <span>{detail.text}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
