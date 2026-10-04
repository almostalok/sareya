import React from "react";
import { Product } from "@/data/products";
import { ProductCard } from "./ProductCard";

interface ProductGridProps {
  products: Product[];
  priorityCount?: number;
  className?: string;
  columns?: 3 | 4;
}

export function ProductGrid({
  products,
  priorityCount = 0,
  className = "",
  columns = 4,
}: ProductGridProps) {
  const colClasses =
    columns === 3
      ? "grid-cols-2 md:grid-cols-2 lg:grid-cols-3"
      : "grid-cols-2 md:grid-cols-2 lg:grid-cols-4";

  return (
    <div
      className={`grid ${colClasses} gap-3 sm:gap-4 md:gap-6 w-full ${className}`}
    >
      {products.map((product, index) => (
        <ProductCard
          key={product.id}
          product={product}
          priorityImage={index < priorityCount}
        />
      ))}
    </div>
  );
}
