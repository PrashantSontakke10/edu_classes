import React from "react";

/* ---------------- Card Root ---------------- */
const Card = ({ className = "", children, ...props }) => {
  return (
    <div
      className={`rounded-xl border border-gray-200 bg-white shadow-md ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

/* ---------------- Card Header ---------------- */
const CardHeader = ({ className = "", children, ...props }) => {
  return (
    <div
      className={`flex flex-col gap-1.5 p-6 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

/* ---------------- Card Title ---------------- */
const CardTitle = ({ className = "", children, ...props }) => {
  return (
    <h3
      className={`text-2xl font-semibold tracking-tight text-gray-900 ${className}`}
      {...props}
    >
      {children}
    </h3>
  );
};

/* ---------------- Card Description ---------------- */
const CardDescription = ({ className = "", children, ...props }) => {
  return (
    <p
      className={`text-sm text-gray-600 ${className}`}
      {...props}
    >
      {children}
    </p>
  );
};

/* ---------------- Card Content ---------------- */
const CardContent = ({ className = "", children, ...props }) => {
  return (
    <div
      className={`p-6 pt-0 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

/* ---------------- Card Footer ---------------- */
const CardFooter = ({ className = "", children, ...props }) => {
  return (
    <div
      className={`flex items-center p-6 pt-0 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

/* Compound exports */
Card.Header = CardHeader;
Card.Title = CardTitle;
Card.Description = CardDescription;
Card.Content = CardContent;
Card.Footer = CardFooter;

export default Card;
