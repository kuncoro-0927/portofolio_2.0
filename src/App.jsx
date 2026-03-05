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

            <section id="header">
              <Header />
            </section>

            <section id="recentproject">
              <Suspense fallback={null}>
                <RecentProject />
              </Suspense>
            </section>

            <section id="about">
              <Suspense fallback={null}>
                <AboutMe />
              </Suspense>
            </section>

            <section id="projects">
              <Suspense fallback={null}>
                <Projects />
              </Suspense>
            </section>

            <section id="contact">
              <Suspense fallback={null}>
                <Contact />
              </Suspense>
            </section>
          </div>
        }
      />

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
