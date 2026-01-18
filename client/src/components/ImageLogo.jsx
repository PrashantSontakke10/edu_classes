import React from 'react';

const ImageLogo = ({ size = 'medium', showText = true, className = '' }) => {
  const sizeClasses = {
    small: 'logo-small',
    medium: 'logo-medium', 
    large: 'logo-large'
  };

  return (
    <div className={`logo-container ${sizeClasses[size]} ${className}`}>
      <div className="image-logo-wrapper">
        <img 
          src="/logo.jpg" 
          alt="AIM - The Institute of Self Development Logo"
          className="logo-image"
        />
      </div>
      {showText && (
        <div className="logo-institute-name">
          AIM - The Institute of Self Development
        </div>
      )}
    </div>
  );
};

export default ImageLogo;
