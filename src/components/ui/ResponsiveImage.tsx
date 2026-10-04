"use client";

import React, { useState } from "react";
import Image from "next/image";

interface ResponsiveImageProps {
  src: string;
  alt: string;
  aspectRatio?: string; // e.g. "4/5", "16/9", "4/3", "1/1", "auto"
  objectFit?: "cover" | "contain" | "fill" | "none" | "scale-down";
  objectPosition?: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
  wrapperClassName?: string;
  overlayOpacity?: number;
  fallbackSrc?: string;
  hoverScale?: boolean;
}

export function ResponsiveImage({
  src,
  alt,
  aspectRatio = "4/5",
  objectFit = "cover",
  objectPosition = "center",
  priority = false,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  className = "",
  wrapperClassName = "",
  overlayOpacity = 0,
  fallbackSrc = "/images/sareya/products/product-thekua.jpg",
  hoverScale = false,
}: ResponsiveImageProps) {
  const [currentSrc, setCurrentSrc] = useState(src);
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div
      className={`relative w-full overflow-hidden ${wrapperClassName}`}
      style={{
        aspectRatio: aspectRatio === "auto" ? undefined : aspectRatio,
      }}
    >
      <Image
        src={currentSrc}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        quality={88}
        onError={() => setCurrentSrc(fallbackSrc)}
        onLoad={() => setIsLoaded(true)}
        className={`w-full h-full transition-transform duration-700 ease-out ${
          hoverScale ? "group-hover:scale-[1.03]" : ""
        } ${isLoaded ? "opacity-100" : "opacity-0"} ${className}`}
        style={{
          objectFit,
          objectPosition,
          transition: "transform 500ms cubic-bezier(0.25, 1, 0.5, 1), opacity 400ms ease",
        }}
      />
      {overlayOpacity > 0 && (
        <div
          className="absolute inset-0 bg-black pointer-events-none transition-opacity duration-300"
          style={{ opacity: overlayOpacity }}
        />
      )}
    </div>
  );
}
