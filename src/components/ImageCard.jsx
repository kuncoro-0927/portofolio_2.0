import { useEffect, useRef, useState } from "react";
import TiltedCard from "./Reactbits/TiltedCard";

const ImageCard = () => {
  const containerRef = useRef(null);
  const [cardSize, setCardSize] = useState("380px");

  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        const width = containerRef.current.offsetWidth; // ambil lebar sisa container
        // di mobile -> pakai width container
        // di desktop -> maksimal 380px
        const finalWidth = width < 380 ? width : 380;
        setCardSize(`${finalWidth}px`);
      }
    };

    updateSize(); // cek pertama kali
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div
      ref={containerRef}
      className=" w-full  flex justify-center md:justify-end"
    >
      <TiltedCard
        imageSrc="/images/kuncoro3.jpg"
        altText="Kendrick Lamar - GNX Album Cover"
        captionText="Kendrick Lamar - GNX"
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
          <p className="tilted-card-demo-text text-xl">Kendrick Lamar - GNX</p>
        }
      />
    </div>
  );
};

export default ImageCard;
