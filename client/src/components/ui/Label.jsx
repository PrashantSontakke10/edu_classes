import React from "react";

const Label = ({
  className = "",
  children,
  ...props
}) => {
  return (
    <label
      className={`
        text-sm font-medium text-gray-800
        leading-none
        block
        mb-1
        ${className}
      `}
      {...props}
    >
      {children}
    </label>
  );
};

export default Label;
