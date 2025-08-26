import LightRays from "./Reactbits/LightRays";

const Light = () => {
  return (
    <div style={{ width: "100%", height: "600px", position: "relative" }}>
      <LightRays
        raysOrigin="top-right"
        raysColor="#ffffff"
        raysSpeed={1}
        lightSpread={2}
        rayLength={3}
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
