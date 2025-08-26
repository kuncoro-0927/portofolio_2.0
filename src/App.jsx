import React from "react";
import Header from "./components/header";
import Background from "./components/background";
import AboutMe from "./components/AboutMe";
import Light from "./components/Light";
import FloatingButton from "./components/FloatingButton";
const App = () => {
  return (
    <>
      <FloatingButton />
      <div className="fixed inset-0 -z-20">
        <Background />
      </div>
      <div className="absolute inset-0 -z-10">
        <Light />
      </div>
      <div className="relative z-0">
        <Header />
        <AboutMe />
      </div>
    </>
  );
};

export default App;
