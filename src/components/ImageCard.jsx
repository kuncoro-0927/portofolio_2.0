import TiltedCard from "./Reactbits/TiltedCard";

const ImageCard = () => {
  const isMobile = window.innerWidth < 768;

  return (
    <div className="w-full flex justify-center md:justify-end">
      <div className="w-full md:w-[300px] lg:w-[350px] xl:w-[420px] 2xl:w-[450px]">
        <TiltedCard
          imageSrc="/images/kuncoro3.webp"
          altText="Kuncoro - Frontend Developer"
          captionText="Kuncoro - Frontend Developer"
          rotateAmplitude={isMobile ? 0 : 12}
          scaleOnHover={isMobile ? 1 : 1.1}
          showMobileWarning={false}
          showTooltip={!isMobile}
          displayOverlayContent={false}
        />
      </div>
    </div>
  );
};

export default ImageCard;
