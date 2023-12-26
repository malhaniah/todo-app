import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  classProps?: string;
  onClick?: () => void;
}

function Button({ children, classProps, onClick }: ButtonProps) {
  return (
    <button className={`button ${classProps}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
