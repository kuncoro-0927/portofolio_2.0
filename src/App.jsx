import { Routes, Route } from "react-router-dom";
import { Element } from "react-scroll"; // ⬅️ tambahkan ini
import Background from "./components/Background";
import Header from "./sections/Header";
import AboutMe from "./sections/AboutMe";
import Projects from "./sections/Projects";
import Courses from "./sections/Courses";
import Contact from "./sections/Contact";
import RecentProject from "./sections/RecentProject";
import Light from "./components/Light";
import FloatingButton from "./components/FloatingButton";
import DetailProject from "./pages/DetailProject";

export default function App() {
  return (
    <>
      <FloatingButton />

      {/* Background */}
      <div className="fixed inset-0 -z-20">
        <Background />
      </div>
      <div className="absolute inset-0 z-10 pointer-events-none">
        <Light />
      </div>

      <Routes>
        {/* 🔹 Halaman utama */}
        <Route
          path="/"
          element={
            <div className="relative z-0">
              <Element name="header">
                {" "}
                <Header />
              </Element>

              {/* Bungkus tiap section dengan Element */}
              <Element name="recentproject">
                <RecentProject />
              </Element>

              <Element name="about">
                <AboutMe />
              </Element>

              <Element name="projects">
                <Projects />
              </Element>

              <Element name="certification">
                <Courses />
              </Element>

              <Element name="contact">
                <Contact />
              </Element>
            </div>
          }
        />

        {/* 🔹 Halaman detail project */}
        <Route path="/project/:slug" element={<DetailProject />} />
      </Routes>
    </>
  );
}
