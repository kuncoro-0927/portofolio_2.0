import { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import { RiMenu3Fill } from "react-icons/ri";
import { Link as ScrollLink } from "react-scroll";
export default function FloatingButton() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.body.scrollHeight;

      if (scrollY < 80) {
        setVisible(false);
      } else if (scrollY + windowHeight >= documentHeight - 100) {
        setVisible(false);
      } else {
        setVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // biar jalan pertama kali
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed developer bottom-6 right-6 z-70 flex flex-col items-end space-y-3 ">
      {open && (
        <ul className="bg-white px-20 text-black w-14 rounded-3xl py-5 space-y-3 flex flex-col items-center justify-center shadow-xl transition-all duration-300 ease-in-out">
          <li>
            <ScrollLink
              to="about"
              smooth={true}
              duration={500}
              offset={-80}
              spy={true}
              onClick={() => setOpen(false)}
              className="cursor-pointer"
            >
              About
            </ScrollLink>
          </li>
          <li>
            {" "}
            <ScrollLink
              to="projects"
              smooth={true}
              duration={500}
              offset={-80}
              spy={true}
              onClick={() => setOpen(false)}
              className="cursor-pointer"
            >
              Projects
            </ScrollLink>
          </li>
          <li>
            {" "}
            <ScrollLink
              to="certification"
              smooth={true}
              duration={500}
              offset={-80}
              spy={true}
              onClick={() => setOpen(false)}
              className="cursor-pointer"
            >
              Courses
            </ScrollLink>
          </li>
          <li>
            {" "}
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              offset={-80}
              spy={true}
              onClick={() => setOpen(false)}
              className="cursor-pointer"
            >
              Contact
            </ScrollLink>
          </li>
        </ul>
      )}

      <div className="flex items-center gap-5">
        <button
          onClick={() => setOpen(!open)}
          className="bg-white rounded-4xl gap-3 tracking-wide px-20 text-black w-14 h-14 flex items-center justify-center shadow-xl transition-transform duration-300 cursor-pointer"
          title="Menu"
        >
          {/* Text "Menu" hanya muncul kalau belum open */}
          <span
            className={`transition-all duration-300 ${
              open ? "opacity-0 scale-0 absolute" : "opacity-100 scale-100"
            }`}
          >
            Menu
          </span>

          {/* Icon burger */}
          <span
            className={`transition-all duration-300 ease-in-out transform ${
              open
                ? "opacity-0 rotate-180 scale-0 absolute"
                : "opacity-100 rotate-0 scale-100"
            }`}
          >
            <RiMenu3Fill size={20} />
          </span>

          {/* Icon X */}
          <span
            className={`transition-all duration-300 ease-in-out transform ${
              open
                ? "opacity-100 rotate-0 scale-100"
                : "opacity-0 rotate-180 scale-0 absolute"
            }`}
          >
            <FaTimes size={20} />
          </span>
        </button>
      </div>
    </div>
  );
}
