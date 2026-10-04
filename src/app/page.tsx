import React from "react";
import { HeroSection } from "@/components/hero/HeroSection";
import { Marquee } from "@/components/brand/Marquee";
import { SignatureSection } from "@/components/products/SignatureSection";
import { BrandStory } from "@/components/brand/BrandStory";
import { BrandValues } from "@/components/brand/BrandValues";
import { IngredientSection } from "@/components/ingredients/IngredientSection";
import { BiharMap } from "@/components/bihar/BiharMap";
import { BestsellerSection } from "@/components/products/BestsellerSection";
import { GiftingSection } from "@/components/gifting/GiftingSection";
import { TestimonialCarousel } from "@/components/testimonials/TestimonialCarousel";
import { SocialGallery } from "@/components/social/SocialGallery";
import { NewsletterSection } from "@/components/newsletter/NewsletterSection";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      {/* 01: Hero Section */}
      <HeroSection />

      {/* 02: Full-width Marquee Band */}
      <Marquee />

      {/* 03: Signature Products */}
      <SignatureSection />

      {/* 04: Brand Heritage Story */}
      <BrandStory />

      {/* 05: Brand Values / Pillars */}
      <BrandValues />

      {/* 06: Ingredient Story */}
      <IngredientSection />

      {/* 07: Explore Bihar Interactive Regional Map */}
      <BiharMap />

      {/* 08: Bestsellers */}
      <BestsellerSection />

      {/* 09: Gifting Section */}
      <GiftingSection />

      {/* 10: Testimonials Carousel */}
      <TestimonialCarousel />

      {/* 11: Social Gallery */}
      <SocialGallery />

      {/* 12: Newsletter */}
      <NewsletterSection />
    </div>
  );
}
