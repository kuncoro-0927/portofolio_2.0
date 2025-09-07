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
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      // delay 1 detik biar smooth
      setTimeout(() => {
        setFadeOut(true); // mulai animasi fade out
        setTimeout(() => setLoading(false), 600); // 0.6 detik buat animasi, lalu hilang
      }, 1000);
    };

    if (document.readyState === "complete") {
      handleLoad(); // kalau halaman sudah siap
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  if (loading) {
    return (
      <div
        className={`fixed inset-0 flex items-center justify-center bg-black z-50 transition-all duration-700 ${
          fadeOut ? "opacity-0 scale-110" : "opacity-100 scale-100"
        }`}
      >
        {/* Ganti ini pakai logo kamu */}
        <h1 className="text-white text-3xl font-bold tracking-wider">
          Kuncoro
        </h1>
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
