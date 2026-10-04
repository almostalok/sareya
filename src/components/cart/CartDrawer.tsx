"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { X, Trash2, ShoppingBag, ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { ResponsiveImage } from "@/components/ui/ResponsiveImage";
import { QuantitySelector } from "@/components/products/QuantitySelector";
import { ProductPrice } from "@/components/products/ProductPrice";
import { Button } from "@/components/ui/Button";

export function CartDrawer() {
  const {
    items,
    isOpen,
    closeCart,
    removeItem,
    updateQuantity,
    subtotal,
    clearCart,
    freeShippingThreshold,
    freeShippingRemaining,
  } = useCart();

  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);

  // Prevent background scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      setOrderComplete(false);
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const progressPercentage = Math.min(
    100,
    Math.round(((freeShippingThreshold - freeShippingRemaining) / freeShippingThreshold) * 100)
  );

  const handleCheckout = () => {
    setIsCheckingOut(true);
    setTimeout(() => {
      setIsCheckingOut(false);
      setOrderComplete(true);
      clearCart();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden" aria-modal="true" role="dialog">
      {/* Backdrop */}
      <div
        onClick={closeCart}
        className="fixed inset-0 bg-[#211B17]/60 backdrop-blur-xs transition-opacity duration-300"
      />

      {/* Drawer Panel */}
      <aside className="fixed inset-y-0 right-0 max-w-full w-full sm:max-w-md bg-[#F7F1E7] border-l border-[#211B17]/10 flex flex-col shadow-2xl transition-transform duration-300">
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-[#211B17]/10 flex items-center justify-between bg-[#F7F1E7]">
          <div className="flex items-center gap-2.5">
            <ShoppingBag size={20} className="text-[#8E2925]" />
            <h2 className="font-serif text-2xl font-normal text-[#211B17]">
              Your Bag
            </h2>
            <span className="text-xs text-[#75695D]">
              ({items.reduce((acc, i) => acc + i.quantity, 0)})
            </span>
          </div>

          <button
            onClick={closeCart}
            aria-label="Close bag"
            className="p-1.5 text-[#211B17] hover:text-[#8E2925] transition-colors rounded-full"
          >
            <X size={20} />
          </button>
        </div>

        {/* Free Shipping Progress Indicator */}
        <div className="bg-[#EFE3D0]/70 px-5 py-3 border-b border-[#211B17]/10">
          <p className="text-xs text-[#211B17] font-medium text-center">
            {freeShippingRemaining > 0 ? (
              <>
                Add <span className="text-[#8E2925] font-bold">₹{freeShippingRemaining}</span> more for Free Express Delivery across India!
              </>
            ) : (
              <span className="text-[#59634C] font-semibold flex items-center justify-center gap-1.5">
                <CheckCircle2 size={14} /> You unlocked FREE Express Delivery!
              </span>
            )}
          </p>
          <div className="w-full bg-[#211B17]/10 h-1.5 rounded-full mt-2 overflow-hidden">
            <div
              className="bg-[#8E2925] h-full transition-all duration-500 rounded-full"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        </div>

        {/* Body / Items or Empty State */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-4">
          {orderComplete ? (
            <div className="text-center py-12 space-y-4">
              <div className="w-16 h-16 bg-[#59634C]/10 text-[#59634C] rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 size={36} />
              </div>
              <h3 className="font-serif text-3xl text-[#211B17]">
                Order Confirmed!
              </h3>
              <p className="text-sm text-[#75695D] max-w-xs mx-auto leading-relaxed">
                Dhanyawad! Your handcrafted Sareya order has been placed. We are fresh-packing your treats straight from Bihar.
              </p>
              <div className="pt-4">
                <Button variant="primary" onClick={closeCart}>
                  Continue Browsing
                </Button>
              </div>
            </div>
          ) : items.length === 0 ? (
            <div className="text-center py-16 space-y-4">
              <div className="w-16 h-16 bg-[#EFE3D0] text-[#75695D] rounded-full flex items-center justify-center mx-auto">
                <ShoppingBag size={28} />
              </div>
              <h3 className="font-serif text-2xl text-[#211B17]">
                Your bag is empty
              </h3>
              <p className="text-xs sm:text-sm text-[#75695D] max-w-xs mx-auto">
                Experience the authentic taste of Bihar. Explore our heirloom Thekua, stone-ground Sattu, and festive delights.
              </p>
              <div className="pt-2">
                <Link
                  href="/shop"
                  onClick={closeCart}
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#8E2925] hover:text-[#641B1B] border-b border-[#8E2925] pb-0.5"
                >
                  <span>Explore the Collection</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          ) : (
            items.map(({ product, quantity }) => (
              <div
                key={product.id}
                className="flex gap-4 p-3 border border-[#211B17]/10 bg-white/60"
              >
                {/* Product Thumbnail */}
                <div className="w-20 h-24 shrink-0 relative overflow-hidden bg-[#EFE3D0]">
                  <ResponsiveImage
                    src={product.image}
                    alt={product.name}
                    aspectRatio="4/5"
                    sizes="80px"
                  />
                </div>

                {/* Details */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start gap-2">
                      <Link
                        href={`/products/${product.slug}`}
                        onClick={closeCart}
                        className="font-serif text-base text-[#211B17] hover:text-[#8E2925] transition-colors leading-tight line-clamp-1"
                      >
                        {product.name}
                      </Link>
                      <button
                        onClick={() => removeItem(product.id)}
                        aria-label={`Remove ${product.name}`}
                        className="text-[#75695D] hover:text-[#8E2925] p-0.5 transition-colors"
                      >
                        <Trash2 size={15} />
                      </button>
                    </div>
                    <p className="text-[11px] text-[#75695D] mt-0.5">
                      {product.weight}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <QuantitySelector
                      quantity={quantity}
                      onIncrease={() => updateQuantity(product.id, quantity + 1)}
                      onDecrease={() => updateQuantity(product.id, quantity - 1)}
                      size="sm"
                    />
                    <ProductPrice
                      price={product.price * quantity}
                      size="sm"
                    />
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer / Subtotal & Checkout */}
        {items.length > 0 && !orderComplete && (
          <div className="p-5 sm:p-6 border-t border-[#211B17]/10 bg-[#F7F1E7] space-y-4">
            <div className="space-y-1.5 text-sm">
              <div className="flex justify-between text-[#75695D]">
                <span>Subtotal</span>
                <span className="font-semibold text-[#211B17]">₹{subtotal}</span>
              </div>
              <div className="flex justify-between text-[#75695D]">
                <span>Shipping</span>
                <span>
                  {freeShippingRemaining === 0 ? (
                    <span className="text-[#59634C] font-medium">FREE</span>
                  ) : (
                    "₹70 at checkout"
                  )}
                </span>
              </div>
              <div className="border-t border-[#211B17]/10 pt-2 flex justify-between font-serif text-xl text-[#211B17]">
                <span>Total</span>
                <span className="text-[#8E2925] font-semibold">
                  ₹{subtotal + (freeShippingRemaining === 0 ? 0 : 70)}
                </span>
              </div>
            </div>

            <Button
              variant="primary"
              size="lg"
              fullWidth
              onClick={handleCheckout}
              disabled={isCheckingOut}
            >
              {isCheckingOut ? "PROCESSING..." : "CHECKOUT NOW"}
            </Button>

            <div className="flex items-center justify-center gap-2 text-[11px] text-[#75695D]">
              <ShieldCheck size={14} className="text-[#59634C]" />
              <span>Direct dispatch from Bihar kitchens • 100% Freshness Guarantee</span>
            </div>
          </div>
        )}
      </aside>
    </div>
  );
}
