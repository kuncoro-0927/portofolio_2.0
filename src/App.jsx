import { Routes, Route } from "react-router-dom";
import React, { Suspense, lazy } from "react";
import { Element } from "react-scroll";
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

            <Element name="header">
              <Header />
            </Element>

            <main>
              <Suspense fallback={<div className="h-[20vh] bg-transparent" />}>
                <Element name="recentproject">
                  <RecentProject />
                </Element>

                <Element name="about">
                  <AboutMe />
                </Element>

                <Element name="projects">
                  <Projects />
                </Element>
              </Suspense>
            </main>

            <Suspense fallback={null}>
              <Element name="contact">
                <Contact />
              </Element>
            </Suspense>
          </div>
        }
      />

      <Route
        path="/project/:slug"
        element={
          <Suspense fallback={<div className="h-screen bg-black" />}>
            <DetailProject />
          </Suspense>
        }
      />
    </Routes>
  );
}
