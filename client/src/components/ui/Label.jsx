import React from 'react';

const Label = ({ 
  className = '', 
  children,
  ...props 
}) => {
  const baseClasses = 'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70';
  
  return (
    <label
      className={`${baseClasses} ${className}`}
      {...props}
    >
      {children}
    </label>
  );
};

export default Label;
