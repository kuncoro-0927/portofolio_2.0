import TiltedCard from "./Reactbits/TiltedCard";
const ImageCard = () => {
  return (
    <div>
      <TiltedCard
        imageSrc="/images/kuncoro3.jpg"
        altText="Kendrick Lamar - GNX Album Cover"
        captionText="Kendrick Lamar - GNX"
        containerHeight="350px"
        containerWidth="350px"
        imageHeight="350px"
        imageWidth="350px"
        rotateAmplitude={12}
        scaleOnHover={1.2}
        showMobileWarning={false}
        showTooltip={true}
        displayOverlayContent={false}
        overlayContent={
          <p className="tilted-card-demo-text text-xl">Kendrick Lamar - GNX</p>
        }
      />
    </div>
  );
};

export default ImageCard;
