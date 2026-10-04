"use client";

import React from "react";
import Link from "next/link";
import { Product } from "@/data/products";
import { ResponsiveImage } from "@/components/ui/ResponsiveImage";
import { ProductPrice } from "./ProductPrice";
import { AddToCartButton } from "./AddToCartButton";

interface ProductCardProps {
  product: Product;
  priorityImage?: boolean;
}

export function ProductCard({ product, priorityImage = false }: ProductCardProps) {
  return (
    <article className="group flex flex-col h-full bg-transparent border border-[#211B17]/10 hover:border-[#8E2925]/30 transition-colors duration-400 bg-[#F7F1E7]">
      {/* Product Image Link */}
      <Link
        href={`/products/${product.slug}`}
        className="block relative overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8E2925]"
      >
        <ResponsiveImage
          src={product.image}
          alt={product.name}
          aspectRatio="4/5"
          objectFit="cover"
          objectPosition="center"
          priority={priorityImage}
          hoverScale={true}
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
          className="group-hover:scale-[1.03] transition-transform duration-500 ease-out"
        />

        {/* Subtle Badge */}
        {product.badge && (
          <div className="absolute top-2.5 left-2.5 z-10">
            <span className="inline-block bg-[#F7F1E7]/90 backdrop-blur-xs text-[#8E2925] border border-[#8E2925]/20 text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5">
              {product.badge}
            </span>
          </div>
        )}
      </Link>

      {/* Decorative separator line */}
      <div className="w-full h-px bg-[#211B17]/10 group-hover:bg-[#8E2925]/30 transition-colors duration-400" />

      {/* Product Info & Actions */}
      <div className="p-3.5 sm:p-4 md:p-5 flex flex-col flex-1 justify-between gap-3 sm:gap-4">
        <div className="space-y-1.5 sm:space-y-2">
          {product.region && (
            <p className="text-[10px] sm:text-[11px] font-medium tracking-[0.16em] uppercase text-[#B95A3C]">
              {product.region}
            </p>
          )}

          <h3 className="font-serif text-lg sm:text-xl md:text-2xl font-normal leading-tight text-[#211B17] group-hover:text-[#8E2925] transition-colors duration-300">
            <Link href={`/products/${product.slug}`}>
              {product.name}
            </Link>
          </h3>

          <p className="text-xs sm:text-xs text-[#75695D] line-clamp-2 leading-relaxed">
            {product.tagline || product.description}
          </p>
        </div>

        <div className="space-y-3 pt-2">
          <div className="flex items-center justify-between">
            <ProductPrice
              price={product.price}
              originalPrice={product.originalPrice}
              size="md"
            />
            <span className="text-[11px] text-[#75695D] font-light hidden sm:inline">
              {product.weight}
            </span>
          </div>

          <AddToCartButton product={product} variant="primary" />
        </div>
      </div>
    </article>
  );
}
