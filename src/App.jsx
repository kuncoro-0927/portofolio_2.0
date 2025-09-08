import { Routes, Route } from "react-router-dom";
import Background from "./components/Background";
import Header from "./sections/Header";
import AboutMe from "./sections/AboutMe";
import Projects from "./sections/Projects";
import Courses from "./sections/Courses";
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
      <div className="absolute inset-0 z-10">
        <Light />
      </div>

      {/* Routing */}
      <Routes>
        <Route
          path="/"
          element={
            <div className="relative z-0">
              <Header />
              <AboutMe />
              <Projects />
              <Courses />
            </div>
          }
        />
        <Route path="/project/:slug" element={<DetailProject />} />
      </Routes>
    </>
  );
}
