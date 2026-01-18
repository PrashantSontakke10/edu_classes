import React, { useState, useEffect } from "react";

const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    {
      src: "../../public/images/ceremony-1.jpg",
      alt: "AIM Institute Ceremony - Prof. V. Inkare Sir felicitation",
      title: "AIM Institute Ceremony",
      description:
        "Prof. V. Inkare Sir being honored at AIM Institute of Self Development, Akot",
    },
    {
      src: "../../public/images/ceremony-2.jpg",
      alt: "AIM Institute Welcome Ceremony",
      title: "Welcome Ceremony",
      description: "Celebrating excellence in education at AIM Institute",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [images.length]);

  const goToPrevious = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + images.length) % images.length
    );
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="w-full max-w-[1200px] mx-auto relative overflow-hidden rounded-2xl shadow-2xl">
      
      {/* Slider Container */}
      <div className="relative w-full h-[500px] md:h-[400px] sm:h-[300px] overflow-hidden">
        
        {/* Slides Wrapper */}
        <div
          className="flex w-[200%] h-full transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 50}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="w-1/2 h-full relative">
              
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover object-center"
              />

              {/* Text Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/60 to-black/30 text-white p-6 text-center">
                <h3 className="text-2xl md:text-xl font-bold mb-2 drop-shadow-lg">
                  {image.title}
                </h3>
                <p className="text-base md:text-sm drop-shadow">
                  {image.description}
                </p>
              </div>

            </div>
          ))}
        </div>

        {/* Previous Button */}
        <button
          onClick={goToPrevious}
          className="absolute top-1/2 left-5 -translate-y-1/2 bg-white/90 hover:bg-white text-blue-900 w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold transition hover:scale-110 shadow-lg"
        >
          &#8249;
        </button>

        {/* Next Button */}
        <button
          onClick={goToNext}
          className="absolute top-1/2 right-5 -translate-y-1/2 bg-white/90 hover:bg-white text-blue-900 w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold transition hover:scale-110 shadow-lg"
        >
          &#8250;
        </button>

        {/* Dots */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-3">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition ${
                index === currentSlide
                  ? "bg-white scale-125"
                  : "bg-white/50 hover:bg-white/80"
              }`}
            />
          ))}
        </div>

      </div>
    </div>
  );
};

export default ImageSlider;
