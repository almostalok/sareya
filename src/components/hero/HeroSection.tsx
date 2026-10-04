import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ResponsiveImage } from "@/components/ui/ResponsiveImage";
import { ArrowRight, Sparkles } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative w-full pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 overflow-hidden bg-[#F7F1E7]">
      {/* Subtle heritage background texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none bg-repeat"
        style={{
          backgroundImage: "url('/images/sareya/textures/texture-banana-leaf.jpg')",
          backgroundSize: "400px",
        }}
      />

      <Container className="relative z-10">
        {/* Desktop / Tablet Two-Column Layout (approx 45% / 55%) & Mobile Stacked */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-center min-h-[clamp(520px,76vh,820px)]">
          {/* Content Column (Desktop: 5 cols, Mobile: full) */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-6 sm:space-y-8 pr-0 lg:pr-4 order-1">
            {/* Brand Eyebrow */}
            <div className="inline-flex items-center gap-2">
              <span className="w-6 h-px bg-[#8E2925]" />
              <span className="text-[11px] sm:text-xs font-semibold tracking-[0.24em] uppercase text-[#8E2925]">
                BIHAR, BEAUTIFULLY PACKED
              </span>
            </div>

            {/* Primary Display Heading */}
            <h1
              className="font-serif text-[#211B17] font-normal leading-[0.98] tracking-tight"
              style={{ fontSize: "clamp(2.7rem, 5.8vw, 5.5rem)" }}
            >
              THE FLAVOURS
              <br />
              <span className="italic font-light text-[#8E2925]">OF BIHAR,</span>
              <br />
              FOR EVERYWHERE.
            </h1>

            {/* Supporting Copy */}
            <p className="text-[#75695D] text-sm sm:text-base md:text-lg font-light leading-relaxed max-w-lg">
              Heirloom sweets, cold stone-ground superfoods, and festive provisions.
              Slowly made with pure A2 bilona ghee, organic cane jaggery, and unhurried courtyard care.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Button
                href="/shop"
                variant="primary"
                size="lg"
                icon={<ArrowRight size={16} />}
              >
                SHOP THE COLLECTION
              </Button>

              <Button
                href="/story"
                variant="outline"
                size="lg"
              >
                OUR HERITAGE
              </Button>
            </div>

            {/* Mini Trust Markers */}
            <div className="grid grid-cols-3 gap-3 pt-6 border-t border-[#211B17]/10 text-[#75695D]">
              <div>
                <p className="font-serif text-lg sm:text-xl font-normal text-[#211B17]">100%</p>
                <p className="text-[11px] uppercase tracking-wider text-[#75695D]">Pure Desi Ghee</p>
              </div>
              <div>
                <p className="font-serif text-lg sm:text-xl font-normal text-[#211B17]">Stone</p>
                <p className="text-[11px] uppercase tracking-wider text-[#75695D]">Chakki Milled</p>
              </div>
              <div>
                <p className="font-serif text-lg sm:text-xl font-normal text-[#211B17]">Zero</p>
                <p className="text-[11px] uppercase tracking-wider text-[#75695D]">Refined Sugar</p>
              </div>
            </div>
          </div>

          {/* Visual Column (Desktop: 7 cols, Mobile: full) */}
          <div className="lg:col-span-7 w-full order-2">
            <div className="relative group w-full border border-[#211B17]/10 bg-[#EFE3D0]/40 p-2 sm:p-3 shadow-xl">
              {/* Responsive Container handling desktop high aspect ratio and mobile 4/3 */}
              <div className="relative w-full aspect-4/3 sm:aspect-16/11 lg:aspect-4/3 overflow-hidden">
                <ResponsiveImage
                  src="/images/sareya/hero/hero-food-scene.jpg"
                  alt="Sareya artisanal Bihar food collection feast"
                  aspectRatio="auto"
                  objectFit="cover"
                  objectPosition="center 42%"
                  priority={true}
                  className="w-full h-full scale-[1.01] group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 60vw, 55vw"
                />

                {/* Subtle Mithila Art Floating Stamp */}
                <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 bg-[#F7F1E7]/95 backdrop-blur-md border border-[#8E2925]/20 py-2.5 px-3.5 sm:py-3 sm:px-4 shadow-lg flex items-center gap-2.5">
                  <Sparkles size={16} className="text-[#D39A38]" />
                  <div>
                    <p className="text-[10px] sm:text-[11px] font-bold tracking-[0.18em] uppercase text-[#8E2925]">
                      Mithila • Magadh • Bhojpur
                    </p>
                    <p className="text-[9px] sm:text-[10px] text-[#75695D]">
                      Authentic Provincial Harvest
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
