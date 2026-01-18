import React from 'react';

const Button = ({ 
  children, 
  className = '', 
  type = 'button', 
  disabled = false, 
  onClick,
  ...props 
}) => {
  const baseClasses = 'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';
  const defaultClasses = 'bg-primary text-primary-foreground hover:bg-primary/90 h-10 py-2 px-4';
  
  return (
    <button
      type={type}
      className={`${baseClasses} ${defaultClasses} ${className}`}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
