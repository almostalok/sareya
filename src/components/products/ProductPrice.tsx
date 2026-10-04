import React from "react";

interface ProductPriceProps {
  price: number;
  originalPrice?: number;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function ProductPrice({
  price,
  originalPrice,
  size = "md",
  className = "",
}: ProductPriceProps) {
  const sizeStyles = {
    sm: "text-sm",
    md: "text-base font-semibold",
    lg: "text-2xl font-bold",
  }[size];

  return (
    <div className={`flex items-baseline gap-2 font-sans ${className}`}>
      <span className={`text-[#211B17] ${sizeStyles}`}>₹{price}</span>
      {originalPrice && originalPrice > price && (
        <span className="text-xs sm:text-sm text-[#75695D] line-through font-normal">
          ₹{originalPrice}
        </span>
      )}
    </div>
  );
}
