import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { footerLinks } from "@/data/navigation";
import { ArrowUpRight, Mail, Phone, MapPin, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#211B17] text-[#F7F1E7] border-t border-[#8E2925]/30 pt-16 sm:pt-20 md:pt-24 pb-12 overflow-hidden relative">
      {/* Subtle background texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none bg-repeat"
        style={{
          backgroundImage: "url('/images/sareya/textures/texture-illustration-pattern.jpg')",
          backgroundSize: "360px",
        }}
      />

      <Container className="relative z-10 space-y-16">
        {/* Top Editorial Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 pb-14 border-b border-[#F7F1E7]/10">
          {/* Brand Manifesto */}
          <div className="lg:col-span-5 space-y-6">
            <Link
              href="/"
              className="inline-block font-serif text-3xl sm:text-4xl tracking-[0.24em] font-normal text-[#F7F1E7] hover:text-[#D39A38] transition-colors"
            >
              SAREYA
            </Link>

            <p className="font-serif italic text-xl sm:text-2xl text-[#D39A38] font-light">
              Bihar, beautifully packed.
            </p>

            <p className="text-sm text-[#EFE3D0]/70 leading-relaxed max-w-md font-light">
              Traditional flavours. Modern expression. Rooted in Bihar. Sareya brings the
              sacred sweets, slow-stone ground grains, and GI-tagged delicacies of the Gangetic
              plains to contemporary dinner tables across the world.
            </p>

            <div className="pt-2 text-xs text-[#EFE3D0]/60 space-y-1.5 font-light">
              <div className="flex items-center gap-2">
                <MapPin size={13} className="text-[#D39A38]" />
                <span>Patna • Darbhanga • New Delhi</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={13} className="text-[#D39A38]" />
                <span>care@sareyabihar.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={13} className="text-[#D39A38]" />
                <span>+91 98710 44299 (Mon–Sat, 10am–6pm)</span>
              </div>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {/* Shop Column */}
            <div className="space-y-4">
              <h4 className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#D39A38]">
                Collection
              </h4>
              <ul className="space-y-2.5">
                {footerLinks.shop.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-xs sm:text-sm text-[#EFE3D0]/80 hover:text-[#F7F1E7] transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Story & Regions Column */}
            <div className="space-y-4">
              <h4 className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#D39A38]">
                Origins
              </h4>
              <ul className="space-y-2.5">
                {footerLinks.explore.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-xs sm:text-sm text-[#EFE3D0]/80 hover:text-[#F7F1E7] transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/story"
                    className="text-xs sm:text-sm text-[#EFE3D0]/80 hover:text-[#F7F1E7] transition-colors"
                  >
                    Our Courtyard Story
                  </Link>
                </li>
              </ul>
            </div>

            {/* Help & Policies */}
            <div className="space-y-4 col-span-2 sm:col-span-1">
              <h4 className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#D39A38]">
                Hospitality
              </h4>
              <ul className="space-y-2.5">
                {footerLinks.help.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-xs sm:text-sm text-[#EFE3D0]/80 hover:text-[#F7F1E7] transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Cultural Dedication */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-[#EFE3D0]/50 pt-2">
          <p>© {new Date().getFullYear()} SAREYA FOODS & PANTRY PVT. LTD. ALL RIGHTS RESERVED.</p>

          <div className="flex items-center gap-1 text-[11px]">
            <span>Crafted with pride in Bihar</span>
            <Heart size={12} className="text-[#8E2925] fill-[#8E2925]" />
            <span>for food lovers everywhere.</span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="text-[#EFE3D0]/70 hover:text-[#D39A38] transition-colors inline-flex items-center gap-1"
            >
              <span>Instagram</span>
              <ArrowUpRight size={12} />
            </a>
            <span className="text-[#F7F1E7]/20">•</span>
            <span className="text-[#EFE3D0]/70">FSSAI Certified</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
