import PropTypes from 'prop-types';
import React, { useEffect, useRef, useState } from 'react';

const CarouselArrow = ({ isRight, onClick }) => (
  <i
    className={`fas fa-2x fa-angle-${isRight ? 'right' : 'left'}`}
    label="arrow-right"
    onClick={onClick}
    onKeyPress={onClick}
    role="button"
    tabIndex={0}
  />
);

CarouselArrow.defaultProps = {
  isRight: false,
};

CarouselArrow.propTypes = {
  isRight: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

const CarouselIndicator = ({ activeIndex, index, onClick }) => (
  <i
    aria-hidden="true"
    className={`fa-xs fa-circle ${index === activeIndex ? 'fas' : 'far'}`}
    label="indicator"
    onClick={onClick}
    onKeyPress={onClick}
    role="button"
    tabIndex={0}
  />
);

CarouselIndicator.propTypes = {
  activeIndex: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

const CarouselSlide = ({ activeIndex, index, slide }) => (
  <li className={`carousel-slide ${index === activeIndex && 'visible'}`}>
    {slide}
  </li>
);

CarouselSlide.propTypes = {
  activeIndex: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  slide: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired,
};

const Carousel = ({ slides }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [auto, setAuto] = useState(true);

  const goToSlide = (index) => {
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
  }, [auto, activeIndex]);

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
      <ul className="ta-c">
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

Carousel.propTypes = {
  slides: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired,
  })).isRequired,
};

export default Carousel;
