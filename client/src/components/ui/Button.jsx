import React from "react";

const Button = ({
  children,
  className = "",
  type = "button",
  disabled = false,
  onClick,
  ...props
}) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`
        inline-flex items-center justify-center
        h-10 px-4 py-2
        rounded-md
        text-sm font-medium
        bg-blue-900 text-white
        hover:bg-blue-800
        transition-colors
        focus:outline-none
        focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
        disabled:opacity-50 disabled:pointer-events-none
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
