"use client";

import React, { useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { testimonials } from "@/data/testimonials";
import { ChevronLeft, ChevronRight, Star, Quote, CheckCircle2 } from "lucide-react";

export function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-16 sm:py-24 md:py-30 bg-[#F7F1E7] border-y border-[#211B17]/10 relative overflow-hidden">
      <Container className="space-y-12 sm:space-y-16">
        {/* Header with Navigation Controls */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-2 border-b border-[#211B17]/10">
          <SectionHeading
            eyebrow="COMMUNITY & MEMORIES"
            title="TASTES LIKE COMING HOME."
            subtitle="Words from homes, dinner parties, and festive gatherings across India and the diaspora."
          />

          {/* Nav Controls */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={prevSlide}
              aria-label="Previous testimonial"
              className="w-10 h-10 border border-[#211B17]/20 flex items-center justify-center text-[#211B17] hover:border-[#8E2925] hover:text-[#8E2925] hover:bg-[#EFE3D0]/60 transition-colors"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next testimonial"
              className="w-10 h-10 border border-[#211B17]/20 flex items-center justify-center text-[#211B17] hover:border-[#8E2925] hover:text-[#8E2925] hover:bg-[#EFE3D0]/60 transition-colors"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Testimonials Grid / Multi-item responsive view:
            Desktop: 3 visible, Tablet: 2 visible, Mobile: 1 visible */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[0, 1, 2].map((offset) => {
            const index = (currentIndex + offset) % testimonials.length;
            const item = testimonials[index];
            const isDesktopOnly = offset === 2;
            const isTabletAndUp = offset === 1;

            return (
              <div
                key={`${item.id}-${offset}`}
                className={`p-6 sm:p-7 md:p-8 bg-white/70 border border-[#211B17]/10 flex flex-col justify-between space-y-6 transition-all duration-300 ${
                  isDesktopOnly ? "hidden lg:flex" : isTabletAndUp ? "hidden md:flex" : "flex"
                }`}
              >
                <div className="space-y-4">
                  {/* Star Rating & Quote Icon */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-[#D39A38]">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} size={14} fill="#D39A38" />
                      ))}
                    </div>
                    <Quote size={20} className="text-[#8E2925]/30" />
                  </div>

                  {/* Quote text */}
                  <p className="font-serif text-base sm:text-lg text-[#211B17] leading-relaxed italic">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>

                {/* Author Info */}
                <div className="pt-4 border-t border-[#211B17]/10 flex flex-col space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-sans text-xs sm:text-sm font-semibold text-[#211B17]">
                      {item.author}
                    </span>
                    {item.verified && (
                      <span className="inline-flex items-center gap-1 text-[10px] text-[#59634C] font-medium uppercase tracking-wider">
                        <CheckCircle2 size={12} />
                        <span>Verified</span>
                      </span>
                    )}
                  </div>
                  <span className="text-xs text-[#75695D] font-light">
                    {item.location}
                  </span>
                  <span className="text-[11px] text-[#8E2925] pt-1">
                    Purchased: {item.productMentioned}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Indicator dots for mobile */}
        <div className="flex items-center justify-center gap-1.5 pt-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              aria-label={`Jump to slide ${i + 1}`}
              className={`h-1.5 transition-all duration-300 ${
                i === currentIndex
                  ? "w-8 bg-[#8E2925]"
                  : "w-2 bg-[#211B17]/20 hover:bg-[#211B17]/40"
              }`}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
