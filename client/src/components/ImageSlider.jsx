import React, { useState, useEffect } from 'react';

const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const images = [
    {
      src: '/images/ceremony-1.jpg',
      alt: 'AIM Institute Ceremony - Prof. V. Inkare Sir felicitation',
      title: 'AIM Institute Ceremony',
      description: 'Prof. V. Inkare Sir being honored at AIM Institute of Self Development, Akot'
    },
    {
      src: '/images/ceremony-2.jpg',
      alt: 'AIM Institute Welcome Ceremony',
      title: 'Welcome Ceremony',
      description: 'Celebrating excellence in education at AIM Institute'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => {
        // Loop continuously
        return (prevSlide + 1) % images.length;
      });
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, [images.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  return (
    <div className="image-slider">
      <div className="slider-container">
        <div 
          className="slider-wrapper"
          style={{ transform: `translateX(-${currentSlide * 50}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="slide">
              <div className="slide-content">
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="slide-image"
                />
                <div className="slide-text-bottom">
                  <h3>{image.title}</h3>
                  <p>{image.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Navigation arrows */}
        <button className="slider-nav prev" onClick={goToPrevious}>
          &#8249;
        </button>
        <button className="slider-nav next" onClick={goToNext}>
          &#8250;
        </button>
        
        {/* Dots indicator */}
        <div className="slider-dots">
          {images.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
        
      </div>
    </div>
  );
};

export default ImageSlider;
