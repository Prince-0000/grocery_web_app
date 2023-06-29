import React, { useState, useEffect } from 'react';

const Carousel = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(() => {
        setActiveIndex((activeIndex + 1) % items.length);
      }, 3000);

      return () => {
        clearInterval(interval);
      };
    }
  }, [autoplay]);

  const handleNext = () => {
    setActiveIndex((activeIndex + 1) % items.length);
  };

  const handlePrev = () => {
    setActiveIndex((activeIndex - 1 + items.length) % items.length);
  };

  return (
    <div className="carousel-container">
      <div className="carousel">
        {items.map((item, index) => (
          <div
            key={index}
            className={`carousel-item ${activeIndex === index ? 'active' : ''}`}
          >
            <h4>{item.title}</h4>
            <img src={item.image} alt={item.title} />
          </div>
        ))}
      </div>
      <div className="carousel-controls">
        <button onClick={handlePrev} className="carousel-control-prev">
          <span>&lsaquo;</span>
        </button>
        <button onClick={handleNext} className="carousel-control-next">
          <span>&rsaquo;</span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;