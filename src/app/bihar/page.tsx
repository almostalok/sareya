import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BiharMap } from "@/components/bihar/BiharMap";
import { biharRegions } from "@/data/regions";
import { MapPin, ArrowRight, Wheat, Droplets, Sun, Sparkles } from "lucide-react";

export const metadata = {
  title: "Explore Bihar — Regional Terroirs & Heritage | SAREYA",
  description:
    "Journey through Bihar's legendary culinary regions: Mithila, Magadh, Bhojpur, Champaran, and Anga. Discover the soil, rivers, and traditions that create our food.",
};

export default function ExploreBiharPage() {
  return (
    <div className="pt-24 sm:pt-28 md:pt-32 pb-20 sm:pb-28 bg-[#F7F1E7]">
      <Container className="space-y-16 sm:space-y-24">
        {/* Page Hero */}
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <span className="text-xs font-semibold tracking-[0.24em] uppercase text-[#8E2925]">
            GEOGRAPHY & GASTRONOMY
          </span>
          <h1
            className="font-serif text-[#211B17] font-normal leading-[1.05]"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4.8rem)" }}
          >
            THE FIVE TERROIRS
            <br />
            <span className="italic text-[#8E2925]">OF BIHAR.</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-[#75695D] font-light leading-relaxed max-w-2xl mx-auto">
            Bihar is not a singular flavour. It is a mosaic of micro-climates, sacred river basins,
            ancient republics, and culinary genius shaped across three millennia.
          </p>
        </div>

        {/* Interactive Map Component */}
        <div className="border border-[#211B17]/10 overflow-hidden">
          <BiharMap />
        </div>

        {/* Deep Regional Breakdown Cards */}
        <div className="space-y-10">
          <SectionHeading
            eyebrow="PROVINCIAL HERITAGE"
            title="THE REGIONAL CHRONICLES"
            subtitle="Explore how the geography of each zone creates its signature delicacies."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {biharRegions.map((region) => (
              <div
                key={region.id}
                id={region.id}
                className="bg-white/70 border border-[#211B17]/10 p-6 sm:p-7 flex flex-col justify-between space-y-6 hover:border-[#8E2925]/30 transition-colors"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-[#211B17]/10 pb-3">
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8E2925] flex items-center gap-1.5">
                      <MapPin size={14} />
                      {region.name.split(" ")[0]}
                    </span>
                    <span className="font-serif text-2xl text-[#75695D]/40 font-light">
                      {region.hindiName}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl text-[#211B17] font-normal">
                    {region.speciality}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#75695D] leading-relaxed font-light">
                    {region.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#211B17]/10 space-y-3">
                  <p className="text-xs text-[#B95A3C] italic">
                    {region.landscapeNote}
                  </p>
                  <div className="flex items-center justify-between pt-1">
                    <span className="text-xs font-medium text-[#211B17]">
                      {region.productKey}
                    </span>
                    <Link
                      href="/shop"
                      className="text-xs font-semibold uppercase tracking-wider text-[#8E2925] hover:text-[#641B1B] flex items-center gap-1"
                    >
                      <span>Taste</span>
                      <ArrowRight size={13} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}

            {/* Mithila Artistry Culture Card */}
            <div className="bg-[#8E2925] text-[#F7F1E7] p-6 sm:p-7 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-[#F7F1E7]/20 pb-3">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D39A38] flex items-center gap-1.5">
                    <Sparkles size={14} />
                    FOLK ART & FOOD
                  </span>
                </div>
                <h3 className="font-serif text-2xl text-[#F7F1E7] font-normal">
                  The Madhubani Connection
                </h3>
                <p className="text-xs sm:text-sm text-[#EFE3D0]/80 leading-relaxed font-light">
                  In Bihar, visual art and culinary craft share identical motifs — fish, lotus flowers,
                  peacocks, and the sun god Surya. Our boxes carry these line engravings made by local women artists.
                </p>
              </div>

              <div className="pt-4 border-t border-[#F7F1E7]/20">
                <Link
                  href="/gifting"
                  className="text-xs font-semibold uppercase tracking-wider text-[#D39A38] hover:text-[#F7F1E7] flex items-center gap-1"
                >
                  <span>Explore Art Gifting</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
