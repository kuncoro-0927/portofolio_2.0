import { useState, useEffect } from "react";
import Threads from "./Reactbits/Threads";

const HeaderThreads = () => {
  const [distance, setDistance] = useState(0.6);

  useEffect(() => {
  
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setDistance(0.4); 
      } else {
        setDistance(0.6);
      }
    };

    handleResize();


    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-full h-[400px] md:h-[600px] relative">
      <Threads 
        amplitude={1} 
        distance={distance} 
        enableMouseInteraction 
      />
    </div>
  );
};

export default HeaderThreads;