import { useParams } from "react-router-dom";
import { useState } from "react";
import { Skeleton } from "antd";
import projects from "../data/dataproject";

export default function DetailProject() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  // state untuk track mockup utama
  const [mockupLoaded, setMockupLoaded] = useState(false);
  // state untuk track preview images
  const [loadedImages, setLoadedImages] = useState({});

  return (
    <>
      <section className="px-6 mt-10 md:mt-0 md:px-64 pb-20 text-white">
        <div className="flex justify-center mb-6 relative">
          {!mockupLoaded && (
            <Skeleton.Image
              active
              className="!w-full !h-[250px] md:!h-[450px] rounded-xl"
            />
          )}
          <img
            src={project.mockup}
            alt={`${project.title} mockup`}
            className={`w-full h-[250px] md:h-[450px] object-cover rounded-xl md:-translate-y-3 md:rounded-b-4xl transition-opacity duration-500 ${
              mockupLoaded ? "opacity-100" : "opacity-0 absolute"
            }`}
            onLoad={() => setMockupLoaded(true)}
          />
        </div>

        <h1 className="text-3xl md:text-5xl border-b border-[#a6a6a6] pb-4 mt-10 font-bold">
          {project.title}
        </h1>

        <div className="mt-6 md:flex items-start justify-between space-y-7 md:space-y-2">
          <div className="space-y-5 mr-14 w-full">
            <div className="flex items-start justify-between">
              <h1 className="font-semibold max-w-[130px] w-full text-lg md:text-xl">
                Category
              </h1>
              <p className="text-base w-full max-w-[180px] developer text-[#a6a6a6]">
                {project.category}
              </p>
            </div>

            <div className="flex items-start justify-between">
              <h1 className="font-semibold max-w-[130px] w-full developer text-lg md:text-xl">
                Year
              </h1>
              <p className="text-base w-full max-w-[180px] developer text-[#a6a6a6]">
                {project.year}
              </p>
            </div>

            <div className="flex items-start justify-between">
              <h1 className="font-semibold max-w-[130px] w-full developer text-lg md:text-xl">
                Role
              </h1>
              <p className="text-base w-full max-w-[180px] developer text-[#a6a6a6]">
                {project.role}
              </p>
            </div>

            <div className="flex items-start justify-between">
              <h1 className="font-semibold max-w-[130px] w-full developer text-lg md:text-xl">
                Type
              </h1>
              <p className="text-base w-full max-w-[180px] developer text-[#a6a6a6]">
                {project.type}
              </p>
            </div>

            <div className="flex items-start justify-between">
              <h1 className="font-semibold max-w-[130px] w-full developer text-lg md:text-xl">
                Tech Stack
              </h1>
              <p className="text-base w-full max-w-[180px] developer text-[#a6a6a6]">
                {project.tech}
              </p>
            </div>
          </div>

          <div className="md:max-w-xs developer text-[#a6a6a6] text-justify">
            {project.desc}
          </div>
        </div>
      </section>

      <section className="pb-20 developer mx-6 md:mx-64">
        <div className="space-y-14">
          {project.preview.map((section, idx) => (
            <div key={idx} className="text-center">
              <p className="mb-4 text-xl md:text-2xl font-bold">
                {section.title}
              </p>
              <div className="space-y-4">
                {section.images?.map((src, i) => {
                  const key = `${idx}-${i}`;
                  return (
                    <div key={i} className="relative">
                      {!loadedImages[key] && (
                        <Skeleton.Image
                          active
                          className="!w-full !h-[200px] rounded-lg"
                        />
                      )}
                      <img
                        src={src}
                        alt={`${section.title}-${i}`}
                        className={`object-cover w-full transition-opacity duration-500 ${
                          loadedImages[key]
                            ? "opacity-100"
                            : "opacity-0 absolute"
                        }`}
                        onLoad={() =>
                          setLoadedImages((prev) => ({
                            ...prev,
                            [key]: true,
                          }))
                        }
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
