import React from "react";
import ImageLogo from "./ImageLogo";
import ImageSlider from "./ImageSlider";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-blue-900 to-blue-500 text-white py-20 text-center">
      
      <div className="max-w-[1200px] mx-auto px-5">

        {/* Logo + Heading */}
        <div className="flex flex-col items-center mb-10">
          <ImageLogo size="large" showText={false} />

          <h1 className="mt-5 text-4xl md:text-5xl font-bold">
            Welcome to AIM
          </h1>

          <p className="mt-2 text-xl">
            The Institute of Self Development
          </p>

          <p className="mt-1 text-lg">
            Excellence in Education for Classes 5th to 10th
          </p>
        </div>

        {/* Image Slider */}
        <div className="mb-10">
          <ImageSlider />
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-5 justify-center flex-wrap">
          <button className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold text-base hover:-translate-y-1 transition">
            Enroll for Tuition Classes
          </button>

          <button className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold text-base hover:-translate-y-1 transition">
            Free Demo Classes
          </button>
        </div>

        {/* Bottom Text */}
        <div className="mt-10 text-lg font-semibold">
          <p>
            Personalized learning for every student from 5th to 10th standard
          </p>
        </div>

      </div>
    </section>
  );
};

export default Hero;
