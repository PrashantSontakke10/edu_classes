import React from "react";

const ImageLogo = ({ size = "medium", showText = true, className = "" }) => {
  
  const sizeMap = {
    small: "w-[60px] h-[60px]",
    medium: "w-[80px] h-[80px]",
    large: "w-[120px] h-[120px]",
  };

  const textSizeMap = {
    small: "text-sm",
    medium: "text-lg",
    large: "text-xl",
  };

  return (
    <div
      className={`flex items-center gap-4 ${
        size === "large" ? "flex-col text-center" : ""
      } ${className}`}
    >
      
      {/* Logo Image */}
      <div className="flex items-center justify-center">
        <img
          src="/logo.jpg"
          alt="AIM - The Institute of Self Development Logo"
          className={`${sizeMap[size]} object-contain`}
        />
      </div>

      {/* Institute Name */}
      {showText && (
        <div
          className={`font-bold text-blue-900 leading-tight ${textSizeMap[size]}`}
        >
          AIM - The Institute of Self Development
        </div>
      )}
    </div>
  );
};

export default ImageLogo;
