import { useState, useEffect } from "react";
import LightRays from "./Reactbits/LightRays";

const Light = () => {
  const [rayLength, setRayLength] = useState(3);

  useEffect(() => {
    const updateRayLength = () => {
      if (window.innerWidth <= 768) {
        setRayLength(1); // mobile
      } else {
        setRayLength(1.5); // desktop
      }
    };

    updateRayLength(); // set awal
    window.addEventListener("resize", updateRayLength);

    return () => window.removeEventListener("resize", updateRayLength);
  }, []);

  return (
    <div style={{ width: "100%", height: "600px", position: "relative" }}>
      <LightRays
        raysOrigin="top-right"
        raysColor="#ffffff"
        raysSpeed={1}
        lightSpread={2}
        rayLength={rayLength}
        followMouse={true}
        mouseInfluence={0.1}
        noiseAmount={0.1}
        distortion={0.05}
        className="custom-rays"
      />
    </div>
  );
};

export default Light;
