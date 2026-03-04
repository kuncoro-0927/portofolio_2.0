import { Routes, Route } from "react-router-dom";
import React, { Suspense, lazy } from "react";
import Header from "./sections/Header";
import FloatingButton from "./components/FloatingButton";

const RecentProject = lazy(() => import("./sections/RecentProject"));
const AboutMe = lazy(() => import("./sections/AboutMe"));
const Projects = lazy(() => import("./sections/Projects"));
const Contact = lazy(() => import("./sections/Contact"));
const DetailProject = lazy(() => import("./pages/DetailProject"));

export default function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="relative z-0">
            <FloatingButton />

            {/* Hero langsung render */}
            <section id="header">
              <Header />
            </section>

            {/* Section lain lazy */}
            <Suspense fallback={null}>
              <section id="recentproject">
                <RecentProject />
              </section>

              <section id="about">
                <AboutMe />
              </section>

              <section id="projects">
                <Projects />
              </section>

              <section id="contact">
                <Contact />
              </section>
            </Suspense>
          </div>
        }
      />

      {/* Detail page lazy */}
      <Route
        path="/project/:slug"
        element={
          <Suspense fallback={null}>
            <DetailProject />
          </Suspense>
        }
      />
    </Routes>
  );
}