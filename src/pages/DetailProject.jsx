import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Skeleton } from "antd";
import projects from "../data/dataproject";

export default function DetailProject() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // simulasi fetch / tunggu gambar
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, [slug]);

  return (
    <>
      <section className="px-6 mt-10 md:mt-0 md:px-64 pb-20 text-white">
        <div className="flex justify-center mb-6">
          {loading ? (
            <Skeleton.Image
              active
              style={{ width: "100%", height: 450, borderRadius: 12 }}
            />
          ) : (
            <img
              src={project.mockup}
              alt={`${project.title} mockup`}
              className="w-full h-[250px] md:h-[450px] object-cover rounded-xl md:-translate-y-3 md:rounded-b-4xl"
            />
          )}
        </div>

        <h1 className="text-3xl md:text-5xl border-b border-[#a6a6a6] pb-4 mt-10 font-bold">
          {loading ? (
            <Skeleton.Input active size="large" block />
          ) : (
            project.title
          )}
        </h1>

        <div className="mt-6 md:flex items-start justify-between space-y-7 md:space-y-2">
          <div className="space-y-5 mr-14 w-full">
            {["Category", "Year", "Role", "Type", "Tech Stack"].map(
              (label, idx) => (
                <div key={idx} className="flex items-start justify-between">
                  <h1 className="font-semibold max-w-[130px] w-full text-lg md:text-xl">
                    {label}
                  </h1>
                  {loading ? (
                    <Skeleton.Input active size="small" className="w-[120px]" />
                  ) : (
                    <p className="text-base w-full max-w-[180px] text-[#a6a6a6]">
                      {project[label.toLowerCase().replace(" ", "")]}
                    </p>
                  )}
                </div>
              )
            )}
          </div>

          <div className="md:max-w-xs text-[#a6a6a6] text-justify">
            {loading ? (
              <Skeleton active paragraph={{ rows: 4 }} />
            ) : (
              project.desc
            )}
          </div>
        </div>
      </section>

      <section className="pb-20 mx-6 md:mx-64">
        <div className="space-y-14">
          {loading ? (
            // skeleton untuk section preview
            <>
              <Skeleton.Input active block size="large" className="mb-4" />
              <Skeleton.Image
                active
                style={{ width: "100%", height: 200, borderRadius: 8 }}
              />
              <Skeleton.Image
                active
                style={{
                  width: "100%",
                  height: 200,
                  borderRadius: 8,
                  marginTop: 12,
                }}
              />
            </>
          ) : (
            project.preview.map((section, idx) => (
              <div key={idx} className="text-center">
                <p className="mb-4 text-xl md:text-2xl font-bold">
                  {section.title}
                </p>
                <div className="space-y-4">
                  {section.images?.map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt={`${section.title}-${i}`}
                      className="object-cover"
                    />
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
      </section>
    </>
  );
}
