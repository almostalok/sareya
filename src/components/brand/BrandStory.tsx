import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ResponsiveImage } from "@/components/ui/ResponsiveImage";
import { ArrowRight, Sparkles } from "lucide-react";

export function BrandStory() {
  return (
    <section className="py-16 sm:py-20 md:py-28 bg-[#EFE3D0]/50 relative overflow-hidden">
      {/* Decorative texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none bg-repeat"
        style={{
          backgroundImage: "url('/images/sareya/textures/texture-bihar-textile.jpg')",
          backgroundSize: "320px",
        }}
      />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-16 items-center">
          {/* Image Column */}
          <div className="lg:col-span-6 w-full order-1">
            <div className="relative group p-2 sm:p-3 bg-[#F7F1E7] border border-[#211B17]/10 shadow-lg">
              <div className="relative aspect-4/3 sm:aspect-5/4 lg:aspect-4/3 overflow-hidden">
                <ResponsiveImage
                  src="/images/sareya/story/story-making-thekua.jpg"
                  alt="Artisanal hands handcrafting traditional Thekua in Bihar hearths"
                  aspectRatio="auto"
                  objectFit="cover"
                  objectPosition="center 35%"
                  className="w-full h-full group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Caption pill */}
              <div className="pt-2 px-1 flex items-center justify-between text-[11px] text-[#75695D]">
                <span>Slow-cooked in small courtyard batches</span>
                <span className="font-serif italic text-[#8E2925]">Heirloom Technique</span>
              </div>
            </div>
          </div>

          {/* Text Column */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-6 sm:space-y-7 order-2">
            <div className="space-y-3">
              <span className="inline-block text-[11px] sm:text-xs font-semibold tracking-[0.24em] uppercase text-[#8E2925]">
                OUR STORY
              </span>

              <h2
                className="font-serif text-[#211B17] font-normal leading-[1.05] tracking-tight"
                style={{ fontSize: "clamp(2.2rem, 4.2vw, 3.8rem)" }}
              >
                FROM BIHAR,
                <br />
                WITH A LITTLE
                <br />
                <span className="italic text-[#8E2925]">MORE LOVE.</span>
              </h2>
            </div>

            <div className="space-y-4 text-sm sm:text-base text-[#75695D] font-light leading-relaxed">
              <p>
                Sareya began with a simple belief — the food we grew up with deserves a
                place at every modern table.
              </p>
              <p>
                For generations, the kitchens of Bihar have practiced slow-food mindfulness
                before it became a buzzword: pressing thekua with carved sheesham moulds,
                cold stone-grinding sattu for summer coolth, and skimming fresh khoya for golden gujiya.
              </p>
              <p>
                We do not alter these recipes to chase trends. We elevate their purity, source
                authentic provincial ingredients, and package them with the quiet dignity they have always deserved.
              </p>
            </div>

            <div className="pt-2">
              <Link
                href="/story"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-[0.16em] uppercase text-[#8E2925] hover:text-[#641B1B] transition-colors border-b-2 border-[#8E2925] pb-1 group"
              >
                <span>OUR STORY</span>
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
