import React from "react";

const Input = ({
  className = "",
  type = "text",
  ...props
}) => {
  return (
    <input
      type={type}
      className={`
        flex w-full h-10
        rounded-md
        border border-gray-300
        bg-white
        px-3 py-2
        text-sm text-gray-900
        placeholder:text-gray-400
        focus:outline-none
        focus:ring-2 focus:ring-blue-500 focus:border-blue-500
        transition
        disabled:cursor-not-allowed
        disabled:opacity-50
        ${className}
      `}
      {...props}
    />
  );
};

export default Input;
