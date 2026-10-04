"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { X, ArrowRight, Mail, Phone, MapPin } from "lucide-react";
import { InstagramIcon } from "@/components/ui/InstagramIcon";
import { navLinks } from "@/data/navigation";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  // Prevent body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden" aria-modal="true" role="dialog">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-[#211B17]/60 backdrop-blur-xs transition-opacity duration-300"
      />

      {/* Slide-out Drawer */}
      <div className="fixed inset-y-0 left-0 w-full max-w-xs sm:max-w-sm bg-[#F7F1E7] border-r border-[#211B17]/10 flex flex-col justify-between p-6 sm:p-8 shadow-2xl transition-transform duration-300 overflow-y-auto">
        {/* Top Header */}
        <div className="space-y-8">
          <div className="flex items-center justify-between border-b border-[#211B17]/10 pb-4">
            <Link
              href="/"
              onClick={onClose}
              className="font-serif text-2xl tracking-[0.2em] font-normal text-[#8E2925]"
            >
              SAREYA
            </Link>
            <button
              onClick={onClose}
              aria-label="Close navigation menu"
              className="p-2 text-[#211B17] hover:text-[#8E2925] transition-colors rounded-full"
            >
              <X size={22} />
            </button>
          </div>

          {/* Nav Links */}
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={onClose}
                className="group flex items-center justify-between text-base sm:text-lg tracking-[0.08em] font-medium text-[#211B17] hover:text-[#8E2925] transition-colors py-2 border-b border-[#211B17]/5"
              >
                <span>{link.label}</span>
                <ArrowRight
                  size={16}
                  className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#8E2925]"
                />
              </Link>
            ))}
          </nav>
        </div>

        {/* Bottom Regional Note & Social */}
        <div className="mt-12 pt-6 border-t border-[#211B17]/10 space-y-5">
          <div className="space-y-1">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#8E2925]">
              Bihar, beautifully packed.
            </p>
            <p className="text-xs text-[#75695D] leading-relaxed">
              Traditional flavours. Modern expression. Rooted in Bihar.
            </p>
          </div>

          <div className="text-xs text-[#75695D] space-y-1.5">
            <div className="flex items-center gap-2">
              <MapPin size={13} className="text-[#8E2925]" />
              <span>Patna • Darbhanga • New Delhi</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={13} className="text-[#8E2925]" />
              <span>care@sareyabihar.com</span>
            </div>
          </div>

          <div className="flex items-center gap-4 text-[#211B17] pt-2">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="p-2 hover:text-[#8E2925] transition-colors"
            >
              <InstagramIcon size={18} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
