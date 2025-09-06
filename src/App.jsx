import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Background from "./components/Background";
import AboutMe from "./components/AboutMe";
import Light from "./components/Light";
import FloatingButton from "./components/FloatingButton";
import Projects from "./components/Projects";
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
        {/* Home Page */}
        <Route
          path="/"
          element={
            <div className="relative z-0">
              <Header />
              <AboutMe />
              <Projects />
            </div>
          }
        />
        {/* Detail Project */}
        <Route path="/project/:slug" element={<DetailProject />} />
      </Routes>
    </>
  );
}
