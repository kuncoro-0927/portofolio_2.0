import { useParams } from "react-router-dom";
import projects from "../data/dataproject";
import Carousel from "../components/Carousel";
import { FaGithub } from "react-icons/fa";
import { BsArrowUpRight, BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";
export default function DetailProject() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  const OPTIONS = { loop: true, align: "center", slidesToScroll: 1 };

  const slides = project.preview.flatMap((section, i) =>
    section.images.map((img, j) => ({
      id: `${i}-${j}`,
      image: img,
      title: `${section.title}`,
    }))
  );

  return (
    <section className="developer relative z-20 mx-8 sm:mx-28 sm:mt-10 mb-10 sm:mb-10">
      <Link
        to="/"
        className="px-5 hidden md:flex items-center gap-2 w-fit py-2 border rounded-3xl mb-8"
      >
        {" "}
        <BsArrowLeft className="text-base md:text-xl" />
        <span className="text-sm">Back</span>
      </Link>
      <div className="flex flex-col-reverse sm:flex-row items-start gap-y-5 sm:gap-y-0 sm:gap-10 justify-between">
        <div className="max-w-xs w-full">
          <h3 className="text-xl font-semibold">{project.title}</h3>
          <div className="flex mt-5 sm:mt-5 gap-3 flex-wrap">
            {project.tech.split(",").map((item, index) => (
              <span
                key={index}
                className="border text-sm px-3 py-2 rounded-3xl"
              >
                {item.trim()}
              </span>
            ))}
          </div>
          <div className="mt-5 sm:mt-10">
            <p
              className="text-white text-sm leading-relaxed"
              dangerouslySetInnerHTML={{ __html: project.desc }}
            />
          </div>

          <div className="flex mt-5 sm:mt-5 items-center">
            <div className=" border p-3  rounded-full border-[#f5f5f5] w-fit">
              <FaGithub className="text-lg md:text-xl" />
            </div>
            <div className=" bg-[#f5f5f5] -translate-x-3 border p-3 rounded-full text-[#3d3d3d] w-fit">
              <BsArrowUpRight className="text-lg md:text-xl" />
            </div>
          </div>
        </div>

        <div className="mt-10 w-full sm:mt-0">
          <button className="px-5 md:hidden flex items-center gap-2 py-2 border rounded-3xl mb-8">
            {" "}
            <BsArrowLeft className="text-lg md:text-xl" />
            <span>Back</span>
          </button>
          <Carousel slides={slides} options={OPTIONS} />
        </div>
      </div>
    </section>
  );
}
