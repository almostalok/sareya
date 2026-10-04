"use client";

import React, { useState } from "react";
import { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { QuantitySelector } from "./QuantitySelector";
import { ShoppingBag, Check, Zap } from "lucide-react";

interface ProductActionsProps {
  product: Product;
}

export function ProductActions({ product }: ProductActionsProps) {
  const { addItem, openCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    addItem(product, quantity);
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
      openCart();
    }, 400);
  };

  const handleBuyNow = () => {
    addItem(product, quantity);
    openCart();
  };

  return (
    <div className="space-y-4 pt-2">
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
        {/* Quantity */}
        <div className="shrink-0 flex items-center justify-between sm:justify-start gap-3">
          <span className="text-xs uppercase tracking-wider text-[#75695D] font-medium sm:hidden">
            Quantity:
          </span>
          <QuantitySelector
            quantity={quantity}
            onIncrease={() => setQuantity((q) => q + 1)}
            onDecrease={() => setQuantity((q) => Math.max(1, q - 1))}
            size="md"
          />
        </div>

        {/* Add to Bag Primary Button */}
        <button
          onClick={handleAddToCart}
          className={`flex-1 py-3.5 px-6 text-xs sm:text-sm font-semibold tracking-[0.16em] uppercase transition-all duration-300 flex items-center justify-center gap-2 border ${
            isAdded
              ? "bg-[#59634C] border-[#59634C] text-[#F7F1E7]"
              : "bg-[#8E2925] border-[#8E2925] text-[#F7F1E7] hover:bg-[#641B1B]"
          } active:scale-[0.98] shadow-xs`}
        >
          {isAdded ? (
            <>
              <Check size={16} />
              <span>ADDED TO BAG</span>
            </>
          ) : (
            <>
              <ShoppingBag size={16} />
              <span>ADD TO BAG • ₹{product.price * quantity}</span>
            </>
          )}
        </button>
      </div>

      {/* Buy Now / Quick Express Checkout */}
      <button
        onClick={handleBuyNow}
        className="w-full py-3 px-6 text-xs font-medium tracking-[0.14em] uppercase bg-[#EFE3D0] hover:bg-[#E4D3BC] text-[#211B17] border border-[#211B17]/15 transition-colors flex items-center justify-center gap-2"
      >
        <Zap size={14} className="text-[#8E2925]" />
        <span>EXPRESS CHECKOUT</span>
      </button>
    </div>
  );
}
