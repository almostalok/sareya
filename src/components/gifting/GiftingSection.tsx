import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ResponsiveImage } from "@/components/ui/ResponsiveImage";
import { ArrowRight, Gift, CheckCircle2 } from "lucide-react";

export function GiftingSection() {
  return (
    <section className="py-16 sm:py-24 md:py-32 bg-[#EFE3D0]/60 relative overflow-hidden">
      {/* Decorative texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none bg-repeat"
        style={{
          backgroundImage: "url('/images/sareya/textures/texture-illustration-pattern.jpg')",
          backgroundSize: "350px",
        }}
      />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-16 items-center">
          {/* Text Column (Desktop: 6 cols, Mobile: full) */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8 order-1">
            <div className="space-y-3">
              <span className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-semibold tracking-[0.24em] uppercase text-[#8E2925]">
                <Gift size={14} />
                <span>CELEBRATIONS & TOKENS</span>
              </span>

              <h2
                className="font-serif text-[#211B17] font-normal leading-[1.04] tracking-tight"
                style={{ fontSize: "clamp(2.2rem, 4.4vw, 4rem)" }}
              >
                SEND A LITTLE
                <br />
                <span className="italic text-[#8E2925]">BIHAR.</span>
              </h2>
            </div>

            <p className="text-sm sm:text-base md:text-lg text-[#75695D] leading-relaxed font-light">
              A thoughtfully curated collection of Bihar’s favourite flavours, made for
              celebrations, festivals and everything in between.
            </p>

            {/* Inclusions list */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-xs sm:text-sm text-[#211B17]">
                <CheckCircle2 size={16} className="text-[#8E2925] shrink-0" />
                <span>Heirloom Thekua, Roasted Chana Sattu & Mithila Phool Makhaana</span>
              </div>
              <div className="flex items-center gap-3 text-xs sm:text-sm text-[#211B17]">
                <CheckCircle2 size={16} className="text-[#8E2925] shrink-0" />
                <span>Handcrafted sheesham wood thekua mould keepsake included</span>
              </div>
              <div className="flex items-center gap-3 text-xs sm:text-sm text-[#211B17]">
                <CheckCircle2 size={16} className="text-[#8E2925] shrink-0" />
                <span>Custom handwritten note on textured Madhubani parchment</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <Button
                href="/products/the-bihar-heritage-box"
                variant="primary"
                size="lg"
                icon={<ArrowRight size={16} />}
              >
                EXPLORE GIFTING
              </Button>

              <Button
                href="/gifting"
                variant="outline"
                size="lg"
              >
                CORPORATE ORDERS
              </Button>
            </div>
          </div>

          {/* Visual Column (Desktop: 6 cols, Mobile: full) */}
          <div className="lg:col-span-6 w-full order-2">
            <div className="relative group p-2.5 sm:p-3 bg-[#F7F1E7] border border-[#211B17]/10 shadow-xl">
              <div className="relative aspect-4/3 sm:aspect-16/11 lg:aspect-4/3 overflow-hidden">
                <ResponsiveImage
                  src="/images/sareya/gifting/gifting-bihar-box.jpg"
                  alt="Sareya curated luxury gift box of Bihar delicacies"
                  aspectRatio="auto"
                  objectFit="cover"
                  objectPosition="center 45%"
                  className="w-full h-full group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              {/* Caption */}
              <div className="pt-2 px-1 flex items-center justify-between text-[11px] text-[#75695D]">
                <span>The Bihar Heritage Box • Bespoke Keepsake</span>
                <span className="font-serif italic text-[#8E2925]">Festive Edition</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
