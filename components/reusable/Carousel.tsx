import React, { useEffect, useRef, useState } from 'react';

const CarouselArrow = ({ isRight, onClick }: {
  isRight?: boolean,
  onClick: () => void,
}) => (
  <button
    aria-label={`arrow-${isRight ? 'right' : 'left'}`}
    className="material-icons"
    onClick={onClick}
    onKeyPress={onClick}
    role="button"
    tabIndex={0}
  >
    {`chevron_${isRight ? 'right' : 'left'}`}
  </button>
);

CarouselArrow.defaultProps = {
  isRight: false,
};

const CarouselIndicator = ({ activeIndex, index, onClick }: {
  activeIndex: number
  index: number,
  onClick: () => void,
}) => (
  <button
    aria-hidden="true"
    className="material-icons md-18"
    onClick={onClick}
    onKeyPress={onClick}
    role="button"
    tabIndex={0}
  >
    {`radio_button_${activeIndex === index ? 'checked' : 'unchecked'}`}
  </button>
);

const CarouselSlide = ({ activeIndex, index, slide }: {
  activeIndex: number
  index: number,
  slide: JSX.Element,
}) => (
  <li className={`carousel-slide ${index === activeIndex && 'visible'}`}>
    {slide}
  </li>
);

const Carousel = ({ slides }: {
  slides: Array<{ id: string, value: JSX.Element }>
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [auto, setAuto] = useState(true);

  const goToSlide = (index: number) => {
    setAuto(false);
    setActiveIndex(index);
  };

  // add length since % is remainder, not the true mod
  const goToPrevSlide = () => goToSlide((activeIndex - 1 + slides.length) % slides.length);
  const goToNextSlide = () => goToSlide((activeIndex + 1) % slides.length);

  const timerRef = useRef<number | null>(null);
  useEffect(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = window.setTimeout(() => {
      if (auto) {
        setActiveIndex((activeIndex + 1) % slides.length);
      }
      // 9 seconds to view each slide
    }, 9000);
    return () => { if (timerRef.current) clearTimeout(timerRef.current) };
  }, [activeIndex, auto, slides.length]);

  return (
    <>
      <section className="carousel">
        <CarouselArrow onClick={goToPrevSlide} />
        <ul className="carousel-slides">
          {slides.map((slide, index) => (
            <CarouselSlide
              key={`${slide.id}-content`}
              index={index}
              activeIndex={activeIndex}
              slide={slide.value}
            />
          ))}
        </ul>
        <CarouselArrow isRight onClick={goToNextSlide} />
      </section>
      <ul style={{ padding: '0px', textAlign: 'center' }}>
        {slides.map((slide, index) => (
          <CarouselIndicator
            key={`${slide.id}-indicator`}
            index={index}
            activeIndex={activeIndex}
            onClick={() => goToSlide(index)}
          />
        ))}
      </ul>
    </>
  );
};

export default Carousel;
