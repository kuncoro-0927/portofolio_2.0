import React from "react";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import StarBorder from "../components/Reactbits/StarBorder";
const Contact = () => {
  return (
    <section className="mt-20  ">
      <div className="relative  text-white flex items-center overflow-hidden">
        {/* Buletan */}
        <div className="absolute xl:top-0 -translate-y-20 md:-translate-y-0 -right-45 md:-left-20 md:top-16 xl:-left-24 w-[350px] h-[350px] md:w-[600px] md:h-[600px]  xl:w-[700px] xl:h-[700px]   border-[0.1px] border-[#a6a6a6] rounded-full" />

        {/* Konten */}
        <div className="pb-10 md:pt-36 w-full px-8 sm:px-28 md:px-28 xl:px-28">
          <div className="flex-col-reverse flex md:flex-row md:justify-between  md:items-center">
            <div className="relative mt-10 md:mt-0 z-10  ">
              <h1 className="text-4xl md:text-4xl xl:text-7xl font-bold leading-tight">
                Khitan Hesthi <br />{" "}
                <p className="flex  items-center justify-between sm:justify-start sm:gap-14 md:gap-14">
                  <span className="developer font-normal text-xs md:text-base text-[#a6a6a6]">
                    Full-stack <br /> developer
                  </span>
                  <span>Kuncoro </span>
                </p>
              </h1>
            </div>

            <div className="relative z-10 ">
              <h1 className="md:-translate-y-20 text-sm developer  mb-7 md:absolute md:text-base ">
                .../Contacts...
              </h1>

              <ul className="developer space-x-8 text-xs md:text-sm flex items-center md:justify-between mb-5">
                <li>Main</li>
                <li>About</li>
                <li>Project</li>
                <li>Course</li>
              </ul>
              <div className=" bg-black relative z-10 border-[0.1px] border-[#a6a6a6] px-5 py-5 w-fit  xl:w-[350px] rounded-3xl">
                <h1 className="developer text-[#a6a6a6] text-lg">Site</h1>
                <p className="text-xs md:text-sm mt-2 text-[#f5f5f5]">
                  Designed & Built by Me / <br /> Design inspired by Taisya /{" "}
                  <br /> Built with React & Tailwind
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="mt-16 flex-wrap flex justify-center gap-5 md:justify-between  md:space-y-0 md:flex-row md:flex xl:space-x-10 md:items-center xl:justify-center">
              <StarBorder
                as="button"
                color="white"
                speed="3s"
                className="custom-class w-[150px] md:w-[130px] xl:w-[150px] flex items-center gap-2 rounded-full  px-5 py-2"
              >
                <FaGithub />
                <p className="developer text-[#a6a6a6] text-sm">Github</p>
              </StarBorder>
              <StarBorder
                as="button"
                color="white"
                speed="3s"
                className="custom-class flex items-center gap-2 rounded-full w-[150px] md:w-[130px] xl:w-[150px] px-5 py-2"
              >
                <FaLinkedin />
                <p className="developer text-[#a6a6a6] text-sm">Linkedin</p>
              </StarBorder>
              <StarBorder
                as="button"
                color="white"
                speed="3s"
                className="custom-class flex items-center gap-2 rounded-full w-[150px] md:w-[130px] xl:w-[150px] px-5 py-2"
              >
                <FaInstagram />
                <p className="developer text-[#a6a6a6] text-sm">Instagram</p>
              </StarBorder>
              <StarBorder
                as="button"
                color="white"
                speed="3s"
                className="custom-class flex items-center gap-2 rounded-full w-[150px] md:w-[130px] xl:w-[150px] px-5 py-2"
              >
                <IoMdMail />
                <p className="developer text-[#a6a6a6] text-sm">Email</p>
              </StarBorder>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
