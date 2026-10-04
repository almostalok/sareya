import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GiftingSection } from "@/components/gifting/GiftingSection";
import { CorporateInquiryForm } from "@/components/gifting/CorporateInquiryForm";
import { ResponsiveImage } from "@/components/ui/ResponsiveImage";
import { products } from "@/data/products";
import { ProductCard } from "@/components/products/ProductCard";
import { Gift, CheckCircle2, Building, Heart, Sparkles } from "lucide-react";

export const metadata = {
  title: "Bespoke Gifting & Keepsake Boxes — SAREYA | Bihar, Beautifully Packed",
  description:
    "Thoughtful Bihar food gifts for festivals, weddings, corporate tokens, and nostalgic celebrations. Curated heirloom sweets and handcrafted keepsakes.",
};

export default function GiftingPage() {
  const giftItems = products.filter((p) => p.category === "gifting" || p.id === "thekua" || p.id === "gujiya");

  return (
    <div className="pt-24 sm:pt-28 md:pt-32 pb-20 sm:pb-28 bg-[#F7F1E7]">
      <Container className="space-y-16 sm:space-y-24">
        {/* Page Hero */}
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <span className="text-xs font-semibold tracking-[0.24em] uppercase text-[#8E2925]">
            CELEBRATIONS & TOKENS
          </span>
          <h1
            className="font-serif text-[#211B17] font-normal leading-[1.05]"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4.8rem)" }}
          >
            SEND A PIECE
            <br />
            <span className="italic text-[#8E2925]">OF BIHAR HOME.</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-[#75695D] font-light leading-relaxed max-w-2xl mx-auto">
            From Chhath celebrations and Diwali hampers to intimate weddings and corporate tokens,
            our keepsake gift boxes represent warmth, heritage, and genuine care.
          </p>
        </div>

        {/* Feature Gifting Section */}
        <GiftingSection />

        {/* Gift Collections Grid */}
        <div className="space-y-8">
          <SectionHeading
            eyebrow="CURATED PARCELS"
            title="THE FESTIVE EDITIONS"
            subtitle="Handcrafted boxes packed fresh prior to dispatch with your personal message."
          />

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {giftItems.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

        {/* Corporate & Bespoke Gifting Form */}
        <div id="corporate" className="bg-[#211B17] text-[#F7F1E7] p-8 sm:p-12 md:p-16 border border-[#8E2925]/30">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#D39A38] flex items-center gap-1.5">
                <Building size={14} />
                BESPOKE & CORPORATE
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#F7F1E7] font-normal leading-tight">
                Gifting for Organisations & Weddings
              </h2>
              <p className="text-xs sm:text-sm text-[#EFE3D0]/70 leading-relaxed font-light">
                We design bespoke branded sleeves, embossed ribbons, and customized contents
                for orders above 25 boxes. Delivered seamlessly across multiple corporate addresses
                or event locations worldwide.
              </p>
              <div className="space-y-2 pt-2 text-xs text-[#EFE3D0]/80">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-[#D39A38]" />
                  <span>Custom branded stationery with company logo</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-[#D39A38]" />
                  <span>Multiple recipient address dispatch service</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-[#D39A38]" />
                  <span>Curated dietary preferences (pure jaggery / vegan)</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 bg-[#291D17] p-6 sm:p-8 border border-[#F7F1E7]/10 space-y-4">
              <h3 className="font-serif text-xl text-[#F7F1E7]">Inquire for Bulk Orders</h3>
              <CorporateInquiryForm />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
