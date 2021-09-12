import React, { useEffect, useRef, useState } from 'react';

const CarouselArrow = ({ isRight, onClick }: {
  isRight?: boolean,
  onClick: () => void,
}) => (
  <i
    aria-label="arrow-right"
    className={`fas fa-2x fa-angle-${isRight ? 'right' : 'left'}`}
    onClick={onClick}
    onKeyPress={onClick}
    role="button"
    tabIndex={0}
  />
);

CarouselArrow.defaultProps = {
  isRight: false,
};

const CarouselIndicator = ({ activeIndex, index, onClick }: {
  activeIndex: number
  index: number,
  onClick: () => void,
}) => (
  <i
    aria-hidden="true"
    className={`fa-xs fa-circle ${index === activeIndex ? 'fas' : 'far'}`}
    onClick={onClick}
    onKeyPress={onClick}
    role="button"
    tabIndex={0}
  />
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

  const timerRef = useRef(null);
  useEffect(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(() => {
      if (auto) {
        setActiveIndex((activeIndex + 1) % slides.length);
      }
      // 9 seconds to view each slide
    }, 9000);
    return () => clearTimeout(timerRef.current);
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
      <ul className="ta-c" style={{ padding: '0px' }}>
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
