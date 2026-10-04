import React from "react";

interface MarqueeProps {
  text?: string;
  className?: string;
}

export function Marquee({
  text = "THEKUA • GUJIYA • SATTU • MAKHANA • LITTI MIX • BIHAR • TRADITIONAL FLAVOURS • MODERN EXPRESSION • ",
  className = "",
}: MarqueeProps) {
  return (
    <div
      className={`relative w-full overflow-hidden bg-[#8E2925] text-[#F7F1E7] py-3.5 sm:py-4.5 border-y border-[#641B1B] shadow-inner select-none ${className}`}
      aria-label="Brand items marquee"
    >
      <div className="flex w-max animate-marquee">
        {/* Repeating text spans */}
        <span className="font-serif tracking-[0.22em] text-sm sm:text-base md:text-lg uppercase font-medium whitespace-nowrap px-4">
          {text}
        </span>
        <span className="font-serif tracking-[0.22em] text-sm sm:text-base md:text-lg uppercase font-medium whitespace-nowrap px-4">
          {text}
        </span>
        <span className="font-serif tracking-[0.22em] text-sm sm:text-base md:text-lg uppercase font-medium whitespace-nowrap px-4">
          {text}
        </span>
        <span className="font-serif tracking-[0.22em] text-sm sm:text-base md:text-lg uppercase font-medium whitespace-nowrap px-4">
          {text}
        </span>
      </div>
    </div>
  );
}
