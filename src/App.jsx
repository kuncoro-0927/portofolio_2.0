import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Background from "./components/Background";
import Header from "./sections/Header";
import AboutMe from "./sections/AboutMe";
import Projects from "./sections/Projects";
import Courses from "./sections/Courses";
import Light from "./components/Light";
import FloatingButton from "./components/FloatingButton";
import DetailProject from "./pages/DetailProject";
import Preloader from "./components/PreLoader";
export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // simulasi waktu loading (2.5s)
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
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
      )}
    </>
  );
}
