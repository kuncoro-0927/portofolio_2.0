
import projects from "../data/dataproject";
import FlipButton from "../components/FramerMotion/FlipButton";
const RecentProject = () => {
  const recentProject = projects.reduce((latest, p) =>
    p.id > latest.id ? p : latest
  );

  if (!recentProject) return null;

  return (
    <section className=" mx-4 sm:mx-28  md:mx-24 lg:mx-28 mt-20 xl:mt-20">
      <div className="flex items-center justify-between">
        <h2 className="text-[15px] sm:text-base 2xl:text-lg">
          .../Recent Project...
        </h2>
        {/* <span className="text-xs sm:text-base">Explore More Work</span> */}
      </div>

      <div
        style={{
          backgroundImage: `url('${recentProject.mockup}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className=" w-full mt-14 h-[300px] md:h-[600px] 2xl:h-[800px] relative rounded-2xl overflow-hidden cursor-pointer"
      >
        <div className="absolute top-3 right-3 md:top-6 md:right-6">
          <FlipButton href="/project/react-ai-chatbot" className="flex text-[15px] 2xl:text-lg items-center gap-3 bg-[#f5f5f5]  text-[#121212] px-5 py-2 2xl:px-8 2xl:py-3 rounded-full shadow-lg ">
            View Project
          </FlipButton>
        </div>

        {/* Tags kanan bawah */}
        <div className="absolute bottom-3 left-3 md:bottom-6 md:left-6 flex-col-reverse flex gap-2 md:flex md:flex-row md:gap-3">
          <span className="text-[#f5f5f5] bg-white/5 to-transparent backdrop-blur-sm w-fit px-5 py-2 rounded-3xl text-[15px] 2xl:text-lg">
            {recentProject.category}
          </span>
          <span className="bg-white/5 backdrop-blur-sm w-fit px-5 py-2 rounded-3xl text-[15px] 2xl:text-lg">
            {recentProject.year}
          </span>
        </div>

        {/* Title kiri bawah */}
        <span className="absolute bottom-3 right-3 md:bottom-6 md:right-6 xl:text-4xl xl:font-bold text-white px-3 py-1 rounded-lg">
          {recentProject.title}
        </span>
      </div>
    </section>
  );
};

export default RecentProject;
