import React from "react";

const Navbar = () => {
  return (
    <nav className="flex w-full py-6 developer text-sm items-center justify-between">
      <div className="text-left">
        <h1 className="text-left text-base">
          Khitan Hesthi <br></br> Kuncoro
        </h1>
      </div>

      <div className="w-full hidden absolute text-xs md:flex justify-center text-white">
        <div className="flex items-center gap-7">
          <div>About Me</div>
          <div>Projects</div>
          <div>Certification</div>
          <div>Contact</div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
