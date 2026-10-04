"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ResponsiveImage } from "@/components/ui/ResponsiveImage";
import { biharRegions, BiharRegion } from "@/data/regions";
import { MapPin, ArrowRight, Sparkles } from "lucide-react";

export function BiharMap() {
  const [selectedRegion, setSelectedRegion] = useState<BiharRegion>(biharRegions[0]);

  return (
    <section className="py-16 sm:py-24 md:py-32 bg-[#211B17] text-[#F7F1E7] relative overflow-hidden">
      {/* Subtle texture background */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none bg-repeat"
        style={{
          backgroundImage: "url('/images/sareya/textures/texture-illustration-pattern.jpg')",
          backgroundSize: "380px",
        }}
      />

      <Container className="relative z-10 space-y-12 sm:space-y-16">
        {/* Section Heading */}
        <SectionHeading
          theme="dark"
          eyebrow="TERROIRS OF BIHAR"
          title="EVERY FLAVOUR HAS A PLACE."
          subtitle="From the marshy lotus wetlands of Mithila to the dry pulse plateaus of Magadh, Bihar's micro-climates give every delicacy its distinct identity."
        />

        {/* Desktop: Split TEXT | MAP, Mobile: Stacked with region selector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Text & Region Selector Column (5 cols on desktop) */}
          <div className="lg:col-span-5 space-y-6 sm:space-y-8 order-2 lg:order-1">
            {/* Interactive Region Pills */}
            <div className="flex flex-wrap gap-2">
              {biharRegions.map((region) => {
                const isSelected = selectedRegion.id === region.id;
                return (
                  <button
                    key={region.id}
                    onClick={() => setSelectedRegion(region)}
                    className={`px-3 py-1.5 text-xs tracking-wider uppercase transition-all duration-300 border ${
                      isSelected
                        ? "bg-[#8E2925] border-[#8E2925] text-[#F7F1E7] font-semibold"
                        : "bg-[#291D17] border-[#F7F1E7]/15 text-[#EFE3D0]/80 hover:border-[#D39A38]"
                    }`}
                  >
                    <span>{region.name.split(" ")[0]}</span>
                    <span className="text-[10px] ml-1.5 opacity-60">({region.hindiName})</span>
                  </button>
                );
              })}
            </div>

            {/* Region Detail Card */}
            <div className="bg-[#291D17] border border-[#F7F1E7]/10 p-6 sm:p-7 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D39A38] flex items-center gap-1.5">
                  <MapPin size={14} />
                  {selectedRegion.name}
                </span>
                <span className="font-serif text-xl text-[#F7F1E7]/40 font-light">
                  {selectedRegion.hindiName}
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#F7F1E7]">
                  {selectedRegion.speciality}
                </h3>
                <p className="text-sm text-[#EFE3D0]/70 leading-relaxed font-light">
                  {selectedRegion.description}
                </p>
              </div>

              <div className="pt-3 border-t border-[#F7F1E7]/10 space-y-3">
                <div className="flex items-center gap-2 text-xs text-[#D39A38]">
                  <Sparkles size={14} />
                  <span className="font-light">{selectedRegion.landscapeNote}</span>
                </div>

                <div className="flex items-center justify-between pt-1">
                  <span className="text-xs text-[#EFE3D0]/60">
                    Featured in: <strong className="text-[#F7F1E7] font-medium">{selectedRegion.productKey}</strong>
                  </span>
                  <Link
                    href="/shop"
                    className="text-xs uppercase tracking-wider text-[#D39A38] hover:text-[#F7F1E7] flex items-center gap-1 font-semibold"
                  >
                    <span>Shop</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            </div>

            <div className="pt-1">
              <Link
                href="/bihar"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-[0.16em] uppercase text-[#D39A38] hover:text-[#F7F1E7] transition-colors border-b border-[#D39A38] pb-1"
              >
                <span>EXPLORE ALL REGIONS</span>
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>

          {/* Map Column (7 cols on desktop) */}
          <div className="lg:col-span-7 w-full order-1 lg:order-2">
            <div className="relative group p-3 sm:p-4 bg-[#291D17] border border-[#F7F1E7]/15 shadow-2xl">
              <div className="relative aspect-4/3 sm:aspect-16/11 lg:aspect-4/3 overflow-hidden bg-[#1c1410]">
                {/* The Map Artwork only */}
                <ResponsiveImage
                  src="/images/sareya/bihar/bihar-regional-map.jpg"
                  alt="Illustrated cultural culinary map of Bihar regions"
                  aspectRatio="auto"
                  objectFit="contain"
                  objectPosition="center"
                  className="w-full h-full scale-[1.01] group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                  sizes="(max-width: 1024px) 100vw, 55vw"
                />

                {/* Interactive Hotspot Overlay Pins */}
                {biharRegions.map((region) => {
                  const isSelected = selectedRegion.id === region.id;
                  return (
                    <button
                      key={region.id}
                      onClick={() => setSelectedRegion(region)}
                      style={{
                        left: `${region.coordinates.x}%`,
                        top: `${region.coordinates.y}%`,
                      }}
                      aria-label={`Select ${region.name}`}
                      className="absolute -translate-x-1/2 -translate-y-1/2 group/pin z-20 focus:outline-none"
                    >
                      <div
                        className={`relative flex items-center justify-center rounded-full transition-all duration-300 ${
                          isSelected
                            ? "w-8 h-8 bg-[#8E2925] ring-4 ring-[#D39A38]/50 shadow-lg scale-110"
                            : "w-6 h-6 bg-[#211B17]/90 hover:bg-[#8E2925] border border-[#F7F1E7]/40 hover:scale-110"
                        }`}
                      >
                        <MapPin size={isSelected ? 16 : 13} className="text-[#F7F1E7]" />
                      </div>

                      {/* Tooltip on hover/active */}
                      <span
                        className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-1.5 whitespace-nowrap text-[10px] uppercase tracking-wider font-semibold py-1 px-2 pointer-events-none transition-opacity duration-200 ${
                          isSelected
                            ? "bg-[#8E2925] text-[#F7F1E7] opacity-100 shadow-md"
                            : "bg-[#211B17] text-[#EFE3D0] opacity-0 group-hover/pin:opacity-100 border border-[#F7F1E7]/20"
                        }`}
                      >
                        {region.name.split(" ")[0]}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Caption */}
              <div className="pt-2 px-1 flex items-center justify-between text-[11px] text-[#EFE3D0]/50 font-light">
                <span>Interactive Provincial Map • Tap regions to explore</span>
                <span className="font-serif italic text-[#D39A38]">Gangetic Terroir</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
