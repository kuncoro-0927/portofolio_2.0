import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Background from "./components/Background";
import Header from "./sections/Header";
import AboutMe from "./sections/AboutMe";
import Projects from "./sections/Projects";
import Courses from "./sections/Courses";
import Light from "./components/Light";
import FloatingButton from "./components/FloatingButton";
import DetailProject from "./pages/DetailProject";
import ShinyText from "./components/Reactbits/ShinyText";
export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <>
        {/* Background tetap jalan */}
        <div className="fixed inset-0 -z-20">
          <Background />
        </div>
        <div className="absolute inset-0 z-10">
          <Light />
        </div>

        {/* Preloader di atas */}
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <ShinyText
            text="K"
            disabled={false}
            speed={3}
            className="custom-class font-bold text-6xl"
          />
        </div>
      </>
    );
  }

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
        {/* Home Page */}
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
        {/* Detail Project */}
        <Route path="/project/:slug" element={<DetailProject />} />
      </Routes>
    </>
  );
}
