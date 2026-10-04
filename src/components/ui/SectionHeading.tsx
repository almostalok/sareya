import React from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  theme?: "light" | "dark";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  theme = "light",
  className = "",
}: SectionHeadingProps) {
  const isDark = theme === "dark";

  return (
    <div
      className={`space-y-3 ${
        align === "center"
          ? "text-center mx-auto max-w-3xl"
          : align === "right"
          ? "text-right ml-auto max-w-3xl"
          : "text-left max-w-3xl"
      } ${className}`}
    >
      {eyebrow && (
        <span
          className={`inline-block text-[11px] sm:text-xs font-semibold tracking-[0.22em] uppercase ${
            isDark ? "text-[#D39A38]" : "text-[#8E2925]"
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-serif tracking-tight font-normal leading-[1.08] ${
          isDark ? "text-[#F7F1E7]" : "text-[#211B17]"
        }`}
        style={{ fontSize: "clamp(2rem, 4vw, 3.8rem)" }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-sm sm:text-base md:text-lg leading-relaxed font-light ${
            isDark ? "text-[#EFE3D0]/80" : "text-[#75695D]"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
