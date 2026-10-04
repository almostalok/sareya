"use client";

import React, { useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ResponsiveImage } from "@/components/ui/ResponsiveImage";
import { ingredients } from "@/data/ingredients";
import { MapPin } from "lucide-react";

export function IngredientSection() {
  const [activeIngredientId, setActiveIngredientId] = useState<string>(ingredients[0].id);

  return (
    <section className="py-16 sm:py-24 md:py-28 bg-[#F7F1E7] relative overflow-hidden">
      <Container className="space-y-12 sm:space-y-16">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2 border-b border-[#211B17]/10">
          <SectionHeading
            eyebrow="PROVENANCE & CRAFT"
            title="SIMPLE INGREDIENTS. DEEP ROOTS."
            subtitle="Before our sweets and pantry foods reach your hands, they begin in the mineral-rich Gangetic floodplains and freshwater wetlands of Bihar."
          />
          <div className="text-xs uppercase tracking-[0.2em] text-[#8E2925] font-semibold hidden md:block shrink-0">
            6 Heritage Elements
          </div>
        </div>

        {/* Dynamic Ingredient Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-5">
          {ingredients.map((item) => {
            const isActive = activeIngredientId === item.id;
            return (
              <div
                key={item.id}
                onMouseEnter={() => setActiveIngredientId(item.id)}
                onClick={() => setActiveIngredientId(item.id)}
                className={`group cursor-pointer flex flex-col border transition-all duration-300 p-2 sm:p-2.5 bg-white/60 ${
                  isActive
                    ? "border-[#8E2925] shadow-md ring-1 ring-[#8E2925]/30 bg-white"
                    : "border-[#211B17]/10 hover:border-[#8E2925]/40"
                }`}
              >
                {/* Individual Raw Asset */}
                <div className="relative aspect-square overflow-hidden bg-[#EFE3D0]/60">
                  <ResponsiveImage
                    src={item.image}
                    alt={item.name}
                    aspectRatio="1/1"
                    objectFit="cover"
                    hoverScale={true}
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                    className="group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute top-2 right-2 bg-[#211B17]/75 backdrop-blur-xs text-[#F7F1E7] text-[9px] px-1.5 py-0.5 uppercase tracking-wider font-medium">
                    {item.localName}
                  </div>
                </div>

                {/* UI-Generated Title & Label */}
                <div className="pt-3 pb-1 space-y-1">
                  <h4 className="font-serif text-sm sm:text-base text-[#211B17] group-hover:text-[#8E2925] transition-colors line-clamp-1 font-medium">
                    {item.name}
                  </h4>
                  <p className="text-[11px] text-[#8E2925] font-medium tracking-wide">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Dynamic Detail Callout for Active Ingredient */}
        {(() => {
          const active = ingredients.find((i) => i.id === activeIngredientId) || ingredients[0];
          return (
            <div className="bg-[#EFE3D0]/60 border border-[#211B17]/10 p-5 sm:p-7 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 transition-all duration-300">
              <div className="space-y-2 max-w-2xl">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#8E2925]">
                  <span>Focus Ingredient:</span>
                  <span className="text-[#211B17] font-serif text-base">{active.name}</span>
                  <span className="text-xs text-[#75695D]">({active.localName})</span>
                </div>
                <p className="text-sm md:text-base text-[#75695D] leading-relaxed font-light">
                  {active.description}
                </p>
              </div>

              <div className="shrink-0 flex items-center gap-2 bg-[#F7F1E7] px-4 py-2.5 border border-[#211B17]/10 text-xs text-[#211B17]">
                <MapPin size={15} className="text-[#8E2925]" />
                <span className="font-medium">Origin: {active.origin}</span>
              </div>
            </div>
          );
        })()}
      </Container>
    </section>
  );
}
