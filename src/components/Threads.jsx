import { useState, useEffect } from "react";
import Threads from "./Reactbits/Threads";

const HeaderThreads = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-full h-[450px] md:h-[600px] relative overflow-hidden">
      <Threads
        // Kurangi amplitude di mobile agar gerakan garis lebih kalem/tipis
        amplitude={isMobile ? 0.5 : 1}
        // Tambahkan distance di mobile agar antar garis ada jarak (tidak menempel)
        distance={isMobile ? 0.5 : 0.4}
        quantity={isMobile ? 15 : 40}
        enableMouseInteraction
      />
    </div>
  );
};

export default HeaderThreads;
