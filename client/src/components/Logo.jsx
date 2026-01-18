import React from "react";

const Logo = ({ size = "medium", showText = true }) => {
  const sizeMap = {
    small: {
      outer: "w-[60px] h-[60px]",
      inner: "w-[45px] h-[45px]",
      rose: "w-[35px] h-[35px]",
      aim: "text-xs",
      text: "text-sm",
    },
    medium: {
      outer: "w-[80px] h-[80px]",
      inner: "w-[60px] h-[60px]",
      rose: "w-[50px] h-[50px]",
      aim: "text-base",
      text: "text-lg",
    },
    large: {
      outer: "w-[120px] h-[120px]",
      inner: "w-[90px] h-[90px]",
      rose: "w-[75px] h-[75px]",
      aim: "text-2xl",
      text: "text-xl",
    },
  };

  const s = sizeMap[size];

  return (
    <div className="flex flex-col items-center gap-3 text-center">

      {/* Logo Circle */}
      <div className={`relative rounded-full bg-blue-900 flex items-center justify-center shadow-lg ${s.outer}`}>

        {/* Inner Circle */}
        <div className={`relative bg-white rounded-full flex items-center justify-center ${s.inner}`}>

          {/* Compass Rose */}
          <div className={`relative rounded-full bg-yellow-400 flex items-center justify-center ${s.rose}`}>

            {/* Top Triangle */}
            <div className="absolute -top-2 w-0 h-0 border-l-[8px] border-r-[8px] border-l-transparent border-r-transparent border-b-[20px] border-b-yellow-400"></div>

            {/* Bottom Triangle */}
            <div className="absolute -bottom-2 w-0 h-0 border-l-[8px] border-r-[8px] border-l-transparent border-r-transparent border-t-[20px] border-t-yellow-400"></div>

            {/* Center */}
            <div className="relative w-2 h-2 bg-yellow-400 rounded-full">
              <div className="absolute -top-3 left-[-6px] w-0 h-0 border-l-[6px] border-r-[6px] border-l-transparent border-r-transparent border-b-[15px] border-b-yellow-400"></div>
              <div className="absolute -bottom-3 left-[-6px] w-0 h-0 border-l-[6px] border-r-[6px] border-l-transparent border-r-transparent border-t-[15px] border-t-yellow-400"></div>
            </div>
          </div>

          {/* AIM Text */}
          <div className={`absolute font-bold text-blue-900 ${s.aim}`}>
            AIM
          </div>
        </div>

        {/* Outer Text */}
        <div className="absolute inset-0 text-blue-900 font-semibold text-[10px]">
          <div className="absolute -top-5 left-1/2 -translate-x-1/2">
            INSTITUTE
          </div>
          <div className="absolute -bottom-4 left-[-10px] text-[8px]">
            OF SELF DEVELOPMENT
          </div>
          <div className="absolute -bottom-4 right-[-10px] text-[8px]">
            ,AKOT
          </div>
        </div>
      </div>

      {/* Institute Name */}
      {showText && (
        <div className={`font-bold text-blue-900 leading-tight ${s.text}`}>
          AIM – The Institute of Self Development
        </div>
      )}
    </div>
  );
};

export default Logo;
