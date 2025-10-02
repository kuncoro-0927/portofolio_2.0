import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
const RecentProject = () => {
  return (
    <section className="developer mx-8 sm:mx-28 mt-20 xl:mt-20">
      <div className="flex items-center justify-between">
        <h2 className="text-sm sm:text-base">.../Recent Project...</h2>
        {/* <span className="text-xs sm:text-base">Explore More Work</span> */}
      </div>

      <div
        style={{
          backgroundImage: "url('/images/faza_frame/mockup.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className=" w-full mt-14 h-[300px] md:h-[500px] relative rounded-2xl overflow-hidden cursor-pointer"
      >
        <div className="absolute top-3 right-3 md:top-6 md:right-6">
          <button className="flex text-xs md:text-sm items-center gap-3 bg-[#f5f5f5]  text-[#121212] px-5 py-2 rounded-full shadow-lg ">
            View Project
            <BsArrowUpRight className="text-lg md:text-sm font-bold" />
          </button>
        </div>

        {/* Tags kanan bawah */}
        <div className="absolute bottom-3 left-3 md:bottom-6 md:left-6 flex-col-reverse flex gap-2 md:flex md:flex-row md:gap-3">
          <span className="text-[#f5f5f5] bg-white/5 to-transparent backdrop-blur-sm w-fit px-5 py-2 rounded-3xl text-xs xl:text-sm">
            Web Development
          </span>
          <span className="bg-white/5 backdrop-blur-sm w-fit px-5 py-2 rounded-3xl text-xs xl:text-sm">
            Jun, 2025
          </span>
        </div>

        {/* Title kiri bawah */}
        <span className="absolute bottom-3 right-3 md:bottom-6 md:right-6 xl:text-4xl xl:font-bold text-white px-3 py-1 rounded-lg">
          Faza Frame
        </span>
      </div>
    </section>
  );
};

export default RecentProject;
