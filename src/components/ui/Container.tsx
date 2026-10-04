import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  as?: "div" | "section" | "article" | "header" | "footer";
}

export function Container({
  children,
  className = "",
  id,
  as: Component = "div",
}: ContainerProps) {
  return (
    <Component
      id={id}
      className={`w-[min(calc(100%-32px),1440px)] md:w-[min(calc(100%-64px),1440px)] mx-auto ${className}`}
    >
      {children}
    </Component>
  );
}
