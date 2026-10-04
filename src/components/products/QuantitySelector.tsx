import React from "react";
import { Minus, Plus } from "lucide-react";

interface QuantitySelectorProps {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
  size?: "sm" | "md";
  className?: string;
}

export function QuantitySelector({
  quantity,
  onIncrease,
  onDecrease,
  size = "md",
  className = "",
}: QuantitySelectorProps) {
  const isSm = size === "sm";

  return (
    <div
      className={`inline-flex items-center border border-[#211B17]/20 bg-[#F7F1E7] rounded-none ${
        isSm ? "h-8" : "h-11"
      } ${className}`}
    >
      <button
        type="button"
        onClick={onDecrease}
        disabled={quantity <= 1}
        aria-label="Decrease quantity"
        className={`flex items-center justify-center text-[#211B17] hover:text-[#8E2925] hover:bg-[#EFE3D0] disabled:opacity-30 disabled:hover:bg-transparent transition-colors ${
          isSm ? "w-8 h-full" : "w-10 h-full"
        }`}
      >
        <Minus size={isSm ? 12 : 14} />
      </button>
      <span
        className={`font-sans font-medium text-center text-[#211B17] select-none ${
          isSm ? "w-8 text-xs" : "w-10 text-sm"
        }`}
      >
        {quantity}
      </span>
      <button
        type="button"
        onClick={onIncrease}
        aria-label="Increase quantity"
        className={`flex items-center justify-center text-[#211B17] hover:text-[#8E2925] hover:bg-[#EFE3D0] transition-colors ${
          isSm ? "w-8 h-full" : "w-10 h-full"
        }`}
      >
        <Plus size={isSm ? 12 : 14} />
      </button>
    </div>
  );
}
