"use client";

import React, { useState } from "react";
import { Container } from "@/components/ui/Container";
import { ArrowRight, CheckCircle2, Mail } from "lucide-react";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <section className="py-20 sm:py-24 md:py-28 bg-[#8E2925] text-[#F7F1E7] relative overflow-hidden">
      {/* Decorative texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none bg-repeat"
        style={{
          backgroundImage: "url('/images/sareya/textures/texture-bihar-textile.jpg')",
          backgroundSize: "320px",
        }}
      />

      <Container className="relative z-10 max-w-4xl text-center space-y-6 sm:space-y-8">
        <div className="space-y-3">
          <span className="inline-block text-[11px] sm:text-xs font-semibold tracking-[0.24em] uppercase text-[#D39A38]">
            THE SAREYA JOURNAL
          </span>
          <h2
            className="font-serif font-normal text-[#F7F1E7] leading-tight"
            style={{ fontSize: "clamp(2.2rem, 4.5vw, 4.2rem)" }}
          >
            STAY FOR A BITE.
          </h2>
          <p className="text-sm sm:text-base text-[#EFE3D0]/80 font-light max-w-xl mx-auto leading-relaxed">
            Receive private invitations to limited seasonal batches, harvest notes from
            the Bihar countryside, and <strong className="text-[#F7F1E7] font-medium">10% off</strong> your first order.
          </p>
        </div>

        {submitted ? (
          <div className="bg-[#641B1B] border border-[#D39A38]/30 p-6 max-w-md mx-auto space-y-2 animate-in zoom-in-95 duration-300">
            <div className="flex items-center justify-center gap-2 text-[#D39A38]">
              <CheckCircle2 size={20} />
              <span className="font-serif text-xl text-[#F7F1E7]">Dhanyawad! You are in.</span>
            </div>
            <p className="text-xs text-[#EFE3D0]/70">
              We have sent a 10% welcome code to <span className="underline">{email}</span>. Check your inbox soon!
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row items-stretch justify-center gap-3 max-w-lg mx-auto pt-2"
          >
            <div className="relative flex-1">
              <Mail
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-[#F7F1E7]/40 pointer-events-none"
              />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full bg-[#641B1B]/80 text-[#F7F1E7] placeholder:text-[#EFE3D0]/50 pl-11 pr-4 py-3.5 sm:py-4 text-xs sm:text-sm border border-[#F7F1E7]/20 focus:outline-none focus:border-[#D39A38] transition-colors"
              />
            </div>
            <button
              type="submit"
              className="bg-[#D39A38] text-[#211B17] hover:bg-[#C28B2F] px-6 py-3.5 sm:py-4 text-xs font-semibold tracking-[0.16em] uppercase transition-colors flex items-center justify-center gap-2 shrink-0 group active:scale-95"
            >
              <span>SUBSCRIBE</span>
              <ArrowRight
                size={14}
                className="transition-transform group-hover:translate-x-1"
              />
            </button>
          </form>
        )}

        <p className="text-[11px] text-[#EFE3D0]/50 font-light">
          No spam. Only thoughtful culinary stories and slow-cooked provisions. Unsubscribe anytime.
        </p>
      </Container>
    </section>
  );
}
