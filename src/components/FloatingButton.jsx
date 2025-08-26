import { useState } from "react";
import { FaWhatsapp, FaPhone, FaPlus, FaTimes } from "react-icons/fa";
import { FaHeadset } from "react-icons/fa6";
import { RiMenu3Fill } from "react-icons/ri";
export default function FloatingButton() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-3">
      {open && (
        <>
          <a
            href="https://wa.me/6281938594544"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-br from-black to-black/70 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg"
            title="WhatsApp"
          >
            <FaWhatsapp size={25} />
          </a>
          <a
            href="/contact"
            className="bg-gradient-to-br from-black to-black/70 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg"
            title="Kontak"
          >
            <FaPhone size={18} />
          </a>
        </>
      )}
      <div className="flex items-center gap-5">
        <button
          onClick={() => setOpen(!open)}
          className="bg-white rounded-full gap-3 tracking-wide px-20 text-black w-14 h-14 flex items-center justify-center shadow-xl transition-transform duration-300"
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
