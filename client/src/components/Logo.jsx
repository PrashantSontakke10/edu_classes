import React from 'react';

const Logo = ({ size = 'medium', showText = true }) => {
  const sizeClasses = {
    small: 'logo-small',
    medium: 'logo-medium', 
    large: 'logo-large'
  };

  return (
    <div className={`logo-container ${sizeClasses[size]}`}>
      <div className="logo-circle">
        <div className="logo-inner">
          <div className="compass-rose">
            <div className="compass-center"></div>
          </div>
          <div className="logo-text-aim">AIM</div>
        </div>
        <div className="logo-outer-text">
          <div className="logo-top-text">INSTITUTE</div>
          <div className="logo-bottom-left">OF SELF DEVELOPMENT</div>
          <div className="logo-bottom-right">,AKOT</div>
        </div>
      </div>
      {showText && (
        <div className="logo-institute-name">
          AIM - The Institute of Self Development
        </div>
      )}
    </div>
  );
};

export default Logo;
