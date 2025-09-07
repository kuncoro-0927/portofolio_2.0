import React from "react";

const Courses = () => {
  return (
    <section className="md:mt-28 mt-10">
      <div className="mx-8 md:mx-28">
        <h1 className="text-3xl md:text-5xl font-bold">
          Course & Certification
        </h1>
        <h1 className="mt-8 md:mt-10 developer flex items-center gap-3 text-2xl font-semibold">
          Professional Certification{" "}
        </h1>
        <div className="mt-5 flex flex-wrap justify-between space-y-14">
          <div className="developer flex items-start gap-7 md:gap-10">
            <img className="w-14 md:w-20" src="/images/logobnsp3.png" alt="" />
            <div>
              <h1 className="text-base md:text-xl">Junior Web Developer</h1>
              <p className="text-gray-300 mt-1 md:mt-2 text-sm">BNSP</p>
              <p className="mt-1 md:mt-3 font-extralight text-xs md:text-sm text-[#a6a6a6]">
                62090 2513 3 0123352 2025
              </p>
              <p className="font-extralight text-xs md:text-sm text-[#a6a6a6]">
                Expires January 2028
              </p>
            </div>
          </div>
        </div>

        <h1 className="mt-8 md:mt-10 developer flex items-center gap-3 text-2xl font-semibold">
          Courses & Trainings
        </h1>
        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8 md:gap-y-14">
          <div className="developer flex items-start gap-7 md:gap-10">
            <img
              className="w-14 md:w-20 flex-shrink-0"
              src="/udemylogo.png"
              alt=""
            />
            <div>
              <h1 className="text-base md:text-xl max-w-[350px]">
                React.js AI Chatbot built with ChatGpt, Gemini and DeepSeek
              </h1>
              <p className="text-gray-300 mt-1 md:mt-2 text-sm">Udemy</p>
              <p className="mt-1 md:mt-3 font-extralight text-xs md:text-sm text-[#a6a6a6]">
                UC-3f505238-b63f-4c43-a5e0-cd1518dcce74
              </p>
              <p className="font-extralight text-xs md:text-sm text-[#a6a6a6]">
                Issued August 2025 · No Expiration Date
              </p>
            </div>
          </div>
          {/* course 1 */}
          <div className="developer flex items-start gap-7 md:gap-10">
            <img
              className="w-14 md:w-20 flex-shrink-0"
              src="/images/logomyskill.png"
              alt=""
            />
            <div>
              <h1 className="text-base md:text-xl">Frontend - React</h1>
              <p className="text-gray-300 mt-1 md:mt-2 text-sm">MySkill</p>
              <p className="mt-1 md:mt-3 font-extralight text-xs md:text-sm text-[#a6a6a6]">
                5TqlybQhn4YGtEIJ8F74
              </p>
              <p className="font-extralight text-xs md:text-sm text-[#a6a6a6]">
                Issued August 2025 · No Expiration Date
              </p>
            </div>
          </div>
          {/* course 2 */}
          <div className="developer flex items-start gap-7 md:gap-10">
            <img
              className="w-14 md:w-20 flex-shrink-0"
              src="/images/logomyskill.png"
              alt=""
            />
            <div>
              <h1 className="text-base md:text-xl">Backend - Node js</h1>
              <p className="text-gray-300 mt-1 md:mt-2 text-sm">MySkill</p>
              <p className="mt-1 md:mt-3 font-extralight text-xs md:text-sm text-[#a6a6a6]">
                najWisaClERrR6AAgPYw
              </p>
              <p className="font-extralight text-xs md:text-sm text-[#a6a6a6]">
                Issued August 2025 · No Expiration Date
              </p>
            </div>
          </div>

          <div className="developer flex items-start gap-7 md:gap-10">
            <img
              className="w-14 md:w-20 flex-shrink-0"
              src="/images/logoil2.jpeg"
              alt=""
            />
            <div>
              <h1 className="text-base md:text-xl max-w-[350px]">
                Internship Program Batch 7 on Web Development
              </h1>
              <p className="text-gray-300 mt-1 md:mt-2 text-sm">
                Infinite Learning
              </p>
              <p className="mt-1 md:mt-3 font-extralight text-xs md:text-sm text-[#a6a6a6]">
                0200/IL-KMM/XII/2024
              </p>
              <p className="font-extralight text-xs md:text-sm text-[#a6a6a6]">
                Issued August 2024 · No Expiration Date
              </p>
            </div>
          </div>
          <div className="developer flex items-start gap-7 md:gap-10">
            <img
              className="w-14 md:w-20 flex-shrink-0"
              src="/images/logoil2.jpeg"
              alt=""
            />
            <div>
              <h1 className="text-base md:text-xl max-w-[350px]">
                Independent Study Program Batch 7 on Web Development
              </h1>
              <p className="text-gray-300 mt-1 md:mt-2 text-sm">
                Infinite Learning
              </p>
              <p className="mt-1 md:mt-3 font-extralight text-xs md:text-sm text-[#a6a6a6]">
                0200/IL-KMM/XII/2024
              </p>
              <p className="font-extralight text-xs md:text-sm text-[#a6a6a6]">
                Issued August 2024 · No Expiration Date
              </p>
            </div>
          </div>
        </div>
        <h1 className="mt-8 md:mt-10 developer flex items-center gap-3 text-2xl font-semibold">
          Award
        </h1>
        <div className="mt-5 flex flex-wrap justify-between space-y-8 md:space-y-14">
          <div className="developer flex items-start gap-7 md:gap-10">
            <img className="w-14 md:w-20" src="/images/logoil2.jpeg" alt="" />
            <div>
              <h1 className="text-base md:text-xl max-w-[350px]">
                Best Project Award - Independent Study Web Development
              </h1>
              <p className="text-gray-300 mt-1 md:mt-2 text-sm">
                Infinite Learning
              </p>
              <p className="mt-1 md:mt-3 font-extralight text-xs md:text-sm text-[#a6a6a6]">
                145/IL-SIB/BEST-MASPP/VI/2024
              </p>
              <p className="font-extralight text-xs md:text-sm text-[#a6a6a6]">
                Issued August 2024 · No Expiration Date
              </p>
            </div>
          </div>
        </div>

        <h1 className="mt-8 md:mt-10 developer flex items-center gap-3 text-2xl font-semibold">
          Other Certifications
        </h1>
        <div className="mt-5 flex flex-wrap justify-between space-y-8 md:space-y-14">
          <div className="developer flex items-start gap-7 md:gap-10">
            <div className="p-2 w-14 md:w-20 h-14 md:h-20 flex items-center bg-white">
              {" "}
              <img className="" src="/images/logoit.jpeg" alt="" />
            </div>

            <div>
              <h1 className="text-base md:text-xl max-w-[350px]">
                Microsoft Office Desktop Application
              </h1>
              <p className="text-gray-300 mt-1 md:mt-2 text-sm">
                Trust Training Partners
              </p>
              <p className="mt-1 md:mt-3 font-extralight text-xs md:text-sm text-[#a6a6a6]">
                25UBC03113059
              </p>
              <p className="font-extralight text-xs md:text-sm text-[#a6a6a6]">
                Issued March 2025 · No Expiration Date
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;
