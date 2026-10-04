"use client";

import React, { useState } from "react";
import { useCart } from "@/context/CartContext";
import { Product } from "@/data/products";
import { ShoppingBag, Check } from "lucide-react";

interface AddToCartButtonProps {
  product: Product;
  quantity?: number;
  variant?: "primary" | "outline" | "compact";
  className?: string;
}

export function AddToCartButton({
  product,
  quantity = 1,
  variant = "primary",
  className = "",
}: AddToCartButtonProps) {
  const { addItem } = useCart();
  const [isAdded, setIsAdded] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, quantity);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1600);
  };

  if (variant === "compact") {
    return (
      <button
        onClick={handleClick}
        aria-label={`Add ${product.name} to bag`}
        className={`w-full py-2.5 px-3 text-xs tracking-wider uppercase font-medium transition-all duration-300 flex items-center justify-center gap-1.5 border border-[#8E2925] ${
          isAdded
            ? "bg-[#59634C] border-[#59634C] text-[#F7F1E7]"
            : "bg-[#8E2925] text-[#F7F1E7] hover:bg-[#641B1B]"
        } ${className}`}
      >
        {isAdded ? (
          <>
            <Check size={13} />
            <span>ADDED</span>
          </>
        ) : (
          <>
            <ShoppingBag size={13} />
            <span>ADD TO BAG</span>
          </>
        )}
      </button>
    );
  }

  return (
    <button
      onClick={handleClick}
      aria-label={`Add ${product.name} to bag`}
      className={`w-full py-3 sm:py-3.5 px-4 text-xs sm:text-xs font-semibold tracking-[0.14em] uppercase transition-all duration-300 flex items-center justify-center gap-2 border ${
        isAdded
          ? "bg-[#59634C] border-[#59634C] text-[#F7F1E7]"
          : variant === "outline"
          ? "border-[#8E2925] text-[#8E2925] hover:bg-[#8E2925] hover:text-[#F7F1E7]"
          : "bg-[#8E2925] border-[#8E2925] text-[#F7F1E7] hover:bg-[#641B1B] hover:border-[#641B1B]"
      } active:scale-[0.98] ${className}`}
    >
      {isAdded ? (
        <>
          <Check size={15} />
          <span>ADDED TO BAG</span>
        </>
      ) : (
        <>
          <ShoppingBag size={15} />
          <span>ADD TO BAG</span>
        </>
      )}
    </button>
  );
}
