import React from "react";
import { Container } from "@/components/ui/Container";
import { ShieldCheck, Flame, Award, HeartHandshake } from "lucide-react";

export function BrandValues() {
  const values = [
    {
      icon: <Award className="w-6 h-6 text-[#8E2925]" />,
      title: "Rooted In Provenance",
      description:
        "Every single batch traces back to authentic regional micro-climates — GI-tagged Mithila makhaana, Magadh roasted chana, and unrefined Bhojpur cane jaggery.",
    },
    {
      icon: <Flame className="w-6 h-6 text-[#8E2925]" />,
      title: "Slow Courtyard Craft",
      description:
        "We never flash-bake or chemically preserve. Recipes are cooked slowly in pure brass and cast-iron kadhais using centuries-old provincial methods.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#8E2925]" />,
      title: "Uncompromising Purity",
      description:
        "100% natural, no palm oils, no artificial preservatives, and zero artificial essences. Made exclusively with pure A2 bilona desi ghee and cold-pressed oils.",
    },
    {
      icon: <HeartHandshake className="w-6 h-6 text-[#8E2925]" />,
      title: "Honouring Local Artisans",
      description:
        "Partnering directly with Bihar's rural farmer collectives, Mallah wetland divers, and traditional halwais to sustain artisanal heritage livelihoods.",
    },
  ];

  return (
    <section className="py-14 sm:py-18 bg-[#F7F1E7] border-y border-[#211B17]/10">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {values.map((v, i) => (
            <div
              key={i}
              className="flex flex-col space-y-3 p-4 sm:p-5 border border-[#211B17]/5 hover:border-[#8E2925]/20 bg-white/40 transition-colors duration-300"
            >
              <div className="w-11 h-11 bg-[#EFE3D0] flex items-center justify-center">
                {v.icon}
              </div>
              <h3 className="font-serif text-xl text-[#211B17] font-normal pt-1">
                {v.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#75695D] leading-relaxed font-light">
                {v.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
