import React from 'react';
import ImageLogo from './ImageLogo';
import ImageSlider from './ImageSlider';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '30px' }}>
          <ImageLogo size="large" showText={false} />
          <h1 style={{ marginTop: '20px' }}>Welcome to AIM</h1>
          <p>The Institute of Self Development</p>
          <p>Excellence in Education for Classes 5th to 10th</p>
        </div>
        
        {/* Image Slider */}
        <div style={{ marginBottom: '40px' }}>
          <ImageSlider />
        </div>
        
        <div className="hero-buttons">
          <button className="hero-btn">Enroll for Tuition Classes</button>
          <button className="hero-btn">Free Demo Classes</button>
        </div>
        
        <div style={{ marginTop: '40px', fontSize: '18px', fontWeight: '600' }}>
          <p>Personalized learning for every student from 5th to 10th standard</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
