import Particles from "./OrbReactBits";
const Background = () => {
  return (
    <div style={{ width: "100%", height: "600px", position: "relative" }}>
      <Particles
        particleColors={["#a6a6a6", "#3d3d3d"]}
        particleCount={100}
        particleSpread={10}
        speed={0.3}
        particleBaseSize={60}
        moveParticlesOnHover={false}
        alphaParticles={false}
        disableRotation={true}
      />
    </div>
  );
};

export default Background;
