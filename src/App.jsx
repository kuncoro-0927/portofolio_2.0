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

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Tunggu semua asset selesai load
    window.addEventListener("load", () => {
      setTimeout(() => setLoading(false), 1000); // kasih delay biar smooth
    });
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-black">
        {/* Bisa diganti animasi logo, spinner, atau lottie */}
        <h1 className="text-white text-3xl animate-pulse">Loading...</h1>
      </div>
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
