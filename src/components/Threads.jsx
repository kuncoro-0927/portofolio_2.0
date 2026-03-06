import { useState, useEffect } from "react";
import Threads from "./Reactbits/Threads";

const HeaderThreads = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();

    const timer = setTimeout(() => {
      setShouldRender(true);
    }, 1000);

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="w-full h-[450px] md:h-[600px] relative overflow-hidden">
      {shouldRender && (
        <Threads
          amplitude={isMobile ? 0.4 : 1}
          distance={isMobile ? 0.5 : 0.4}
          quantity={isMobile ? 8 : 40} // Turunin dikit lagi ke 8 buat mobile
          enableMouseInteraction
        />
      )}
    </div>
  );
};
export default HeaderThreads;
