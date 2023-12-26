import React from "react";

interface HeadingTextProps {
  children: React.ReactNode;
  classProps?: string;
}

function HeadingText({ children, classProps }: HeadingTextProps) {
  return <p className={`heading-text ${classProps}`}>{children}</p>;
}

export default HeadingText;
