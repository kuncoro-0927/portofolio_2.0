import { useEffect, useRef, useState } from "react";
import TiltedCard from "./Reactbits/TiltedCard";

const ImageCard = () => {
  const containerRef = useRef(null);
  const [cardSize, setCardSize] = useState("380px");

  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        const width = containerRef.current.offsetWidth;
        let finalWidth;

        if (window.innerWidth >= 1280) {
          // xl
          finalWidth = 420;
        } else if (window.innerWidth >= 768) {
          // md
          finalWidth = 300;
        } else {
          // mobile
          finalWidth = width < 380 ? width : 380;
        }

        setCardSize(`${finalWidth}px`);
      }
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full flex justify-center md:justify-end"
    >
      <TiltedCard
        imageSrc="/images/kuncoro3.webp"
        altText="Kuncoro - Fullstack Developer"
        captionText="Kuncoro - Fullstack Developer"
        containerHeight={cardSize}
        containerWidth={cardSize}
        imageHeight={cardSize}
        imageWidth={cardSize}
        rotateAmplitude={12}
        scaleOnHover={1.2}
        showMobileWarning={false}
        showTooltip={true}
        displayOverlayContent={false}
        overlayContent={
          <p className="tilted-card-demo-text text-xl">
            Kuncoro - Fullstack Developer
          </p>
        }
      />
    </div>
  );
};

export default ImageCard;
