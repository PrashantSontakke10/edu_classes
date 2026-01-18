import React from 'react';

const Card = ({ 
  className = '', 
  children,
  ...props 
}) => {
  const baseClasses = 'rounded-lg border bg-card text-card-foreground shadow-sm';
  
  return (
    <div
      className={`${baseClasses} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

const CardHeader = ({ className = '', children, ...props }) => {
  const baseClasses = 'flex flex-col space-y-1.5 p-6';
  return (
    <div className={`${baseClasses} ${className}`} {...props}>
      {children}
    </div>
  );
};

const CardTitle = ({ className = '', children, ...props }) => {
  const baseClasses = 'text-2xl font-semibold leading-none tracking-tight';
  return (
    <h3 className={`${baseClasses} ${className}`} {...props}>
      {children}
    </h3>
  );
};

const CardDescription = ({ className = '', children, ...props }) => {
  const baseClasses = 'text-sm text-muted-foreground';
  return (
    <p className={`${baseClasses} ${className}`} {...props}>
      {children}
    </p>
  );
};

const CardContent = ({ className = '', children, ...props }) => {
  const baseClasses = 'p-6 pt-0';
  return (
    <div className={`${baseClasses} ${className}`} {...props}>
      {children}
    </div>
  );
};

const CardFooter = ({ className = '', children, ...props }) => {
  const baseClasses = 'flex items-center p-6 pt-0';
  return (
    <div className={`${baseClasses} ${className}`} {...props}>
      {children}
    </div>
  );
};

Card.Header = CardHeader;
Card.Title = CardTitle;
Card.Description = CardDescription;
Card.Content = CardContent;
Card.Footer = CardFooter;

export default Card;
