import Threads from "./Reactbits/Threads";
const HeaderThreads = () => {
  return (
    <div className="w-full h-[450px] md:h-[600px] relative">
      <Threads amplitude={1} distance={0.4} enableMouseInteraction />
    </div>
  );
};

export default HeaderThreads;
