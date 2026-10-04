import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ResponsiveImage } from "@/components/ui/ResponsiveImage";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Sparkles, HeartHandshake, ShieldCheck, Flame } from "lucide-react";

export const metadata = {
  title: "Our Story — SAREYA | Bihar, Beautifully Packed",
  description:
    "The journey of Sareya: preserving Bihar's sacred culinary heritage, courtyard cooking rituals, pure bilona ghee, and unrefined cane jaggery for modern tables.",
};

export default function StoryPage() {
  return (
    <div className="pt-24 sm:pt-28 md:pt-32 pb-20 sm:pb-28 bg-[#F7F1E7]">
      <Container className="space-y-16 sm:space-y-24">
        {/* Story Hero */}
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <span className="text-xs font-semibold tracking-[0.24em] uppercase text-[#8E2925]">
            OUR GENESIS & CONVICTION
          </span>
          <h1
            className="font-serif text-[#211B17] font-normal leading-[1.05]"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4.8rem)" }}
          >
            TRADITIONAL FLAVOURS.
            <br />
            MODERN EXPRESSION.
            <br />
            <span className="italic text-[#8E2925]">ROOTED IN BIHAR.</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-[#75695D] font-light leading-relaxed max-w-2xl mx-auto">
            Sareya was founded to change how the world experiences the rich food
            heritage of Bihar. Not as an afterthought or a seasonal curiosity, but as one
            of the subcontinent&apos;s most sophisticated, ancient culinary civilizations.
          </p>
        </div>

        {/* Big Editorial Split Section 1: The Courtyard */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B95A3C]">
              THE COURTYARD HEARTH
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#211B17] font-normal leading-tight">
              Where Time Slows Down and Flavour Deepens
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-[#75695D] leading-relaxed font-light">
              <p>
                In the village courtyards of Mithila, Bhojpur, and Magadh, cooking is never
                a rushed chore. It is an unhurried communal act.
              </p>
              <p>
                During Chhath Puja, earthen chulhas burn with mango wood embers. Women sit in circles
                kneading coarse stone-ground whole wheat with molten jaggery and fragrant green cardamom,
                pressing each portion into carved sheesham wood moulds.
              </p>
              <p>
                The resulting Thekua is crisp yet tender, caramelised without bitterness,
                and steeped in the devotion of the hands that shaped it. That same patience
                guides every single batch at Sareya.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="p-3 bg-[#EFE3D0]/60 border border-[#211B17]/10 shadow-lg">
              <div className="relative aspect-4/3 overflow-hidden">
                <ResponsiveImage
                  src="/images/sareya/story/story-making-thekua.jpg"
                  alt="Traditional making of Thekua with carved wooden moulds"
                  aspectRatio="auto"
                  objectFit="cover"
                  priority={true}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <p className="pt-2 text-[11px] text-[#75695D] italic text-center">
                Hand-pressing heirloom dough with carved sheesham wood moulds.
              </p>
            </div>
          </div>
        </div>

        {/* Big Editorial Split Section 2: Ingredients & Sourcing */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="p-3 bg-[#EFE3D0]/60 border border-[#211B17]/10 shadow-lg">
              <div className="relative aspect-4/3 overflow-hidden">
                <ResponsiveImage
                  src="/images/sareya/hero/hero-food-scene.jpg"
                  alt="Sareya gourmet Bihar food table spread"
                  aspectRatio="auto"
                  objectFit="cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <p className="pt-2 text-[11px] text-[#75695D] italic text-center">
                Honouring ancient ingredients with contemporary packaging.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B95A3C]">
              PROVENANCE WITHOUT SHORTCUTS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#211B17] font-normal leading-tight">
              Pure Ingredients, True Provenance
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-[#75695D] leading-relaxed font-light">
              <p>
                We do not use commercial white sugar, palm oil, or artificial flavorings.
                Our sweetness comes from raw unrefined cane gur boiled in rural bagasse
                kilns. Our crispness comes from pure A2 bilona cow ghee churned from curd.
              </p>
              <p>
                Our Makhaana comes directly from generational Mallah diver cooperatives in
                Darbhanga. Our Sattu is roasted in river sand and stone-milled in Nalanda.
                By keeping supply lines hyper-local, we preserve both nutritive vitality
                and provincial pride.
              </p>
            </div>

            <div className="pt-2">
              <Button href="/shop" variant="primary" icon={<ArrowRight size={16} />}>
                EXPLORE OUR PANTRY
              </Button>
            </div>
          </div>
        </div>

        {/* 3 Pillars Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-[#211B17]/10">
          <div className="p-6 bg-white/60 border border-[#211B17]/10 space-y-3">
            <Flame className="w-6 h-6 text-[#8E2925]" />
            <h3 className="font-serif text-xl text-[#211B17]">Courtyard Technique</h3>
            <p className="text-xs sm:text-sm text-[#75695D] leading-relaxed font-light">
              Recipes handed down through grandmothers, cooked in small batches in brass kadhais over low embers.
            </p>
          </div>

          <div className="p-6 bg-white/60 border border-[#211B17]/10 space-y-3">
            <ShieldCheck className="w-6 h-6 text-[#8E2925]" />
            <h3 className="font-serif text-xl text-[#211B17]">No Industrial Shortcuts</h3>
            <p className="text-xs sm:text-sm text-[#75695D] leading-relaxed font-light">
              Zero preservatives, zero palm oils, and zero glucose syrups. Only pure desi ghee and heirloom grains.
            </p>
          </div>

          <div className="p-6 bg-white/60 border border-[#211B17]/10 space-y-3">
            <HeartHandshake className="w-6 h-6 text-[#8E2925]" />
            <h3 className="font-serif text-xl text-[#211B17]">Artisan Livelihoods</h3>
            <p className="text-xs sm:text-sm text-[#75695D] leading-relaxed font-light">
              Fair compensations to rural women cooperatives, traditional halwais, and Mallah wetland farmers.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}
