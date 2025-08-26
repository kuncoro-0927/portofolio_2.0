import React from "react";
import Header from "./components/header";
import Background from "./components/background";
import AboutMe from "./components/AboutMe";
import Light from "./components/Light";
const App = () => {
  return (
    <>
      <div className="fixed inset-0 -z-20">
        <Background />
      </div>
      <div className="fixed inset-0 -z-10">
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
