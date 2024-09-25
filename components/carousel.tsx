import React, { useEffect, useRef, useState } from 'react';

function CarouselArrow({
  isRight = false,
  onClick,
}: {
  isRight?: boolean;
  onClick: () => void;
}) {
  return (
    <button aria-hidden onClick={onClick} role="button" tabIndex={0}>
      {isRight ? '>' : '<'}
    </button>
  );
}

function CarouselIndicator({
  activeIndex,
  index,
  onClick,
}: {
  activeIndex: number;
  index: number;
  onClick: () => void;
}) {
  return (
    <button aria-hidden onClick={onClick} role="button" tabIndex={0}>
      {activeIndex === index ? '+' : '-'}
    </button>
  );
}

function CarouselSlide({
  activeIndex,
  index,
  slide,
}: {
  activeIndex: number;
  index: number;
  slide: JSX.Element;
}) {
  return (
    <li className={`${index !== activeIndex ? 'hidden' : ''}`}>{slide}</li>
  );
}

function Carousel({
  slides,
}: {
  slides: Array<{ id: string; value: JSX.Element }>;
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [auto, setAuto] = useState(true);

  const goToSlide = (index: number) => {
    setAuto(false);
    setActiveIndex(index);
  };

  // add length since % is remainder, not the true mod
  const goToPrevSlide = () =>
    goToSlide((activeIndex - 1 + slides.length) % slides.length);
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
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [activeIndex, auto, slides.length]);

  return (
    <>
      <section className="flex min-h-[350px] w-full items-center justify-between gap-2 sm:min-h-[200px] md:gap-8 lg:min-h-[120px] xl:min-h-[100px]">
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
      <ul className="flex gap-2">
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
}

export default Carousel;
