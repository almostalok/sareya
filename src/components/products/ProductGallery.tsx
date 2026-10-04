"use client";

import React, { useState } from "react";
import { ResponsiveImage } from "@/components/ui/ResponsiveImage";

interface ProductGalleryProps {
  images: string[];
  alt: string;
  badge?: string;
}

export function ProductGallery({ images, alt, badge }: ProductGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const displayImages = images.length > 0 ? images : ["/images/sareya/products/product-thekua.jpg"];
  const activeImage = displayImages[selectedIndex] || displayImages[0];

  return (
    <div className="space-y-4">
      {/* Primary Display Image */}
      <div className="relative group bg-[#EFE3D0]/60 border border-[#211B17]/10 p-2 sm:p-3 shadow-md">
        <div className="relative aspect-4/5 sm:aspect-1/1 lg:aspect-4/5 w-full overflow-hidden bg-white/40">
          <ResponsiveImage
            src={activeImage}
            alt={`${alt} view ${selectedIndex + 1}`}
            aspectRatio="auto"
            objectFit="cover"
            objectPosition="center"
            priority={true}
            className="w-full h-full scale-[1.01] group-hover:scale-[1.03] transition-transform duration-500 ease-out"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />

          {badge && (
            <div className="absolute top-4 left-4 z-10">
              <span className="inline-block bg-[#F7F1E7]/95 backdrop-blur-xs text-[#8E2925] border border-[#8E2925]/30 text-xs font-semibold tracking-wider uppercase px-2.5 py-1">
                {badge}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Thumbnails Row */}
      {displayImages.length > 1 && (
        <div className="flex gap-3 overflow-x-auto pb-1">
          {displayImages.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedIndex(idx)}
              className={`relative w-20 h-20 sm:w-24 sm:h-24 shrink-0 border transition-all duration-200 overflow-hidden bg-white/60 p-1 ${
                idx === selectedIndex
                  ? "border-[#8E2925] ring-2 ring-[#8E2925]/30"
                  : "border-[#211B17]/15 opacity-70 hover:opacity-100"
              }`}
            >
              <ResponsiveImage
                src={img}
                alt={`${alt} thumbnail ${idx + 1}`}
                aspectRatio="1/1"
                objectFit="cover"
                sizes="96px"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
