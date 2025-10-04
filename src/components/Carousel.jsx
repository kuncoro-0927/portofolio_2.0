import React, { useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import ClassNames from "embla-carousel-class-names";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";

const Carousel = ({ slides, options }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [ClassNames()]);
  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const [lightboxOpen, setLightboxOpen] = useState(false);

  const lightboxSlides = slides.map((slide) => ({ src: slide.image }));

  const handleOpenLightbox = () => {
    if (emblaApi) {
      setLightboxOpen(true);
    }
  };
  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide, index) => (
            <div className="embla__slide group relative" key={slide.id}>
              <img
                className="embla__slide__img w-full h-full object-cover rounded-lg shadow-lg"
                src={slide.image}
                alt={slide.title}
              />

              <div
                className={`absolute bottom-4 left-4 w-fit bg-[#f5f5f5]/5 backdrop-blur-sm rounded-3xl py-2 px-6 text-white text-sm  ${
                  selectedIndex === index ? "" : ""
                }`}
              >
                {slide.title}
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={handleOpenLightbox}
        className="absolute top-4 right-4 z-[9999] bg-white text-black px-6 py-2 rounded-full text-sm shadow-lg hover:bg-gray-200 cursor-pointer"
      >
        Full Preview
      </button>
      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        index={selectedIndex} // buka slide yang aktif
        slides={lightboxSlides}
        plugins={[Zoom, Fullscreen]}
      />

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={"embla__dot".concat(
                index === selectedIndex ? " embla__dot--selected" : ""
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
